import { FaHistory } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toggleHistory } from "../UiSlice";

function HistoryBtn() {
  const dispatch = useDispatch();
  const isHistoryOpen = useSelector((state) => state.ui.isHistoryOpen);

  const toggleHistoryButton = () => {
    dispatch(toggleHistory());
  };

  return (
    <button className="p-4" onClick={toggleHistoryButton}>
      {isHistoryOpen ? <FaXmark size="20px" /> : <FaHistory size="20px" />}
    </button>
  );
}

export default HistoryBtn;
