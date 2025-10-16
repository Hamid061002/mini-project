import React from "react";
import { Link } from "react-router-dom";
import { useCourse } from "../hooks/useCourse";

const CourseOverview = () => {
  const { course, loading, error } = useCourse('course-quantum-computing-101');
  

  if (loading) return <p className="text-gray-500">Loading course...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;
  if (!course) return <p className="text-gray-500">No course found</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto mt-5 bg-white shadow rounded-lg">
      {/* عنوان و توضیحات دوره */}
      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
      <p className="text-gray-600 mb-4">{course.description}</p>

      {/* اطلاعات تکمیلی */}
      <div className="flex flex-wrap gap-4 mb-6">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Level: {course.level}</span>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
          Duration: {course.estimated_duration_hours} hrs
        </span>
        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Instructor: {course.instructor}</span>
      </div>

      {/* ماژول‌ها */}
      <h2 className="text-2xl font-semibold mb-3">Modules</h2>
      <ul className="space-y-4">
        {course.modules.map((module) => (
          <li key={module.id} className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">{module.title}</h3>
            <ul className="ml-4 space-y-2">
              {module.lectures.map((lecture) => (
                <li key={lecture.id}>
                  <strong className="text-gray-700">{lecture.title}</strong>
                  <ul className="ml-4 list-disc space-y-1">
                    {lecture.lessons.map((lesson) => (
                      <li key={lesson.id}>
                        <Link 
                          to={`/lesson`}
                          className="text-gray-600 hover:text-blue-600 hover:underline transition-colors"
                        >
                          {lesson.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseOverview;
