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

  const id = uuid();

  const navigate = useNavigate();

  useEffect(() => {
    if (!searchTerm) return;
    dispatch(toggleLoading());
    axios
      .get(`https://www.cheapshark.com/api/1.0/games?title=${searchTerm}`)
      .then((res) => {
        dispatch(updateData({ searchTerm, games: res.data }));
        dispatch(toggleLoading());
        dispatch(updateHistory({ label: "searched", name: searchTerm, id }));
        navigate(`/search/${searchTerm}`);
        setQuery("");
        setSearchTerm("");
      });
  }, [dispatch, searchTerm, query, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(query);
  };
  return (
    <form className="grow flex" onSubmit={handleSubmit}>
      <input
        className="w-full bg-sky-950 border-sky-100 border px-2 py-1 outline-none focus:ring-4"
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
