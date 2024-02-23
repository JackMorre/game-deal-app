import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import { Bars } from "react-loading-icons";
import { checkInWishlist } from "../utility/helpers";
import {
  resetQuicksearch,
  toggleLoading,
  updateClicked,
  updateHistory,
} from "../features/dataSlice";
import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import Aside from "./Aside";
import { useDispatch, useSelector } from "react-redux";
import { toggleDesktopMode } from "./UiSlice";

function AppLayout() {
  const [isDesktop, setIsDesktop] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [width] = useWindowSize();

  const { watchlist, dealID } = useSelector((state) => state.data);
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const { isMenuOpen, isOnDesktopMode } = useSelector((state) => state.ui);

  useEffect(
    function () {
      if (!dealID) return;
      const getDealData = async () => {
        try {
          dispatch(toggleLoading());
          const res = await axios.get(
            `https://www.cheapshark.com/api/1.0/deals?id=${dealID}`
          );
          const checked = checkInWishlist(watchlist, res.data.gameInfo);
          dispatch(resetQuicksearch());
          dispatch(
            updateHistory({
              label: "viewed",
              name: res.data.gameInfo.name,
              id: uuid(),
            })
          );
          dispatch(
            updateClicked({ ...res.data.gameInfo, isInWatchlist: checked })
          );
          // dispatch(updateDealID(dealID));
          navigate(`/deals/${dealID}`);
          dispatch(toggleLoading());
        } catch (error) {
          console.log(error);
        }
      };

      getDealData();
    },
    [dispatch, dealID, navigate, watchlist]
  );

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  useEffect(
    function () {
      if (width >= 640) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    },
    [width]
  );

  useEffect(
    function () {
      if (isDesktop === true) {
        dispatch(toggleDesktopMode());
      } else {
        dispatch(toggleDesktopMode());
      }
    },
    [isDesktop, dispatch]
  );

  return (
    <div
      className={`bg-sky-950 text-sky-100 grid-rows-[auto_1fr_auto] grid h-screen ${
        isMenuOpen
          ? "after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0 after:bg-black/20 after:z-0"
          : ""
      }`}
    >
      <Header />
      <div className="block sm:flex w-screen overflow-y-hidden">
        <Aside />
        {isOnDesktopMode ? (
          <main className="overflow-y-scroll sm:w-4/6 sm:h-full sm:shrink-0">
            {isLoading ? <Bars /> : <Outlet />}
          </main>
        ) : (
          <main
            className={` ${
              isMenuOpen ? "overflow-hidden" : "overflow-y-scroll"
            }`}
          >
            {isLoading ? <Bars /> : <Outlet />}
          </main>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;
