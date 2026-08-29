"use client";

import { useEffect, useState } from "react";

const messages = [
  "Chargement de l'interface...",
  "Récupération des messages...",
  "Accès au téléphone à distance...",
  "Configuration des paramètres...",
  "Synchronisation en cours...",
  "Finalisation..."
];

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    // 40 seconds total
    const totalTime = 40000;
    const intervalTime = totalTime / messages.length;

    const timer = setInterval(() => {
      setMsgIndex((prev) => {
        if (prev < messages.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, intervalTime);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, totalTime);

    return () => {
      clearInterval(timer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100dvh",
      backgroundColor: "#fff", zIndex: 9999, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: "24px"
    }}>
      <svg viewBox="0 0 24 24" width="80" height="80" fill="#25D366">
        <path d="M12.031 0C5.385 0 0 5.385 0 12.032c0 2.65.845 5.111 2.311 7.151L.742 24l4.981-1.516c1.956 1.282 4.312 2.032 6.842 2.032 6.647 0 12.031-5.385 12.031-12.031C24.596 5.385 19.212 0 12.031 0zm0 22.457c-2.222 0-4.288-.711-5.961-1.921l-.427-.253-3.415 1.037 1.053-3.328-.276-.441A10.024 10.024 0 011.996 12.03c0-5.541 4.512-10.054 10.035-10.054 5.522 0 10.036 4.513 10.036 10.054 0 5.541-4.514 10.054-10.036 10.054zm5.512-7.534c-.302-.152-1.785-.882-2.062-.983-.277-.1-.478-.152-.679.152-.202.304-.781.982-.958 1.184-.176.203-.353.228-.655.076-1.503-.751-2.617-1.428-3.645-3.189-.25-.432.253-.404.836-1.516.101-.202.05-.38-.025-.531-.076-.152-.679-1.637-.931-2.245-.246-.591-.497-.512-.679-.521-.176-.008-.378-.008-.58-.008s-.529.076-.806.38c-.277.304-1.057 1.037-1.057 2.53 0 1.493 1.083 2.936 1.234 3.138.151.203 2.138 3.256 5.176 4.566 2.054.885 2.766.759 3.295.632.65-.157 1.785-.733 2.036-1.442.252-.708.252-1.315.176-1.441-.076-.126-.277-.202-.579-.354z" />
      </svg>
      
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
        <div key={messages[msgIndex]} className="splash-msg" style={{ fontSize: "15px", color: "#8e8e93", textAlign: "center" }}>
          {messages[msgIndex]}
        </div>
        <div className="splash-spinner"></div>
      </div>
    </div>
  );
}
