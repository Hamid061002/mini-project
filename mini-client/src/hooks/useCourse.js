// hooks/useCourse.js
import { useState, useEffect } from "react";
import { getCourses } from "../api/courseService";

export const useCourse = (courseId) => {
  const [course, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      try {
        const data = await getCourses(courseId);
        setCourses(JSON.parse(data.data)); // backend پاسخ داخل data.data است
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (courseId) fetchCourse();
  }, [courseId]);

  return { course, loading, error };
};
