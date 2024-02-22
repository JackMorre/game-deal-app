import { checkTitleLength } from "../utility/helpers";

import { useDispatch } from "react-redux";

import { updateDealID } from "../features/dataSlice";
import { FaStar } from "react-icons/fa";

function MainListItem({ game }) {
  const dispatch = useDispatch();
  const handleNavigateDeal = () => {
    dispatch(
      updateDealID(!game.cheapestDealID ? game.dealID : game.cheapestDealID)
    );
  };

  const gameTitle = !game.external ? game.name : game.external;
  return (
    <li
      onClick={handleNavigateDeal}
      className="cursor-pointer border-b mb-[-1px] flex items-center justify-between py-3 px-3 last:border-none"
    >
      <div className="flex gap-4 items-center ">
        <div className="overflow-hidden w-12 h-12 rounded-full">
          <img
            className=" max-w-none w-40"
            src={game.thumb}
            alt={`${gameTitle} thumbnail`}
          />
        </div>
        <h2 className="">{checkTitleLength(gameTitle)}</h2>
        {game.isInWatchlist === true ? <FaStar color="#f0f9ff" /> : null}
      </div>
      <div className="flex gap-2">
        {/* <p className="text-xs self-end opacity-75">{game.normalPrice}</p> */}
        {game.retailPrice && (
          <p className="text-xs self-end opacity-50">{game.retailPrice}</p>
        )}
        <h3 className="text-xl leading-5 font-bold">
          {!game.cheapest ? game.salePrice : game.cheapest}
        </h3>
      </div>
    </li>
  );
}

export default MainListItem;
