function WatchlistItem({ deal }) {
  return (
    <li className="transition-all flex flex-row justify-between p-2 cursor-pointer group mb-[-1px]">
      <h3 className="transition-all text-slate-300 ml-0 group-hover:ml-4 text-inherit group-hover:text-slate-100">
        {deal.name}
      </h3>

      <span></span>

      <h4 className="text-slate-200 ">{deal.salePrice}</h4>
    </li>
  );
}

export default WatchlistItem;
