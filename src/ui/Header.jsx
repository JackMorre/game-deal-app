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
    <header className="flex justify-center border-b">
      <div className="flex md:justify-between gap-4 py-4 px-4 sm:px-2 max-w-screen-lg grow">
        <button className="block sm:hidden" onClick={toggleMenuHeader}>
          <FaBars size="30px" />
        </button>
        <h1 className="text-2xl hidden sm:block">BGD</h1>
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
