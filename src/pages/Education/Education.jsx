import React, { useState } from "react";
import EducationLoader from "@/components/ui/EducationLoader";
import {
  Star,
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Computer Science and Mathematics",
      school: "University of Illinois Urbana-Champaign",
      mascot: "🎓",
      year: "Expected May 2027",
      achievements: ["GPA: 3.76 / 4.00"],
      skills: [
        "Data Structures and Algorithms",
        "Cloud Networking",
        "Artificial Intelligence",
        "Computer Systems",
      ],
      description:
        "Certifications: AWS Certified Cloud Practitioner, Web Developer Bootcamp (Udemy), DevOps Bootcamp (Udemy).",
    },
    {
      degree: "Computer Science (Coursework)",
      school: "University of Illinois Chicago",
      mascot: "🏙️",
      year: "Previously attended",
      achievements: ["GPA: 4.00"],
      skills: [
        // "Data Structures",
        // "Computer Systems",
        // "Artificial Intelligence",
      ],
      description:
        "Completed relevant CS coursework and research experience in Chicago.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getTheme = (school) => {
    const isUIC = school.toLowerCase().includes("illinois chicago");

    const uicRed = "#D50032";

    if (isUIC) {
      return {
        hoverBorder: "border-[#D50032]",
        accent: "#D50032",
        glowGradient:
          "bg-gradient-to-r from-[#D50032]/70 via-white/10 to-[#D50032]/70",
        iconGlowGradient:
          "bg-gradient-to-r from-[#D50032]/60 via-white/5 to-[#D50032]/60",
        glowHoverOpacity: "group-hover:opacity-60",
        iconGlowHoverOpacity: "group-hover:opacity-40",
        cornerTop: "border-[#D50032]/50",
        cornerBottom: "border-white/30",
        badge: "bg-[#D50032]/10 text-[#FFD6E0]",
        descBorder: "border-[#D50032]",
        bookIcon: "text-[#D50032]",
        skillTag: "bg-[#D50032]/10 text-[#FFD6E0]",
      };
    }

    return {
      hoverBorder: "border-[#E84A27]",
      accent: "#E84A27",
      glowGradient:
        "bg-gradient-to-r from-[#E84A27]/45 via-[#4B9CD3]/18 to-[#13294B]/55",
      iconGlowGradient:
        "bg-gradient-to-r from-[#E84A27]/40 via-[#4B9CD3]/12 to-[#13294B]/45",
      cornerTop: "border-[#4B9CD3]/50",
      cornerBottom: "border-[#E84A27]/40",
      badge: "bg-black/25 text-white border border-white/10",
      descBorder: "border-[#E84A27]",
      bookIcon: "text-[#E84A27]",
      skillTag: "bg-black/25 text-white/90 border border-white/10",
      glowHoverOpacity: "group-hover:opacity-55",
      iconGlowHoverOpacity: "group-hover:opacity-45",
    };
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {}
      <div className="pointer-events-none absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse z-0" />
      <div className="pointer-events-none absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000 z-0" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Education Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Academic background, certifications, and relevant coursework.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => {
            const theme = getTheme(edu.school);
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`group relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm overflow-hidden ${
                  hoveredIndex === index
                    ? `${theme.hoverBorder} scale-[1.02] bg-gray-900/70`
                    : "border-blue-400/20"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Gradient glow border on hover */}
                <div
                  className={`pointer-events-none absolute -inset-[2px] ${theme.glowGradient} rounded-xl opacity-0 ${theme.glowHoverOpacity} transition-all duration-500`}
                />
                {/* Glass layer */}
                <div className="pointer-events-none absolute inset-0 backdrop-blur-lg bg-white/5 rounded-xl" />
                {/* Soft ambient glow */}
                <div className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-all duration-500" />

                {/* Corner accents */}
                <div
                  className={`pointer-events-none absolute top-4 right-4 w-12 h-12 border-t border-r ${theme.cornerTop}`}
                />
                <div
                  className={`pointer-events-none absolute bottom-4 left-4 w-12 h-12 border-b border-l ${theme.cornerBottom}`}
                />

                <div className="relative z-10 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="relative inline-flex">
                        <span
                          className={`absolute -inset-4 ${theme.iconGlowGradient} opacity-20 rounded-full blur-xl ${theme.iconGlowHoverOpacity} transition-all duration-500`}
                        />
                        <span className="relative text-3xl">{edu.mascot}</span>
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        {edu.degree}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-300 flex items-center gap-2">
                      <BookOpen className={`w-5 h-5 ${theme.bookIcon}`} />
                      {edu.school}
                    </p>
                    <p className="text-gray-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {edu.year}
                    </p>
                  </div>

                  <p
                    className={`text-gray-300 text-sm italic border-l-2 ${theme.descBorder} pl-3`}
                  >
                    {edu.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      Key Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className={`px-3 py-1 rounded-full ${theme.badge} flex items-center gap-2 text-sm`}
                        >
                          <Award className="w-4 h-4" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 text-xs rounded ${theme.skillTag}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
