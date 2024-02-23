import Resetbtn from "./small/Resetbtn";
import HistoryBtn from "./small/HistoryBtn";
import { FaXmark } from "react-icons/fa6";
import HistoryAside from "../features/history/HistoryAside";
import MainMenu from "./MainMenu";
import { useDispatch, useSelector } from "react-redux";
import { resetMenu } from "./UiSlice";

function Aside() {
  const isMenuOpen = useSelector((state) => state.ui.isMenuOpen);
  const { isHistoryOpen, isOnDesktopMode } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const toggleMenuHeader = () => {
    dispatch(resetMenu());
  };

  return (
    <aside
      className={`absolute top-0 left-0 z-10 ${
        isMenuOpen ? "" : isOnDesktopMode ? "" : "hidden"
      } w-full flex sm:static sm:w-2/6 sm:shrink`}
    >
      <div
        className={`w-5/6 sm:w-full h-screen bg-sky-950  drop-shadow-2xl grid-rows-[auto_1fr_auto] grid sm:grid-rows-[1fr_auto]`}
      >
        {!isOnDesktopMode && (
          <div className="flex items-center justify-between p-4 border-b">
            <button onClick={toggleMenuHeader}>
              <FaXmark size="30px" />
            </button>

            <h1 className="text-xl text-stone-300">
              {isHistoryOpen ? "History" : "BGD"}
            </h1>
          </div>
        )}
        {isHistoryOpen ? <HistoryAside /> : <MainMenu />}

        <div className="flex justify-between bg-inherit border-t h-auto ">
          <Resetbtn />
          <HistoryBtn />
        </div>
      </div>
      {!isOnDesktopMode ? (
        <button
          onClick={toggleMenuHeader}
          className="w-1/6 h-screen cursor-default"
        ></button>
      ) : null}
    </aside>
  );
}

export default Aside;
