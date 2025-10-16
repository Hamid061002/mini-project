import React from "react";
import { useParams } from "react-router-dom";
import ChatBot from "../components/ChatBot";
import { useLesson } from "../hooks/useLesson";

import "katex/dist/katex.min.css";
import ReactMarkdown from 'react-markdown';
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import LatexRenderer from "../components/LatexRerender";

const LessonContent = () => {
  const { lessonId } = useParams();
  const { lesson, loading, error } = useLesson(lessonId || 'course-quantum-computing-101')

  if (loading) return <p className="text-gray-500">Loading lesson...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;
  if (!lesson) return <p className="text-gray-500">Loading lesson...</p>;

  const { contents } = lesson.content;

  const renderContent = (item, index) => {
    
    switch (item.type) {
      case "text":
        return (
          <p key={index} className="text-cyan-700 mb-4">
            <ReactMarkdown
              key={index}
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex, rehypeRaw, rehypeSanitize]}
              components={{
                div: ({ ...props }) => (
                  <div className="prose max-w-none my-3" {...props} />
                ),
              }}
            >
              {fixEncoding(item.value)}
            </ReactMarkdown>
          </p>
        );
      case "markdown":
        return (
          <div className="text-zinc-700">
            <ReactMarkdown
              key={index}
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex, rehypeRaw, rehypeSanitize]}
              components={{
                div: ({ ...props }) => (
                  <div className="prose max-w-none my-3" {...props} />
                ),
              }}
            >
              {fixEncoding(item.value)}
            </ReactMarkdown>
          </div>
        )
      case "latex":
        return (
          <p key={index} className="text-amber-700 font-mono mb-4">
            <LatexRenderer latex={item.value} />
          </p>
        )
      case "image":
        return (
          <figure className="my-4 rounded-lg shadow max-w-full overflow-hidden">          
            <img
              key={index}
              src={`src/${item.src}`}
              alt={item.alt || "image"}              
            />            
          </figure>
        )
      case "video":
        return (
          <video
            key={index}
            src={item.src}
            controls
            className="mb-4 rounded-lg shadow max-w-full"
          />
        );
      default:
        return null;
    }
  };
  console.log(contents);


  return (
    <div className="grid grid-cols-[2fr_1fr] my-5 max-w-6xl mx-auto">
      <div className="p-6 bg-white shadow rounded-l-lg">
        <h2 className="text-2xl font-bold mb-2">{lesson.title}</h2>
        {lesson.learning_objective && (
          <p className="text-gray-600 mb-4">{lesson.learning_objective}</p>
        )}

        {contents.map((item, index) => renderContent(item, index))}
      </div>
      <ChatBot />
    </div>
  );
};

export default LessonContent;

function fixEncoding(str) {
  return str
    ?.replace(/â€™/g, "’")
    ?.replace(/â€œ/g, "“")
    ?.replace(/â€/g, "—")
    ?.replace(/â€/g, "”")
    ?.replace(/ðŸ’¡/g, "💡")
    ?.replace(/Î±/g, "α")
    ?.replace(/Î²/g, "β")
    ?.replace(/Ïˆ/g, "ψ")
    ?.replace(/âŸ©/g, "⟩");
}