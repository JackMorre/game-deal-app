import { useDispatch } from "react-redux";
import { updateDealID } from "../dataSlice";
import { resetMenu } from "../../ui/UiSlice";

function WatchlistItem({ deal }) {
  const dispatch = useDispatch();

  const handleNavigateDeal = () => {
    dispatch(resetMenu());
    dispatch(updateDealID(deal.dealID));
  };
  return (
    <li
      key={deal.dealID}
      onClick={handleNavigateDeal}
      className="transition-all flex flex-row justify-between px-2 cursor-pointer group mb-[-1px]"
    >
      <h3 className="transition-all text-slate-300 ml-0 group-hover:ml-4 text-inherit group-hover:text-slate-100">
        {deal.name}
      </h3>

      <span></span>

      <h4 className="text-slate-200 ">{deal.salePrice}</h4>
    </li>
  );
}

export default WatchlistItem;
