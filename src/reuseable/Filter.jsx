import { useState } from "react";
import { FaAngleLeft, FaAngleDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../features/dataSlice";

function Filter() {
  const data = useSelector((state) => state.data.data);
  const dispatch = useDispatch();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleLowestPriceFiltering = () => {
    const newArray = data
      .slice()
      .sort((a, b) => Number(a.cheapest) - Number(b.cheapest));
    dispatch(updateData(newArray));
  };
  const handleHighestPriceFiltering = () => {
    const newArray = data
      .slice()
      .sort((a, b) => Number(b.cheapest) - Number(a.cheapest));
    dispatch(updateData(newArray));
  };
  return (
    <div className="p-4 flex justify-between border-b">
      <div></div>
      <button
        className="border py-0.5 px-4 flex gap-2 items-center relative"
        onClick={toggleFilter}
      >
        <p>Filter</p>
        {isFilterOpen ? <FaAngleDown /> : <FaAngleLeft />}
        {isFilterOpen && (
          <div className="absolute top-full right-0 bg-sky-950 w-[50vw] border z-50">
            <p
              onClick={handleLowestPriceFiltering}
              className="py-2 border-b hover:bg-sky-100 hover:text-sky-950"
            >
              Lowest Price
            </p>
            <p
              onClick={handleHighestPriceFiltering}
              className="py-2  hover:bg-sky-100 hover:text-sky-950"
            >
              Highest Price
            </p>
          </div>
        )}
      </button>
    </div>
  );
}

export default Filter;
