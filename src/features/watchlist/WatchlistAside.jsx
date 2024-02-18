import { useSelector } from "react-redux";
import WatchlistItem from "./WatchlistItem";

function WatchlistAside() {
  const { watchlist } = useSelector((state) => state.data);
  return (
    <div className="my-4">
      <div className="flex justify-between mb-2 mx-2 border-b">
        <h2 className="text-2xl text-stone-300  font-bold leading-4 ">
          Watch List
        </h2>

        <p className="items-end text-stone-200 cursor-pointer self-end hover:underline">
          See more{" "}
        </p>
      </div>

      {watchlist.length === 0 ? (
        <p className="text-center">Nothing on your wishlist yet!</p>
      ) : (
        <ul className="">
          {watchlist.map((deal) => {
            return <WatchlistItem deal={deal} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default WatchlistAside;
