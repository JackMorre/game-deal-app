export default function HistoryCard({ name, label }) {
  return (
    <li className="flex py-2 px-2 justify-between mb-[-1px] cursor-pointer">
      <h4>{name}</h4>
      <p className="text-xs text-sky-50/20 self-end ">{label}</p>
    </li>
  );
}
