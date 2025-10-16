// api/profileService.js
import { apiInstance } from "./apiInstance";

// بروزرسانی اطلاعات کاربر
export const updateProfile = async (userId, profileData) => {
  return await apiInstance(`/profile/`, {
    method: "PUT",
    body: JSON.stringify({ user_id: userId, ...profileData }),
  });
};
