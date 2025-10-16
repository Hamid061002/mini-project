import React from "react";
import { Link } from "react-router-dom";
import { useCourse } from "../hooks/useCourse";

function Home() {
  const { course } = useCourse('course-quantum-computing-101');

  const getFirstLesson = () => {
    if (!course || !course.modules || course.modules.length === 0) return null;
    const firstModule = course.modules[0];
    if (!firstModule.lectures || firstModule.lectures.length === 0) return null;
    const firstLecture = firstModule.lectures[0];
    if (!firstLecture.lessons || firstLecture.lessons.length === 0) return null;
    return firstLecture.lessons[0];
  };

  const firstLesson = getFirstLesson();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Mini Project</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-300">
          <h2 className="text-2xl font-semibold mb-3 text-blue-800">Course Overview</h2>
          <p className="text-gray-700 mb-4">
            Explore our comprehensive course materials and learning modules.
          </p>
          <Link
            to="/course"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            View Course
          </Link>
        </div>

        {/* {firstLesson && ( */}
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-300">
          <h2 className="text-2xl font-semibold mb-3 text-purple-800">Start Learning</h2>
          <p className="text-gray-700 mb-4">
            Begin with our first lesson: <strong>{firstLesson?.title}</strong>
          </p>
          <Link
            // to={`/lesson/${firstLesson?.id}`}
            to={'/lesson'}
            className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
          >
            Start Lesson
          </Link>
        </div>
        {/* )} */}        
      </div>

      <div className="text-center">
        <p className="text-gray-600">
          Start your learning journey today with our interactive course platform.
        </p>
      </div>
    </div>
  );
}

export default Home;
