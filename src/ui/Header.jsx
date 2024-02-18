import { useDispatch } from "react-redux";
import SearchBar from "../features/search/SearchBar";
import { FaBars } from "react-icons/fa";
import { toggleMenu } from "./UiSlice";

function Header() {
  const dispatch = useDispatch();

  const toggleMenuHeader = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="flex gap-4 py-4 px-4 border-b">
      <button onClick={toggleMenuHeader}>
        <FaBars size="30px" />
      </button>
      <h1 className="text-2xl hidden">BGD</h1>
      <SearchBar />
    </header>
  );
}

export default Header;
