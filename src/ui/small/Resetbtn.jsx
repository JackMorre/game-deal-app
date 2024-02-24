import { useDispatch } from "react-redux";
import { resetAll } from "../../features/dataSlice";
import { useNavigate } from "react-router-dom";

function Resetbtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetAll());
    navigate("/");
  };
  return (
    <button
      onClick={handleReset}
      className="grow uppercase bg-sky-950 text-sky-50 border-r hover:text-sky-950 hover:bg-sky-50 transition-all"
    >
      Reset
    </button>
  );
}

export default Resetbtn;
