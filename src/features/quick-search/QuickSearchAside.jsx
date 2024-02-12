function QuickSearchAside() {
  return (
    <div className="my-4">
      <div className="flex justify-between pb-2 mx-2 border-b">
        <h2 className="text-2xl text-stone-300  font-bold leading-4 ">
          Quick Search
        </h2>
      </div>

      <ul>
        <li className="group transition-all text-slate-300 p-2 cursor-pointer hover:border-t-slate-100 hover:border-b-slate-100 mb-[-1px] grid">
          <p className="transition-all ml-0 group-hover:ml-4 text-inherit group-hover:text-slate-100">
            Best Deal
          </p>
        </li>

        <li className="group transition-all text-slate-300 p-2 cursor-pointer mb-[-1px]">
          <p className="transition-all ml-0 group-hover:ml-4 text-inherit group-hover:text-slate-100">
            Games below £30
          </p>
        </li>

        <li className="group transition-all text-slate-300 p-2 cursor-pointer">
          <p className="transition-all ml-0 group-hover:ml-4 text-inherit group-hover:text-slate-100">
            Games Below £15
          </p>
        </li>
      </ul>
    </div>
  );
}

export default QuickSearchAside;
