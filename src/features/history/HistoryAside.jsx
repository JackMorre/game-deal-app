import { useSelector } from "react-redux";
import HistoryCard from "./HistoryCard";

function HistoryAside() {
  const { history } = useSelector((state) => state.data);
  return (
    <div className="flex flex-col h-auto overflow-y-scroll">
      <div className="border-t mt-[-1px] grow h-full">
        <h3 className="pt-4 pb-2 mx-2 h-auto border-b text-2xl text-stone-300 font-bold leading-4 ">
          Recent History
        </h3>
        {history.length === 0 ? (
          <p className="px-2 py-2">No History Recorded</p>
        ) : (
          <ul className="flex flex-col h-auto">
            {history.map((item) => {
              return (
                <HistoryCard
                  name={item.name}
                  label={item.label}
                  key={item.id}
                />
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default HistoryAside;
