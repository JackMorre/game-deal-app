import QuickSearchAside from "../features/quick-search/QuickSearchAside";
import WatchlistAside from "../features/watchlist/WatchlistAside";

function MainMenu() {
  return (
    <div className="h-full overflow-y-hidden">
      <QuickSearchAside />
      <WatchlistAside />
    </div>
  );
}

export default MainMenu;
