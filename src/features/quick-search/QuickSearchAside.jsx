import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoading, updateData, updateQuicksearchData } from "../dataSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { resetMenu } from "../../ui/UiSlice";
import QuicksearchCard from "./QuicksearchCard";
import { searchArray } from "../../utility/helpers";

function QuickSearchAside() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [url, setUrl] = useState(
    "https://www.cheapshark.com/api/1.0/deals?upperPrice=10"
  );

  const { quicksearchData } = useSelector((state) => state.data);

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
            return {
              ...obj,
              name: obj.title,
              cheapestDealID: obj.dealID,
              cheapest: obj.salePrice,
            };
          });
          dispatch(updateData({ searchTerm, games: newArr }));
          const updatedArr = searchArray(quicksearchData, searchTerm);
          dispatch(updateQuicksearchData(updatedArr));
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
    [url, searchTerm, dispatch, navigate, quicksearchData]
  );

  const handleUpdateUrl = (urlStr, searchStr) => {
    setUrl(urlStr);
    setSearchTerm(searchStr);
  };

  return (
    <div className="h-1/4 pt-4 ">
      <div className="flex justify-between pb-2 mx-2 border-b">
        <h2 className="text-2xl text-stone-300  font-bold leading-4 ">
          Quick Search
        </h2>
      </div>

      <ul className="flex flex-col gap-2 pt-1 overflow-y-scroll h-3/4">
        {quicksearchData.map((obj) => {
          return (
            <QuicksearchCard
              handleUpdateUrl={handleUpdateUrl}
              data={obj}
              key={obj.name}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default QuickSearchAside;
