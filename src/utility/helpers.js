export const checkQuickSearchParam = ({ title }) => {
  switch (title) {
    case "best-deals":
      return title;
    default:
      throw Error(`${title} is not a quick search`);
  }
};

export const checkTitleLength = (title) => {
  if (title.length > 20) {
    const part = title.slice(0, 25) + "...";
    return part;
  }
  return title;
};
