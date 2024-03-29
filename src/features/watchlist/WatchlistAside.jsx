import { useDispatch, useSelector } from "react-redux";
import WatchlistItem from "./WatchlistItem";
import { updateData } from "../dataSlice";
import { useNavigate } from "react-router-dom";
import { resetMenu } from "../../ui/UiSlice";

function WatchlistAside() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { watchlist } = useSelector((state) => state.data);

  const handleWatchlistSeeAll = () => {
    dispatch(updateData({ searchTerm: "watchlist", games: watchlist }));

    navigate("/watchlist");
    dispatch(resetMenu());
  };
  return (
    <div className="h-3/4 grid-rows-[auto_1fr] grid pt-4">
      <div className="flex justify-between mx-2 pb-2 border-b">
        <h2 className="text-2xl text-stone-300  font-bold leading-4 sm:leading-6">
          Watch List
        </h2>
        {watchlist.length < 10 ? null : (
          <button
            onClick={handleWatchlistSeeAll}
            className="items-end text-stone-200 cursor-pointer self-end hover:underline leading-4"
          >
            See more{" "}
          </button>
        )}
      </div>

      {watchlist.length === 0 ? (
        <p className="text-center pt-1">Nothing on your wishlist yet!</p>
      ) : (
        <ul className="overflow-y-scroll h-full flex flex-col gap-3 pt-1">
          {watchlist.map((deal) => {
            return <WatchlistItem deal={deal} key={deal.dealID} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default WatchlistAside;
