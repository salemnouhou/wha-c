"use client";

// Archived row — archive icon + "Archived" label
export default function ArchivedRow() {
  return (
    <button className="w-full flex items-center gap-4 px-4 py-3 bg-white border-b border-[#F0F0F0]">
      {/* Archive box icon */}
      <div className="w-12 h-12 flex items-center justify-center pl-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="6" width="18" height="13" rx="1.5" stroke="#8E8E93" strokeWidth="1.5" />
          <path d="M9 10H15" stroke="#8E8E93" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="2" y="3" width="20" height="3" rx="1" stroke="#8E8E93" strokeWidth="1.5" />
        </svg>
      </div>
      <span className="text-[17px] font-semibold text-black leading-tight">Archived</span>
    </button>
  );
}
