import { FaReact, FaAngular, FaJava, FaPython, FaHtml5, FaJs, FaCloud, FaTools } from "react-icons/fa";
import {  SiCss3 } from "react-icons/si";

const learningTopics = [
  { name: "DevOps", icon: <FaCloud className="text-blue-500 text-4xl" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-500 text-4xl" /> },
  { name: "Angular JS", icon: <FaAngular className="text-red-500 text-4xl" /> },
  { name: "Java", icon: <FaJava className="text-orange-600 text-4xl" /> },
  { name: "Python", icon: <FaPython className="text-blue-700 text-4xl" /> },
  { name: "HTML & CSS", icon: <FaHtml5 className="text-orange-500 text-4xl" />, extraIcon: <SiCss3 className="text-blue-500 text-4xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
//   { name: "Agile Development", icon: <SiAgile className="text-green-500 text-4xl" /> },
  { name: "AI Tools", icon: <FaTools className="text-purple-500 text-4xl" /> }
];

const Learnings = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-2xl font-bold text-center text-orange-500 mb-6">Learning Topics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {learningTopics.map((topic, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-3 transition-transform transform hover:scale-125">
            {topic.icon}
            {topic.extraIcon && topic.extraIcon}
            <h3 className="text-lg font-semibold text-gray-700">{topic.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learnings;
