"use client";

// TopBar — "..." | camera icon | "+" green button
export default function TopBar() {
  return (
    <div className="flex items-center justify-between px-4 pt-2 pb-1 bg-white">
      {/* Three dots */}
      <button className="p-1 text-black">
        <svg width="22" height="6" viewBox="0 0 22 6" fill="none">
          <circle cx="2" cy="3" r="2" fill="#111" />
          <circle cx="11" cy="3" r="2" fill="#111" />
          <circle cx="20" cy="3" r="2" fill="#111" />
        </svg>
      </button>

      {/* Right side: camera + add */}
      <div className="flex items-center gap-4">
        {/* Camera */}
        <button className="p-1 text-black">
          <svg width="26" height="24" viewBox="0 0 26 24" fill="none">
            <path d="M4 8C4 6.89543 4.89543 6 6 6H7.5C8 6 8.5 5.5 8.7 5L9.5 3C9.7 2.5 10 2 10.5 2H15.5C16 2 16.3 2.5 16.5 3L17.3 5C17.5 5.5 18 6 18.5 6H20C21.1046 6 22 6.89543 22 8V18C22 19.1046 21.1046 20 20 20H6C4.89543 20 4 19.1046 4 18V8Z" stroke="black" strokeWidth="1.8" />
            <circle cx="13" cy="13" r="4.5" stroke="black" strokeWidth="1.8" />
          </svg>
        </button>

        {/* Green "+" button */}
        <button className="w-[30px] h-[30px] rounded-full bg-[#25D366] flex items-center justify-center shadow-sm">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2V12M2 7H12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
