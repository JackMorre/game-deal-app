function WatchlistAside() {
  return (
    <div className="my-4">
      <div className="flex justify-between mb-4 mx-2">
        <h2 className="text-2xl text-stone-300  font-bold leading-4 ">
          Watch List
        </h2>

        <p className="items-end text-stone-200 cursor-pointer self-end hover:underline">
          See more{" "}
        </p>
      </div>

      <ul className="">
        <li className="transition-all flex flex-row justify-between p-2 border-t border-b cursor-pointer group mb-[-1px]">
          <h3 className="transition-all text-slate-300 ml-0 group-hover:ml-4 text-inherit group-hover:text-slate-100">
            Witcher 3 - Wild Hunt
          </h3>

          <span></span>

          <h4 className="text-slate-200 ">29.99</h4>
        </li>
      </ul>
    </div>
  );
}

export default WatchlistAside;
