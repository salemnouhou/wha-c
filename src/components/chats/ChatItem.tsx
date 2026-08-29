"use client";
import { Chat } from "@/lib/chats-data";

// ---- Avatar ---------------------------------------------------------------
function Avatar({ chat }: { chat: Chat }) {
  return (
    <div className="relative flex-shrink-0 w-12 h-12">
      {/* Story / status ring */}
      {chat.hasStoryRing && (
        <div className="absolute inset-0 rounded-full border-[2.5px] border-[#25D366]" />
      )}
      {chat.hasStatusRing && (
        <div className="absolute inset-0 rounded-full border-[2.5px] border-[#E5E5EA]" />
      )}

      {/* Avatar Image */}
      <img
        src={chat.avatar}
        alt={chat.name}
        className="w-full h-full rounded-full object-cover bg-gray-200"
      />

      {/* Animated "typing" status ring for Mom */}
      {chat.hasStatusRing && (
        <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-white flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <circle cx="6" cy="6" r="5" stroke="#8E8E93" strokeWidth="1.2" fill="none" />
            <path d="M6 6 L6 3" stroke="#8E8E93" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      )}
    </div>
  );
}

// ---- Last message ---------------------------------------------------------
function LastMessage({ chat }: { chat: Chat }) {
    if (chat.isTyping) {
    return (
      <span className="text-[15px] text-[#25D366] font-medium italic truncate">
        {chat.lastMessage}
      </span>
    );
  }
    if (chat.isDeleted) {
    return (
      <span className="flex items-center gap-1 text-[15px] text-[#8E8E93] truncate">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="6" stroke="#8E8E93" strokeWidth="1.2" />
          <path d="M4.5 7H9.5M7 4.5L4.5 7L7 9.5" stroke="#8E8E93" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {chat.lastMessage}
      </span>
    );
  }
    if (chat.hasLocation) {
    return (
      <span className="flex items-center gap-1 text-[15px] text-[#111] truncate">
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
          <path d="M6 0C3.24 0 1 2.24 1 5c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" fill="#8E8E93" />
          <circle cx="6" cy="5" r="2" fill="white" />
        </svg>
        {chat.lastMessage}
      </span>
    );
  }
    return (
    <span className="text-[15px] text-[#8E8E93] truncate flex items-center gap-1">
      {chat.hasDoubleTick && (
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="flex-shrink-0">
          <path d="M1 5L4 8L9 2" stroke="#4cc9f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 5L9 8L14 2" stroke="#4cc9f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {chat.lastMessage}
    </span>
  );
}

// ---- Right meta (time + badge) -------------------------------------------
function ChatMeta({ chat }: { chat: Chat }) {
  return (
    <div className="flex flex-col items-end gap-1 flex-shrink-0 ml-2">
      {/* Time */}
      {chat.time && (
        <span
          className={`text-[12px] font-normal ${
            chat.timeColor === "green" ? "text-[#25D366]" : "text-[#8E8E93]"
          }`}
        >
          {chat.time}
        </span>
      )}

      {/* Badges row */}
      <div className="flex items-center gap-1">
        {/* Pin icon */}
        {chat.isPinned && !chat.unreadCount && (
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
            <path d="M6 0L7.5 4H11L8.5 6.5L9.5 10.5L6 8L2.5 10.5L3.5 6.5L1 4H4.5L6 0Z" fill="#C7C7CC" />
          </svg>
        )}

        {/* Mention badge (@) */}
        {chat.unreadType === "mention" && (
          <div className="w-[18px] h-[18px] rounded-full bg-[#25D366] flex items-center justify-center">
            <span className="text-white text-[12px] font-bold leading-none">@</span>
          </div>
        )}

        {/* Normal unread count badge */}
        {chat.unreadCount && !chat.hasLiveActivity && (
          <div className="min-w-[18px] h-[18px] px-1 rounded-full bg-[#25D366] flex items-center justify-center">
            <span className="text-white text-[11px] font-bold leading-none">{chat.unreadCount}</span>
          </div>
        )}

        {/* Live activity badge (Doc Brown — spinning ring) */}
        {chat.hasLiveActivity && (
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#00C6FB] to-[#a855f7] flex items-center justify-center">
              <div className="w-[18px] h-[18px] rounded-full bg-white" />
            </div>
            {chat.unreadCount && (
              <div className="min-w-[18px] h-[18px] px-1 rounded-full bg-[#25D366] flex items-center justify-center">
                <span className="text-white text-[11px] font-bold leading-none">{chat.unreadCount}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ---- Main ChatItem --------------------------------------------------------
export default function ChatItem({ chat }: { chat: Chat }) {
  return (
    <button className="w-full flex items-center gap-3 px-4 py-3 bg-white border-b border-[#F2F2F7] active:bg-[#F2F2F7] transition-colors text-left">
      <Avatar chat={chat} />

      {/* Center: name + message */}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-1 mb-[2px]">
          <span className="text-[17px] font-semibold text-black leading-tight truncate">
            {chat.name}
          </span>
          {chat.nameEmoji && (
            <span className="text-[15px] leading-tight">{chat.nameEmoji}</span>
          )}
        </div>
        <LastMessage chat={chat} />
      </div>

      <ChatMeta chat={chat} />
    </button>
  );
}
