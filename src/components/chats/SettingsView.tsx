"use client";

export default function SettingsView() {
  return (
    <div className="page">
      {/* TITLE */}
      <div className="page-header">
        <span className="page-title">Settings</span>
      </div>

      {/* SEARCH */}
      <div className="search-bar">
        <svg viewBox="0 0 24 24" fill="none" stroke="#8e8e93" strokeWidth="2" width="17" height="17">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input type="text" placeholder="Search" readOnly />
      </div>

      {/* SECTION 1: Profile + Avatar */}
      <div className="section">
        <div className="profile-row">
          <div className="profile-avatar">
            <img src="/pro.webp" alt="Cedrick" />
          </div>
          <div className="profile-info">
            <div className="profile-name">Cedrick</div>
          <div className="profile-status">+229 01 51 79 84 34</div>
          </div>
          <div className="profile-qr">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.8" width="22" height="22">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="5" y="5" width="3" height="3" fill="#25D366" stroke="none" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="16" y="5" width="3" height="3" fill="#25D366" stroke="none" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="5" y="16" width="3" height="3" fill="#25D366" stroke="none" />
              <line x1="14" y1="14" x2="14" y2="14" strokeWidth="3" strokeLinecap="round" />
              <line x1="18" y1="14" x2="18" y2="14" strokeWidth="3" strokeLinecap="round" />
              <line x1="21" y1="14" x2="21" y2="17" strokeWidth="1.8" />
              <line x1="14" y1="18" x2="17" y2="18" strokeWidth="1.8" />
              <line x1="19" y1="18" x2="21" y2="18" strokeWidth="1.8" />
              <line x1="21" y1="20" x2="21" y2="21" strokeWidth="1.8" />
              <line x1="14" y1="21" x2="19" y2="21" strokeWidth="1.8" />
            </svg>
          </div>
        </div>
        <div className="avatar-row">
          <div className="row-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.8" width="20" height="20">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              <circle cx="7" cy="6" r="1.5" fill="#25D366" stroke="none" opacity="0.5" />
            </svg>
          </div>
          <span className="row-label">Avatar</span>
          <div className="row-chevron">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.2" width="14" height="14">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
      </div>

      {/* SECTION 2: List / Broadcast / Starred / Linked */}
      <div className="section">
        <div className="setting-row">
          <div className="row-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.8" width="20" height="20">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <line x1="7" y1="9" x2="17" y2="9" />
              <line x1="7" y1="13" x2="17" y2="13" />
              <line x1="7" y1="17" x2="13" y2="17" />
            </svg>
          </div>
          <span className="setting-label">List</span>
          <div className="row-chevron">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.2" width="14" height="14">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
        <div className="setting-row">
          <div className="row-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.8" width="20" height="20">
              <path d="M3 5h18M3 12h18M3 19h12" />
              <polygon points="19 14 22 17 19 20" fill="#25D366" stroke="none" />
            </svg>
          </div>
          <span className="setting-label">Broadcast messages</span>
          <div className="row-chevron">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.2" width="14" height="14">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
        <div className="setting-row">
          <div className="row-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.8" width="20" height="20">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <span className="setting-label">Starred messages</span>
          <div className="row-chevron">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.2" width="14" height="14">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
        <div className="setting-row">
          <div className="row-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.8" width="20" height="20">
              <rect x="2" y="6" width="14" height="10" rx="2" />
              <path d="M16 10l4-3v10l-4-3" />
            </svg>
          </div>
          <span className="setting-label">Linked devices</span>
          <div className="row-chevron">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.2" width="14" height="14">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
      </div>

      {/* SECTION 3: Account / Privacy / Chats / Notifications / Storage */}
      <div className="section">
        <div className="setting-row">
          <div className="row-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.8" width="20" height="20">
              <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
            </svg>
          </div>
          <span className="setting-label">Account</span>
          <div className="row-chevron">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.2" width="14" height="14">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
        <div className="setting-row">
          <div className="row-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.8" width="20" height="20">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
          </div>
          <span className="setting-label">Privacy</span>
          <div className="row-chevron">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.2" width="14" height="14">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
        <div className="setting-row">
          <div className="row-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.8" width="20" height="20">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          </div>
          <span className="setting-label">Chats</span>
          <div className="row-chevron">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.2" width="14" height="14">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
        <div className="setting-row">
          <div className="row-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.8" width="20" height="20">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </div>
          <span className="setting-label">Notifications</span>
          <div className="row-chevron">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.2" width="14" height="14">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
        <div className="setting-row" style={{ overflow: "hidden", height: "50px" }}>
          <div className="row-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.8" width="20" height="20">
              <polyline points="16 16 12 12 8 16" />
              <line x1="12" y1="12" x2="12" y2="21" />
              <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
            </svg>
          </div>
          <span className="setting-label">Storage and data</span>
          <div className="row-chevron">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.2" width="14" height="14">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
