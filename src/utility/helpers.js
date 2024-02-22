export const checkQuickSearchParam = ({ title }) => {
  switch (title) {
    case "best-deals":
      return title;
    case "deals-below-15":
      return title;
    case "deals-below-30":
      return title;
    default:
      throw Error(`${title} is not a quick search`);
  }
};

export const checkTitleLength = (title) => {
  if (title.length > 20) {
    const part = title.slice(0, 20) + "...";
    return part;
  }
  return title;
};

export const checkInWishlist = (wishlist, clickedDeal) => {
  const check = wishlist.find((deal) => deal.gameID === clickedDeal.gameID);
  if (check === undefined) return false;
  return true;
};

export const checkWishlistInData = (dataArr, watchlistArr) => {
  if (watchlistArr.length === 0) return dataArr;
  let newArr = [];
  for (let o = 0; o < dataArr.games.length; o++) {
    let added = false;
    for (let i = 0; i < watchlistArr.length; i++) {
      if (dataArr.games[o].cheapestDealID === watchlistArr[i].dealID) {
        added = true;
        break;
      } else {
        added = false;
      }
    }
    if (added === true) {
      newArr.push({ ...dataArr.games[o], isInWatchlist: true });
    } else {
      newArr.push({ ...dataArr.games[o], isInWatchlist: false });
    }
  }
  return { ...dataArr, games: newArr };
};
