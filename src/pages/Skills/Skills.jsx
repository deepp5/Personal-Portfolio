import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Meteors } from "@/components/ui/meteors";
import { Code2, Database, Layout, Cloud } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaAws,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiJavascript,
  SiC,
  SiCplusplus,
  SiSwift,
  SiGo,
  SiRuby,
  SiExpress,
  SiPytorch,
  SiDotnet,
  SiAngular,
  SiSupabase,
  SiPostman,
} from "react-icons/si";
import { BsGrid1X2 } from "react-icons/bs";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Layout,
      title: "Languages",
      color: "text-purple-400",
      skills: [
        {
          name: "JavaScript",
          icon: <SiJavascript className="w-4 h-4 text-[#F7DF1E]" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
        },
        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "C",
          icon: <SiC className="w-4 h-4 text-[#A8B9CC]" />,
        },
        {
          name: "C/C++",
          icon: <SiCplusplus className="w-4 h-4 text-[#00599C]" />,
        },
        {
          name: "Java",
          icon: <FaJava className="w-4 h-4 text-[#007396]" />,
        },
        {
          name: "Swift",
          icon: <SiSwift className="w-4 h-4 text-[#FA7343]" />,
        },
        {
          name: "Golang",
          icon: <SiGo className="w-4 h-4 text-[#00ADD8]" />,
        },
        {
          name: "Ruby",
          icon: <SiRuby className="w-4 h-4 text-[#CC342D]" />,
        },
      ],
    },
    {
      icon: Code2,
      title: "Frameworks",
      color: "text-blue-400",
      skills: [
        {
          name: "React.js",
          icon: <FaReact className="w-4 h-4 text-[#61DAFB]" />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-4 h-4 text-white" />,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="w-4 h-4 text-white" />,
        },
        {
          name: "PyTorch",
          icon: <SiPytorch className="w-4 h-4 text-[#EE4C2C]" />,
        },
        { name: ".NET", icon: <SiDotnet className="w-4 h-4 text-[#512BD4]" /> },
        {
          name: "Angular",
          icon: <SiAngular className="w-4 h-4 text-[#DD0031]" />,
        },
        {
          name: "React Native",
          icon: <FaReact className="w-4 h-4 text-[#61DAFB]" />,
        },
        {
          name: "Scikit-Learn",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Databases",
      color: "text-green-400",
      skills: [
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: "Mongoose",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        { name: "SQL", icon: <Database className="w-4 h-4 text-[#9CA3AF]" /> },
        {
          name: "Firebase",
          icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
        },
        {
          name: "Supabase",
          icon: <SiSupabase className="w-4 h-4 text-[#3FCF8E]" />,
        },
      ],
    },
    {
      icon: Cloud,
      title: "Developer Tools",
      color: "text-orange-400",
      skills: [
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
        {
          name: "Postman",
          icon: <SiPostman className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "Docker",
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
        },
        {
          name: "Kubernetes",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#326CE5]" />,
        },
        { name: "GitHub", icon: <FaGithub className="w-4 h-4 text-white" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Ambient Glow Blobs */}
      <div className="pointer-events-none absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Meteors Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-90">
        <Meteors number={28} />
      </div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
            opacity: 0.35;
          }
          50% {
            transform: translateY(-18px);
            opacity: 0.75;
          }
          100% {
            transform: translateY(0px);
            opacity: 0.35;
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
