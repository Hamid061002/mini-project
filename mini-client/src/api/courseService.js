// api/courseService.js
import { apiInstance } from "./apiInstance";

// دریافت اطلاعات یک دوره با course_id و user_id
export const getCourses = async (courseId) => {
  return await apiInstance(`/${courseId}`);
};
