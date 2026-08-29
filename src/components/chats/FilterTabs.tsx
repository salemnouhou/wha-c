"use client";
import { useState } from "react";

const tabs = ["All", "Unread", "Favourites", "Groups"];

export default function FilterTabs() {
  const [active, setActive] = useState("All");

  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white overflow-x-auto scrollbar-hide">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`
            flex-shrink-0 px-4 py-1.5 rounded-[20px] text-[14px] font-medium transition-colors
            ${
              active === tab
                ? "bg-[#E0F8E8] text-[#128C7E]"
                : "bg-[#F2F2F7] text-[#8E8E93]"
            }
          `}
        >
          {tab}
        </button>
      ))}

      {/* "+" add tab button */}
      <button className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F0F0F0] flex items-center justify-center">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M6 1V11M1 6H11" stroke="#555" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
