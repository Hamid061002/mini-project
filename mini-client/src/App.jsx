import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import ChatBot from "./components/ChatBot";
import CourseOverview from "./pages/CourseOverview";
import Home from "./pages/Home";
import LessonContent from "./pages/LessonContent";
import Navigation from "./components/Navigation";
import ProfileUpdate from "./components/ProfileUpdate";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<CourseOverview />} />
          <Route path="/about" element={<About />} />
          <Route path="/lesson" element={<LessonContent />} />
          <Route path="/profile" element={<ProfileUpdate />} />
          {/* <Route path="/lesson/:lessonId" element={<LessonContent />} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
