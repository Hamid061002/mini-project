// api/chatService.js
import { apiInstance } from "./apiInstance";

// دریافت conversation
export const getConversation = async (courseId) => {
  return await apiInstance(`/${courseId}/delivery`, {
    method: "GET",
  });
};

// ارسال پیام جدید به chat
export const sendMessage = async (courseId, message) => {
  console.log(JSON.stringify(message));
  
  return await apiInstance(`/${courseId}/delivery/`, {
    method: "POST",
    body: JSON.stringify({ lesson_id: '', user_id: 0, message }),
  });
};
