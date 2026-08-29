"use client";

export default function CallsView() {
  return (
    <div style={{ flex: 1, overflowY: "auto", backgroundColor: "#fff" }}>
      {/* HEADER */}
      <div className="calls-header">
        <div className="header-left">
          <div className="menu-icon">
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
              <circle cx="5" cy="12" r="1.5" fill="#25D366" />
              <circle cx="12" cy="12" r="1.5" fill="#25D366" />
              <circle cx="19" cy="12" r="1.5" fill="#25D366" />
            </svg>
          </div>
          <div className="page-title">Calls</div>
        </div>
        <div className="add-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" width="18" height="18">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </div>

      {/* CONTENT */}
      <div className="content">
        {/* FAVOURITES */}
        <div className="section-title">Favourites</div>
        <div className="add-fav-row">
          <div className="add-fav-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.2" width="20" height="20">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </div>
          <span className="add-fav-label">Add favourite</span>
        </div>

        {/* RECENT */}
        <div className="section-title">Recent</div>

        {/* Daddy – Outgoing */}
        <div className="call-row">
          <div className="call-avatar">
            <img src="/profile.jpg" alt="+234 80 12 34 56 78" />
          </div>
          <div className="call-info">
            <div className="call-name">+234 80 12 34 56 78</div>
            <div className="call-type">
              <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.8" width="15" height="15">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.02 4a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                <polyline points="16 2 22 2 22 8" strokeWidth="1.8" />
                <line x1="17" y1="7" x2="22" y2="2" />
              </svg>
              Outgoing
            </div>
          </div>
          <div className="call-meta">
            <div className="skeleton-text" style={{ width: "40px" }}></div>
            <div className="info-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.8" width="18" height="18">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="8" strokeWidth="2" strokeLinecap="round" />
                <line x1="12" y1="12" x2="12" y2="16" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Daddy – Missed */}
        <div className="call-row">
          <div className="call-avatar">
            <img src="/profile.jpg" alt="+229 01 53 44 39 79" />
          </div>
          <div className="call-info">
            <div className="call-name missed">+229 01 53 44 39 79</div>
            <div className="call-type">
              <svg viewBox="0 0 24 24" fill="none" stroke="#e53935" strokeWidth="1.8" width="15" height="15">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.02 4a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                <polyline points="22 8 22 2 16 2" strokeWidth="1.8" />
                <line x1="22" y1="2" x2="17" y2="7" />
              </svg>
              Missed
            </div>
          </div>
          <div className="call-meta">
            <div className="skeleton-text" style={{ width: "40px" }}></div>
            <div className="info-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.8" width="18" height="18">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="8" strokeWidth="2" strokeLinecap="round" />
                <line x1="12" y1="12" x2="12" y2="16" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Daddy – Yesterday */}
        <div className="call-row">
          <div className="call-avatar">
            <img src="/profile.jpg" alt="+229 01 83 42 67 30" />
          </div>
          <div className="call-info">
            <div className="call-name">+229 01 83 42 67 30</div>
            <div className="call-type">
              <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.8" width="15" height="15">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.02 4a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                <polyline points="16 2 22 2 22 8" strokeWidth="1.8" />
                <line x1="17" y1="7" x2="22" y2="2" />
              </svg>
              Outgoing
            </div>
          </div>
          <div className="call-meta">
            <div className="skeleton-text" style={{ width: "40px" }}></div>
            <div className="info-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.8" width="18" height="18">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="8" strokeWidth="2" strokeLinecap="round" />
                <line x1="12" y1="12" x2="12" y2="16" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Jenny – Outgoing */}
        <div className="call-row">
          <div className="call-avatar">
            <img src="/profile.jpg" alt="+229 01 92 06 53 21" />
          </div>
          <div className="call-info">
            <div className="call-name">+229 01 92 06 53 21</div>
            <div className="call-type">
              <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.8" width="15" height="15">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.02 4a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                <polyline points="16 2 22 2 22 8" strokeWidth="1.8" />
                <line x1="17" y1="7" x2="22" y2="2" />
              </svg>
              Outgoing
            </div>
          </div>
          <div className="call-meta">
            <div className="skeleton-text" style={{ width: "40px" }}></div>
            <div className="info-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.8" width="18" height="18">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="8" strokeWidth="2" strokeLinecap="round" />
                <line x1="12" y1="12" x2="12" y2="16" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Jenny – Missed */}
        <div className="call-row">
          <div className="call-avatar">
            <img src="/profile.jpg" alt="+229 01 40 33 61 22" />
          </div>
          <div className="call-info">
            <div className="call-name missed">+229 01 40 33 61 22</div>
            <div className="call-type">
              <svg viewBox="0 0 24 24" fill="none" stroke="#e53935" strokeWidth="1.8" width="15" height="15">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.02 4a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                <polyline points="22 8 22 2 16 2" strokeWidth="1.8" />
                <line x1="22" y1="2" x2="17" y2="7" />
              </svg>
              Missed
            </div>
          </div>
          <div className="call-meta">
            <div className="skeleton-text" style={{ width: "40px" }}></div>
            <div className="info-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.8" width="18" height="18">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="8" strokeWidth="2" strokeLinecap="round" />
                <line x1="12" y1="12" x2="12" y2="16" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Doc Brown – Outgoing */}
        <div className="call-row" style={{ borderBottom: "none" }}>
          <div className="call-avatar">
            <img src="/profile.jpg" alt="+229 01 46 79 72 66" />
          </div>
          <div className="call-info">
            <div className="call-name">+229 01 46 79 72 66</div>
            <div className="call-type">
              <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.8" width="15" height="15">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.02 4a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                <polyline points="16 2 22 2 22 8" strokeWidth="1.8" />
                <line x1="17" y1="7" x2="22" y2="2" />
              </svg>
              Outgoing
            </div>
          </div>
          <div className="call-meta">
            <div className="skeleton-text" style={{ width: "40px" }}></div>
            <div className="info-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.8" width="18" height="18">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="8" strokeWidth="2" strokeLinecap="round" />
                <line x1="12" y1="12" x2="12" y2="16" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="footer-note">
          <svg viewBox="0 0 24 24" fill="none" stroke="#8e8e93" strokeWidth="1.8" width="14" height="14">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          Your personal calls are <a href="#">end-to-end encrypted</a>
        </div>
      </div>
    </div>
  );
}
