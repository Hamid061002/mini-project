// hooks/useChat.js
import { useState, useEffect } from "react";
import { getConversation, sendMessage } from "../api/chatService";

export const useChat = (courseId) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const data = await getConversation(courseId);
      setMessages(JSON.parse(data.data)); // data.data شامل آرایه conversation است
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const addMessage = async (messageContent) => {
    try {
      const data = await sendMessage(courseId, messageContent);
      // فرض: backend پیام جدید را برمی‌گرداند
      setMessages((prev) => [...prev, data.data]);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    if (courseId) fetchMessages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId]);

  return { messages, loading, error, fetchMessages, addMessage };
};
