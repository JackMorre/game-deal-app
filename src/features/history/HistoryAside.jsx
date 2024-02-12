function HistoryAside({ handleHistorySeeMore }) {
  return (
    <div className="flex flex-col">
      <div className="flex p-4 justify-between">
        <h2 className="text-2xl ">History</h2>

        <button onClick={handleHistorySeeMore}>See More</button>
      </div>
      <div className="border-t grow">
        <h3 className="py-3 px-4 border-b">Recent History</h3>
        <div className="flex flex-col justify-between h-full">
          <div className="flex py-2 px-4 justify-between mb-[-1px]">
            <h4>Witcher III: Wild Hunt</h4>
            <p className="text-xs text-sky-50/20 self-end ">searched</p>
          </div>
          <div className="flex py-2 px-4 justify-between mb-[-1px]">
            <h4>Witcher III: Wild Hunt</h4>
            <p className="text-xs text-sky-50/20 self-end ">searched</p>
          </div>
          <div className="flex py-2 px-4 justify-between mb-[-1px]">
            <h4>Witcher III: Wild Hunt</h4>
            <p className="text-xs text-sky-50/20 self-end ">searched</p>
          </div>
          <div className="flex py-2 px-4 justify-between mb-[-1px]">
            <h4>Witcher III: Wild Hunt</h4>
            <p className="text-xs text-sky-50/20 self-end ">searched</p>
          </div>
          <div className="flex py-2 px-4 justify-between mb-[-1px]">
            <h4>Witcher III: Wild Hunt</h4>
            <p className="text-xs text-sky-50/20 self-end ">searched</p>
          </div>
          <div className="flex py-2 px-4 justify-between mb-[-1px]">
            <h4>Witcher III: Wild Hunt</h4>
            <p className="text-xs text-sky-50/20 self-end ">searched</p>
          </div>
          <div className="flex py-2 px-4 justify-between mb-[-1px]">
            <h4>Witcher III: Wild Hunt</h4>
            <p className="text-xs text-sky-50/20 self-end ">searched</p>
          </div>
          <div className="flex py-2 px-4 justify-between mb-[-1px]">
            <h4>Witcher III: Wild Hunt</h4>
            <p className="text-xs text-sky-50/20 self-end ">searched</p>
          </div>
          <div className="flex py-2 px-4 justify-between mb-[-1px]">
            <h4>Witcher III: Wild Hunt</h4>
            <p className="text-xs text-sky-50/20 self-end ">searched</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryAside;
