// hooks/useLesson.js
import { useState, useEffect } from "react";
import { getLesson } from "../api/lessonService";

export const useLesson = (courseId) => {
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLesson = async () => {
      setLoading(true);
      try {
        const data = await getLesson(courseId);
        setLesson(JSON.parse(data.data));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (courseId) fetchLesson();
  }, [courseId]);

  return { lesson, loading, error };
};
