import React, { useState } from "react";

const Chat = () => {
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const [chats, setChats] = useState(
    JSON.parse(localStorage.getItem("chats")) || [],
  );

  const [activeChatId, setActiveChatId] = useState(
    JSON.parse(localStorage.getItem("activeChatId")) || null,
  );

  const activeChat = chats.find((chat) => chat.id === activeChatId);

  // ---------------- AI LOGIC (SIMULATED) ----------------
  const getAIReply = (text) => {
    const msg = text.toLowerCase();

    if (msg.includes("stress"))
      return "Stress is natural. Try short breaks and deep breathing.";
    if (msg.includes("anxiety"))
      return "Anxiety can be overwhelming, but you're not alone.";
    if (msg.includes("ai"))
      return "Artificial Intelligence mimics human intelligence using algorithms.";
    if (msg.includes("hello") || msg.includes("hi"))
      return "Hello 😊 How can I help you today?";

    return "I understand. Tell me more.";
  };

  // ---------------- CHAT FUNCTIONS ----------------
  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: "New Chat",
      messages: [],
    };

    const updatedChats = [newChat, ...chats];
    setChats(updatedChats);
    setActiveChatId(newChat.id);

    localStorage.setItem("chats", JSON.stringify(updatedChats));
    localStorage.setItem("activeChatId", JSON.stringify(newChat.id));
  };

  const askQuestion = () => {
    if (question.trim() === "") return;

    if (!activeChatId) {
      createNewChat();
      return;
    }

    setIsLoading(true);

    const userMessage = { role: "user", text: question };
    const aiMessage = { role: "ai", text: getAIReply(question) };

    const updatedChats = chats.map((chat) =>
      chat.id === activeChatId
        ? {
            ...chat,
            title:
              chat.title === "New Chat" ? question.slice(0, 20) : chat.title,
            messages: [...chat.messages, userMessage, aiMessage],
          }
        : chat,
    );

    setTimeout(() => {
      setChats(updatedChats);
      localStorage.setItem("chats", JSON.stringify(updatedChats));
      setQuestion("");
      setIsLoading(false);
    }, 800);
  };

  // ---------------- UI ----------------
  return (
    <div className="h-screen flex flex-col md:grid md:grid-cols-5 bg-white">
      {/* ---------------- DESKTOP SIDEBAR ---------------- */}
      <div className="hidden md:block col-span-1 bg-slate-200 p-4">
        <button
          onClick={createNewChat}
          className="w-full mb-4 bg-blue-500 text-white py-2 rounded"
        >
          + New Chat
        </button>

        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => {
              setActiveChatId(chat.id);
              localStorage.setItem("activeChatId", JSON.stringify(chat.id));
            }}
            className={`p-2 mb-2 rounded cursor-pointer text-sm ${
              chat.id === activeChatId
                ? "bg-blue-500 text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {chat.title}
          </div>
        ))}
      </div>

      {/* ---------------- MOBILE DRAWER ---------------- */}
      {showSidebar && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 md:hidden">
          <div className="w-2/4 h-full bg-slate-200 p-4">
            <button
              onClick={() => setShowSidebar(false)}
              className="mb-4 text-red-500"
            >
              ✕ 
            </button>

            <button
              onClick={() => {
                createNewChat();
                setShowSidebar(false);
              }}
              className="w-full mb-4 bg-blue-500 text-white py-2 rounded"
            >
              + New Chat
            </button>

            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => {
                  setActiveChatId(chat.id);
                  localStorage.setItem("activeChatId", JSON.stringify(chat.id));
                  setShowSidebar(false);
                }}
                className={`p-2 mb-2 rounded cursor-pointer text-sm ${
                  chat.id === activeChatId
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                }`}
              >
                {chat.title}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------------- MAIN CHAT ---------------- */}
      <div className="flex-1 md:col-span-4 flex flex-col">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-3 border-b">
          <button
            onClick={() => setShowSidebar(true)}
            className="text-2xl font-bold"
          >
            ☰
          </button>
          
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-scroll p-4 md:p-8">
          {activeChat?.messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[85%] md:max-w-[70%] p-3 my-2 rounded-lg text-sm md:text-base ${
                msg.role === "user"
                  ? "ml-auto bg-blue-500 text-white"
                  : "mr-auto bg-gray-200 text-black"
              }`}
            >
              {msg.text}
            </div>
          ))}

          {isLoading && (
            <p className="text-gray-500 animate-pulse">AI is typing...</p>
          )}
        </div>

        {/* Input */}
        <div className="p-2 w-full md:w-1/2 mx-auto mb-4 flex h-14 md:h-16 rounded-full border shadow sticky bottom-0 bg-white">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && askQuestion()}
            placeholder="Ask me anything"
            className="flex-1 px-4 focus:outline-none"
          />
          <button
            onClick={askQuestion}
            disabled={isLoading}
            className={`px-4 md:px-6 rounded-full text-white font-semibold ${
              isLoading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            Ask
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
