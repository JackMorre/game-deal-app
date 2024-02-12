import { useEffect, useState } from "react";
import { checkTitleLength } from "../utility/helpers";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { updateClicked, updateDealID } from "../features/dataSlice";
import { checkInWishlist } from "../utility/helpers";

function MainListItem({ game }) {
  const [dealID, setDealID] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { watchlist } = useSelector((state) => state.data);

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
          dispatch(updateDealID(dealID));
          navigate(`/deals/${dealID}`);
        } catch (error) {
          console.log(error);
        }
      };

      getDealData();
    },
    [dispatch, dealID, navigate, watchlist]
  );

  const handleNavigateDeal = () => {
    setDealID(game.cheapestDealID);
  };
  return (
    <li
      onClick={handleNavigateDeal}
      className=" border-b mb-[-1px] flex items-center justify-between py-3 px-3"
    >
      <div className="flex gap-4 items-center ">
        <div className="overflow-hidden w-12 h-12 rounded-full">
          <img
            className=" max-w-none w-40"
            src={game.thumb}
            alt={`${game.external} thumbnail`}
          />
        </div>
        <h2 className="">{checkTitleLength(game.external)}</h2>
      </div>
      <div className="flex gap-2">
        {/* <p className="text-xs self-end opacity-75">{game.normalPrice}</p> */}
        <h3 className="text-xl leading-5 font-bold">{game.cheapest}</h3>
      </div>
    </li>
  );
}

export default MainListItem;
