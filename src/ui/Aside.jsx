import Resetbtn from "./small/Resetbtn";
import HistoryBtn from "./small/HistoryBtn";
import { FaXmark } from "react-icons/fa6";
import HistoryAside from "../features/history/HistoryAside";
import MainMenu from "./MainMenu";
import { useDispatch, useSelector } from "react-redux";
import { resetMenu } from "./UiSlice";

function Aside() {
  const isMenuOpen = useSelector((state) => state.ui.isMenuOpen);
  const isHistoryOpen = useSelector((state) => state.ui.isHistoryOpen);

  const dispatch = useDispatch();

  const toggleMenuHeader = () => {
    dispatch(resetMenu());
  };

  return (
    <aside
      className={`absolute top-0 left-0 z-10 ${
        isMenuOpen ? "" : "hidden"
      } w-full flex`}
    >
      <div
        className={`w-5/6 h-screen bg-sky-950  drop-shadow-2xl grid-rows-[auto_1fr_auto] grid`}
      >
        <div className="flex items-center justify-between p-4 border-b sm:hidden">
          <button onClick={toggleMenuHeader}>
            <FaXmark size="30px" />
          </button>

          <h1 className="text-xl text-stone-300">
            {isHistoryOpen ? "History" : "BGD"}
          </h1>
        </div>
        {isHistoryOpen ? <HistoryAside /> : <MainMenu />}

        <div className="flex justify-between bg-inherit border-t ">
          <Resetbtn />
          <HistoryBtn />
        </div>
      </div>
      <button
        onClick={toggleMenuHeader}
        className="w-1/6 h-screen cursor-default"
      ></button>
    </aside>
  );
}

export default Aside;
