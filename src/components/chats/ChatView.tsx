"use client";

export interface ChatData {
  id: string;
  name: string;
  avatar: string;
}

interface ChatViewProps {
  chat: ChatData;
  onBack: () => void;
}

export default function ChatView({ chat, onBack }: ChatViewProps) {
  // Generate unique but consistent messages per chat using a simple hash of chat.id
  const getSeededRandom = (seed: string, index: number) => {
    let hash = 0;
    const str = seed + "-" + index.toString();
    for (let i = 0; i < str.length; i++) {
      hash = Math.imul(31, hash) + str.charCodeAt(i) | 0;
    }
    let t = hash += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  const messageCount = Math.floor(getSeededRandom(chat.id, 99) * 5) + 3; // 3 to 7 messages
  const messages = Array.from({ length: messageCount }).map((_, i) => {
    const isSent = getSeededRandom(chat.id, i * 2) > 0.5;
    const hour = Math.floor(getSeededRandom(chat.id, i * 3) * 12) + 1;
    const minute = Math.floor(getSeededRandom(chat.id, i * 4) * 60).toString().padStart(2, "0");
    const ampm = getSeededRandom(chat.id, i * 5) > 0.5 ? "AM" : "PM";
    return {
      id: i,
      isSent,
      time: `${hour}:${minute} ${ampm}`
    };
  });

  return (
    <>
      {/* CHAT HEADER */}
      <div className="chat-header">
        <div className="back-btn" onClick={onBack}>
          <span className="back-chevron">‹</span>
          <span className="back-badge">1</span>
        </div>
        <div className="contact-avatar">
          <img src={chat.avatar} alt={chat.name} />
        </div>
        <div className="contact-info">
          <div className="contact-name">{chat.name}</div>
          <div className="contact-sub">tap here for contact info</div>
        </div>
        <div className="chat-header-actions">
          <div className="chat-header-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" width="18" height="18">
              <path d="M15 10l4.553-2.277A1 1 0 0121 8.68V15.32a1 1 0 01-1.447.898L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
            </svg>
          </div>
          <div className="chat-header-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" width="18" height="18">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.02 4a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
          </div>
        </div>
      </div>

      {/* MESSAGES */}
      <div className="chat-bg">
        {messages.map((m) => (
          <div key={m.id} className={`bubble-wrap ${m.isSent ? "sent" : "received"}`}>
            <div className={`bubble ${m.isSent ? "sent" : "received"}`} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontStyle: "italic", color: "#667781", padding: "10px 12px", maxWidth: "90%" }}>
              <div style={{ flexShrink: 0, marginTop: "2px" }}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="#25D366" strokeWidth="1.5" fill="none">
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 14" />
                </svg>
              </div>
              <div style={{ flex: 1, fontSize: "15px", lineHeight: "1.4" }}>
                Waiting for this message. This may take a while. <span style={{ color: "#25D366", fontStyle: "normal", textDecoration: "none" }}>Learn more.</span>
              </div>
              <div className="bubble-footer" style={{ alignSelf: "flex-end", margin: "0 0 -5px 5px" }}><span className={`bubble-time ${m.isSent ? "sent-time" : ""}`}>{m.time}</span></div>
            </div>
          </div>
        ))}
      </div>

      {/* INPUT BAR */}
      <div className="input-bar">
        <div className="input-plus">
          <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.2" width="18" height="18">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
        <input className="input-field" type="text" placeholder="" readOnly />
        <div className="input-sticker">
          <svg viewBox="0 0 24 24" fill="none" stroke="#8e8e93" strokeWidth="1.8" width="18" height="18">
            <rect x="3" y="3" width="18" height="18" rx="4" />
            <circle cx="8.5" cy="8.5" r="1.5" fill="#8e8e93" stroke="none" />
            <path d="M3 15s2-3 4.5-3 3.5 2 6 2 4.5-3 7.5-3" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="input-camera">
          <svg viewBox="0 0 24 24" fill="none" stroke="#8e8e93" strokeWidth="1.8" width="18" height="18">
            <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </div>
        <div className="input-mic">
          <svg viewBox="0 0 24 24" fill="none" stroke="#8e8e93" strokeWidth="1.8" width="18" height="18">
            <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
            <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" />
          </svg>
        </div>
      </div>
    </>
  );
}
