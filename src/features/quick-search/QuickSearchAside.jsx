import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleLoading, updateData } from "../dataSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { resetMenu } from "../../ui/UiSlice";

function QuickSearchAside() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [url, setUrl] = useState(
    "https://www.cheapshark.com/api/1.0/deals?upperPrice=15"
  );
  const [searchTerm, setSearchTerm] = useState("best-deals");

  useEffect(
    function () {
      if (!url) return;
      const getDealData = async () => {
        try {
          dispatch(resetMenu());
          dispatch(toggleLoading());
          const res = await axios.get(url);
          const newArr = res.data.map((obj) => {
            return { ...obj, name: obj.title, cheapestDealID: obj.dealID };
          });
          dispatch(updateData({ searchTerm, games: newArr }));
          dispatch(toggleLoading());
          navigate(`/quick-search/${searchTerm}`);
          setSearchTerm("");
          setUrl("");
        } catch (error) {
          console.log(error);
        }
      };

      getDealData();
    },
    [url, searchTerm, dispatch, navigate]
  );

  const handleUpdateUrl = (urlStr, searchStr) => {
    setUrl(urlStr);
    setSearchTerm(searchStr);
  };

  return (
    <div className="h-1/4 pt-4">
      <div className="flex justify-between pb-2 mx-2 border-b">
        <h2 className="text-2xl text-stone-300  font-bold leading-4 ">
          Quick Search
        </h2>
      </div>

      <ul className="flex flex-col justify-around gap-2 pt-1">
        <li className="group transition-all text-slate-300 mx-2 cursor-pointer hover:border-t-slate-100 hover:border-b-slate-100 mb-[-1px] hover:bg-sky-50">
          <button
            onClick={() => {
              handleUpdateUrl(
                "https://www.cheapshark.com/api/1.0/deals?upperPrice=10",
                "best-deals"
              );
            }}
            className="transition-all ml-0 group-hover:ml-4 text-inherit group-hover:text-slate-900"
          >
            Best Deals
          </button>
        </li>

        <li className="group transition-all text-slate-300 mx-2 cursor-pointer hover:border-t-slate-100 hover:border-b-slate-100 mb-[-1px] hover:bg-sky-50">
          <button
            onClick={() => {
              handleUpdateUrl(
                "https://www.cheapshark.com/api/1.0/deals?upperPrice=15",
                "deals-below-15"
              );
            }}
            className="transition-all ml-0 group-hover:ml-4 text-inherit group-hover:text-slate-900"
          >
            Deals Below £15
          </button>
        </li>

        <li className="group transition-all text-slate-300 mx-2 cursor-pointer hover:border-t-slate-100 hover:border-b-slate-100 mb-[-1px] hover:bg-sky-50">
          <button
            onClick={() => {
              handleUpdateUrl(
                "https://www.cheapshark.com/api/1.0/deals?upperPrice=30",
                "deals-below-30"
              );
            }}
            className="transition-all ml-0 group-hover:ml-4 text-inherit group-hover:text-slate-900"
          >
            Deals Below £30
          </button>
        </li>
      </ul>
    </div>
  );
}

export default QuickSearchAside;
