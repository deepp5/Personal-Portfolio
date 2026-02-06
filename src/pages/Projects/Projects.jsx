import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const assetImages = import.meta.glob("../../assets/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const projects = [
  {
    title: "Stratik",
    description:
      "OpenAI-powered web app that converts competitive team data into structured strategic insights, weaknesses, and counter-strategy recommendations.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "OpenAI API"],
    src: "Screenshot 2026-02-03 at 11.05.02 AM.png",
    link: "",
    imageFallback: "rock.jpg",
    color: "#5196fd",
    githubLink: "https://github.com/itsjay0730/Stratik",
  },
  {
    title: "CSync",
    description:
      "Full-stack platform connecting CS students for projects (100+ active users). Includes secure auth, CRUD APIs, caching, and real-time chat.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "AWS",
      "Supabase",
      "WebSockets",
    ],
    src: "Screenshot 2026-02-06 at 12.18.16 AM.png",
    link: "https://csync.tech/",
    imageFallback: "tree.jpg",
    color: "#8f89ff",
    githubLink: "https://github.com/deepp5/CSync",
  },
  {
    title: "CampSpotter",
    description:
      "Camping review platform for discovering, reviewing, and rating campgrounds (50+ registered users). Includes a well-structured REST API with 12 endpoints.",
    techStack: ["Node.js", "Express", "MongoDB", "Mongoose"],
    src: "Screenshot 2026-02-06 at 12.30.31 AM.png",
    link: "",
    imageFallback: "water.jpg",
    color: "#ed649e",
    githubLink: "https://github.com/deepp5/CampSpotter",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main
        className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#04081A] via-[#060B22] to-[#04081A]"
        ref={container}
      >
        {/* Base background */}
        <div className="absolute inset-0 bg-[#04081A]" />

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Ambient glow blobs */}
        <div className="pointer-events-none absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <section className="relative z-10 text-white w-full bg-transparent">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.src}
                fallbackUrl={project.imageFallback || project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                techStack={project.techStack}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  techStack,
  url,
  fallbackUrl,
  color,
  progress,
  range,
  targetScale,
  githubLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  const normalizeImageSrc = (value) => {
    if (!value) return value;
    if (value.startsWith("http://") || value.startsWith("https://"))
      return value;
    if (value.startsWith("/")) return value;

    // If the image exists in src/assets (any subfolder), use the bundled URL.
    const directKey = `../../assets/${value}`;
    if (assetImages[directKey]) return assetImages[directKey];

    // Otherwise, try matching by filename at the end of the path.
    const matchKey = Object.keys(assetImages).find((k) =>
      k.endsWith(`/${value}`)
    );
    if (matchKey) return assetImages[matchKey];

    return `/${value}`;
  };

  const buildCandidates = (value) => {
    if (!value) return [];

    // Some macOS screenshot filenames contain narrow no-break spaces or non-breaking spaces.
    const cleaned = value.replace(/[\u202F\u00A0]/g, " ");
    const narrowAll = cleaned.replace(/ /g, "\u202F");

    // Variants that only affect the AM/PM separator (common on macOS screenshots)
    const ampmNarrow = cleaned
      .replace(/ (AM|PM)\b/g, "\u202F$1")
      .replace(/\u202F\u202F/g, "\u202F");
    const ampmNbsp = cleaned
      .replace(/ (AM|PM)\b/g, "\u00A0$1")
      .replace(/\u00A0\u00A0/g, "\u00A0");
    const ampmNoSpace = cleaned.replace(/ (AM|PM)\b/g, "$1");

    const rawCandidates = [
      value,
      cleaned,
      narrowAll,
      ampmNarrow,
      ampmNbsp,
      ampmNoSpace,
    ];

    // Normalize and de-dupe
    const normalized = rawCandidates
      .filter(Boolean)
      .map((v) => normalizeImageSrc(v))
      .filter(Boolean);

    return Array.from(new Set(normalized));
  };

  const [candidates, setCandidates] = useState(buildCandidates(url));
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [imgSrc, setImgSrc] = useState(buildCandidates(url)[0]);

  useEffect(() => {
    const nextCandidates = buildCandidates(url);
    setCandidates(nextCandidates);
    setCandidateIndex(0);
    setImgSrc(nextCandidates[0]);
  }, [url]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="group relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Card lighting / glow */}
        <div className="pointer-events-none absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <div className="pointer-events-none absolute inset-0 backdrop-blur-xl bg-white/5 rounded-2xl opacity-40" />

        {/* Modern split card design */}
        <div className="relative z-10 w-full flex flex-col md:flex-row bg-zinc-900/90 rounded-2xl overflow-hidden shadow-2xl border border-gray-800/60">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={imgSrc}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              onError={() => {
                // Try next filename variant first
                const nextIndex = candidateIndex + 1;
                if (candidates && nextIndex < candidates.length) {
                  setCandidateIndex(nextIndex);
                  setImgSrc(candidates[nextIndex]);
                  return;
                }

                // Final fallback (must be an actual image URL/path)
                if (fallbackUrl) setImgSrc(normalizeImageSrc(fallbackUrl));
              }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {(techStack || []).map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] md:text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative corner accents */}
        <div className="pointer-events-none absolute top-6 right-6 w-20 h-20">
          <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
          <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
        </div>
        <div className="pointer-events-none absolute bottom-6 left-6 w-20 h-20">
          <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
          <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired,
  fallbackUrl: PropTypes.string,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
};
