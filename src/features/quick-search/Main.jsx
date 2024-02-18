import { checkQuickSearchParam } from "../../utility/helpers";
import Filter from "../../reuseable/Filter";
import MainListItem from "../../reuseable/MainListItem";
import { useDispatch, useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";

import { useNavigate } from "react-router-dom";

function Main() {
  const loading = useSelector((state) => state.data.loading);
  const { data } = useSelector((state) => state.data);

  return (
    <div className="">
      <Filter />
      {loading ? (
        <div className="flex justify-center items-center mt-4">
          <TailSpin
            visible={true}
            height="100"
            width="100"
            color="#f0f9ff"
            ariaLabel="line-wave-loading"
          />
        </div>
      ) : data.length === 0 ? (
        <p className="text-center mt-8 text-xl">
          Try searching for a game or use one of the quick searches in the menu.
        </p>
      ) : (
        <ul>
          {data.games.map((game) => (
            <MainListItem game={game} key={game.gameID} />
          ))}
        </ul>
      )}
    </div>
  );
}

export function loader({ params }) {
  const checked = checkQuickSearchParam(params);
  return checked;
  // ;
}

export default Main;
