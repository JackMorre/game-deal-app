import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import { Bars } from "react-loading-icons";
import { checkInWishlist } from "../utility/helpers";
import { updateClicked, updateHistory } from "../features/dataSlice";
import axios from "axios";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";

import Aside from "./Aside";
import { useDispatch, useSelector } from "react-redux";

function AppLayout() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { watchlist, dealID } = useSelector((state) => state.data);
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const isMenuOpen = useSelector((state) => state.ui.isMenuOpen);
  const id = uuid();

  useEffect(
    function () {
      if (!dealID) return;
      const getDealData = async () => {
        try {
          const res = await axios.get(
            `https://www.cheapshark.com/api/1.0/deals?id=${dealID}`
          );
          const checked = checkInWishlist(watchlist, res.data.gameInfo);
          dispatch(
            updateHistory({ label: "viewed", name: res.data.gameInfo.name, id })
          );
          dispatch(
            updateClicked({ ...res.data.gameInfo, isInWatchlist: checked })
          );
          // dispatch(updateDealID(dealID));
          navigate(`/deals/${dealID}`);
        } catch (error) {
          console.log(error);
        }
      };

      getDealData();
    },
    [dispatch, dealID, navigate, watchlist]
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

      <Aside />
      <main
        className={` ${isMenuOpen ? "overflow-hidden" : "overflow-y-scroll"}`}
      >
        {isLoading ? <Bars /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
