"use client";

import { FilterType } from "@/app/page";
import { ChatData } from "@/components/chats/ChatView";
import { chats, Chat } from "@/lib/chats-data";

interface ChatListProps {
  activeFilter: FilterType;
  onChatClick: (chat: ChatData) => void;
}

export default function ChatList({ activeFilter, onChatClick }: ChatListProps) {
  // Filter the chats based on active filter
  const filteredChats = chats.filter((c) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Unread") return c.unreadCount && c.unreadCount > 0;
    if (activeFilter === "Favourites") return c.isFavourite || c.nameEmoji === "❤️" || c.nameEmoji === "💕";
    if (activeFilter === "Groups") return c.isGroup;
    return true;
  });

  return (
    <div className="chat-list">
      {/* Archived */}
      {activeFilter === "All" && (
        <div className="archived-row">
          <div className="archived-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#8e8e93" strokeWidth="1.8" width="20" height="20">
              <rect x="2" y="7" width="20" height="13" rx="2" />
              <path d="M2 7l2-4h16l2 4" />
              <line x1="9" y1="12" x2="15" y2="12" />
            </svg>
          </div>
          <span className="archived-label">Archived</span>
        </div>
      )}

      {filteredChats.map((c) => (
        <div key={c.id} className="chat-row" onClick={() => onChatClick({ id: c.id, name: c.name + (c.nameEmoji ? ` ${c.nameEmoji}` : ""), avatar: c.avatar })}>
          <div className="avatar" style={{ border: c.hasStoryRing ? "2.5px solid #25D366" : "2px solid #e5e5ea" }}>
            <img src={c.avatar} alt={c.name} />
          </div>
          <div className="chat-content">
            <div className="chat-top">
              <div className="chat-name">{c.name}{c.nameEmoji ? ` ${c.nameEmoji}` : ""}</div>
            </div>
            <div className="chat-preview">
              {c.showMessage ? (
                <span className="chat-preview-text">{c.lastMessage}</span>
              ) : (
                <div className="skeleton-text"></div>
              )}
            </div>
          </div>
          
          <div className="chat-meta">
            {c.isPinned && (
              <svg viewBox="0 0 24 24" fill="#8e8e93" width="14" height="14">
                <path d="M16 3H5c-1.1 0-2 .9-2 2v14l4-4h13c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
              </svg>
            )}
            {c.unreadCount && c.unreadCount > 0 ? (
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                {c.unreadType === "mention" && <span style={{ color: "#25D366", fontSize: "16px", fontWeight: 600 }}>@</span>}
                <div className="badge">{c.unreadCount}</div>
              </div>
            ) : null}
            {c.hasLiveActivity && (
              <div className="loading-ring"><div className="loading-inner"></div></div>
            )}
          </div>
        </div>
      ))}

      {/* Empty State for Groups */}
      {filteredChats.length === 0 && (
        <div style={{ padding: "40px 20px", textAlign: "center", color: "#8e8e93", fontSize: "15px" }}>
          No chats to display.
        </div>
      )}
    </div>
  );
}
