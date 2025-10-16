import React, { useState, useRef, useEffect } from "react";
import { useChat } from "../hooks/useChat";

const ChatBot = () => {
  const { messages, addMessage } = useChat('course-quantum-computing-101')
  
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // اسکرول خودکار به آخر پیام‌ها
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    addMessage(input);
    setInput("");
  };

  if(!messages) return <p className="text-gray-500">Loading chats...</p>;

  return (
    <div className="sticky top-5 w-full flex flex-col mx-auto h-screen overflow-hidden bg-white shadow rounded-r-lg">
      {/* بخش پیام‌ها */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
          >
            {msg.image && (
              <img
                src={msg.image}
                alt=""
                className="mb-1 rounded-lg shadow max-w-xs"
              />
            )}
            <div
              className={`px-4 py-2 rounded-lg max-w-xs break-words ${
                msg.role === "user"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      {/* بخش ورودی */}
      <div className="flex p-3 border-t border-gray-300 bg-white">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
