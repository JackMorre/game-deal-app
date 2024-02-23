import React from "react";

export default function QuicksearchCard({ handleUpdateUrl, data }) {
  return (
    <li
      className={`group transition-all text-slate-300 mx-2 cursor-pointer hover:border-t-slate-100 hover:border-b-slate-100 mb-[-1px] hover:bg-sky-50 ${
        data.opened === true ? "bg-sky-50" : ""
      }`}
    >
      <button
        onClick={() => {
          handleUpdateUrl(data.cheapsharkUrl, data.urlName);
        }}
        className={`transition-all ml-0 group-hover:ml-4 text-inherit group-hover:text-slate-900 ${
          data.opened === true ? "ml-4 text-slate-900" : ""
        }`}
      >
        {data.name}
      </button>
    </li>
  );
}
