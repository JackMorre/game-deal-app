import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleLoading, updateData, updateHistory } from "../dataSlice";
import { v4 as uuid } from "uuid";

function SearchBar() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(
    function () {
      if (!searchTerm) return;

      const updateUrlData = async () => {
        try {
          dispatch(toggleLoading());
          const res = await axios.get(
            `https://www.cheapshark.com/api/1.0/games?title=${searchTerm}`
          );
          dispatch(updateData({ searchTerm, games: res.data }));
          dispatch(toggleLoading());
          dispatch(
            updateHistory({ label: "searched", name: searchTerm, id: uuid() })
          );
          navigate(`/search/${searchTerm}`);
        } catch (error) {
          console.log(error);
        }
      };
      updateUrlData();
      // setQuery("");
      // setSearchTerm("");
    },
    [dispatch, searchTerm, navigate]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(query);
  };
  return (
    <form className="grow flex justify-end" onSubmit={handleSubmit}>
      <input
        className="w-full md:w-1/2 bg-sky-950 border-sky-100 border px-2 py-1 outline-none focus:ring-4"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button className="px-2 cursor-pointer border" type="submit">
        GO
      </button>
    </form>
  );
}

export default SearchBar;
