import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleLoading, updateData } from "../dataSlice";

function SearchBar() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!searchTerm) return;
    dispatch(toggleLoading());
    axios
      .get(`https://www.cheapshark.com/api/1.0/games?title=${searchTerm}`)
      .then((res) => {
        dispatch(updateData(res.data));
        dispatch(toggleLoading());
      });
  }, [dispatch, searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`);
    setSearchTerm(query);
    setQuery("");
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
