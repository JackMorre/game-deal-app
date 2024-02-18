import { checkQuickSearchParam } from "../../utility/helpers";
import Filter from "../../reuseable/Filter";
import MainListItem from "../../reuseable/MainListItem";
import { useDispatch, useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";
import { checkInWishlist } from "../../utility/helpers";
import { updateClicked, updateDealID } from "../../features/dataSlice";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.data.loading);
  const { data, watchlist, dealID } = useSelector((state) => state.data);

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
            updateClicked({ ...res.data.gameInfo, isInWatchlist: checked })
          );
          console.log("hello");
          // dispatch(updateDealID(dealID));
          navigate(`/deals/${dealID}`);
        } catch (error) {
          console.log(error);
        } finally {
        }
      };

      getDealData();
    },
    [dispatch, dealID, navigate, watchlist]
  );
  return (
    <div className="">
      <Filter />
      {loading ? (
        <div className="flex justify-center items-center mt-4">
          <TailSpin
            visible={true}
            height="100"
            width="100"
            color="#f0f9ff"
            ariaLabel="line-wave-loading"
          />
        </div>
      ) : data.length === 0 ? (
        <p className="text-center mt-8 text-xl">
          Try searching for a game or use one of the quick searches in the menu.
        </p>
      ) : (
        <ul>
          {data.map((game) => (
            <MainListItem game={game} key={game.gameID} />
          ))}
        </ul>
      )}
    </div>
  );
}

export function loader({ params }) {
  const checked = checkQuickSearchParam(params);
  return checked;
  // ;
}

export default Main;
