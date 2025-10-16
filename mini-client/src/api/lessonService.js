// api/lessonService.js
import { apiInstance } from "./apiInstance";

// دریافت محتوای یک درس
export const getLesson = async (courseId) => {
  return await apiInstance(`/${courseId}/lesson/`, {
    method: "GET",
  });
};
