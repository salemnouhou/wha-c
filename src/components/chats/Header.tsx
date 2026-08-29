"use client";

import { FilterType } from "@/app/page";

interface HeaderProps {
  activeFilter: FilterType;
  setActiveFilter: (filter: FilterType) => void;
}

export default function Header({ activeFilter, setActiveFilter }: HeaderProps) {
  const tabs: FilterType[] = ["All", "Unread", "Favourites", "Groups"];

  return (
    <div className="header">
      <div className="header-top">
        <span className="header-title">Chats</span>
        <div className="header-actions">
          <div className="icon-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" width="17" height="17">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="8.5" cy="8.5" r="1.5" fill="#000" stroke="none" />
              <circle cx="15.5" cy="8.5" r="1.5" fill="#000" stroke="none" />
              <circle cx="8.5" cy="15.5" r="1.5" fill="#000" stroke="none" />
              <circle cx="15.5" cy="15.5" r="1.5" fill="#000" stroke="none" />
            </svg>
          </div>
          <div className="icon-btn" style={{ background: "#25D366" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" width="17" height="17">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </div>
        </div>
      </div>
      <div className="filters">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={`filter-chip ${activeFilter === tab ? "active" : "inactive"}`}
          >
            {tab}
          </button>
        ))}
        <button className="filter-chip add">+</button>
      </div>
    </div>
  );
}
