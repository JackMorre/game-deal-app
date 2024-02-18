import { checkTitleLength } from "../utility/helpers";

import { useDispatch, useSelector } from "react-redux";

import { updateDealID } from "../features/dataSlice";

function MainListItem({ game }) {
  const dispatch = useDispatch();
  const handleNavigateDeal = () => {
    dispatch(updateDealID(game.cheapestDealID));
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
