"use client";

import { useState } from "react";
import Header from "@/components/chats/Header";
import ChatList from "@/components/chats/ChatList";
import BottomNav from "@/components/chats/BottomNav";
import ChatView, { ChatData } from "@/components/chats/ChatView";
import SettingsView from "@/components/chats/SettingsView";
import CallsView from "@/components/chats/CallsView";
import SplashScreen from "@/components/chats/SplashScreen";

export type FilterType = "All" | "Unread" | "Favourites" | "Groups";
export type TabType = "Chats" | "Settings" | "Calls";

export default function ChatsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("Chats");
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [selectedChat, setSelectedChat] = useState<ChatData | null>(null);
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  if (selectedChat) {
    return (
      <div className="screen">
        <ChatView chat={selectedChat} onBack={() => setSelectedChat(null)} />
      </div>
    );
  }

  return (
    <div className="screen" style={{ display: "flex", flexDirection: "column", height: "100dvh" }}>
      {activeTab === "Chats" && (
        <>
          <Header activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          <ChatList activeFilter={activeFilter} onChatClick={(chat) => setSelectedChat(chat)} />
        </>
      )}
      {activeTab === "Settings" && <SettingsView />}
      {activeTab === "Calls" && <CallsView />}
      
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
