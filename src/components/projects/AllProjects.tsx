"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink, Github, ChevronRight, ChevronLeft } from "lucide-react";

// Full project data with all details
const projects = [
  {
    title: "DiliGenie 🤖📚",
    description: "AI-powered conversational workspace that lets users chat with documents, automate workflows, and extract meaningful insights instantly using RAG technology.",
    fullDescription: "DiliGenie is an AI-powered conversational workspace that lets users chat with documents, automate workflows, and extract meaningful insights instantly. Built with Retrieval-Augmented Generation (RAG), it transforms PDFs, text files, and data into intelligent, searchable knowledge — acting as a smart copilot for productivity and decision-making.",
    imgSrc: "/dili1.png",
    link: "https://dili-genie-ai-copilot.vercel.app/",
    github: "https://github.com/mrkrisshu/DiliGenie-AI-Copilot",
    techStack: ["React", "Next.js", "TailwindCSS", "JavaScript", "RAG", "Vector Database", "LLM"],
    images: ["/dili1.png", "/dili5.png", "/dili2.png", "/dili3.png", "/dili4.png"],
    date: "2025",
  },
  {
    title: "Buildy 🛠️",
    description: "Web-based platform that allows users to create, customize, and deploy websites effortlessly with drag-and-drop and a built-in PPT generator.",
    fullDescription: "Buildy is a web-based platform that allows users to create, customize, and deploy their own websites effortlessly. With drag-and-drop functionality, responsive templates, live previews, and a built-in PPT generator, users can quickly build professional websites and presentations without any coding knowledge.",
    imgSrc: "/buildly1.png",
    link: "https://bbuildlyy.vercel.app/",
    github: "https://github.com/mrkrisshu/buildlyv2",
    techStack: ["React", "Node.js", "TailwindCSS", "Vercel", "JavaScript"],
    images: ["/buildly1.png", "/buildly2.png", "/buildly3.png"],
    date: "2025",
  },
  {
    title: "PromptBoard 🎨📱",
    description: "Android app that helps creators discover and use perfect prompts for every AI model with fast search, model filters, and clean UI.",
    fullDescription: "PromptBoard is an Android app that helps creators discover and use perfect prompts for every AI model. It offers a curated gallery of high-quality prompts for OpenAI, Google, Meta, DeepSeek, and Copilot, with fast search, model filters, and a clean glassmorphism UI.",
    imgSrc: "/prompt1.png",
    link: "https://prompt-board-website.vercel.app/",
    github: "https://github.com/mrkrisshu/PromptBoardWebsite",
    techStack: ["Android", "Kotlin", "Jetpack Compose", "Material Design 3"],
    images: ["/prompt1.png", "/prompt2.png", "/prompt3.png"],
    date: "2025",
  },
  {
    title: "UrbanFlatKit 🏢✨",
    description: "Modern real-estate showcase platform for exploring premium residential floor plans, towers, and curated interior essentials.",
    fullDescription: "UrbanFlatKit is a modern real-estate showcase platform where users can explore premium residential floor plans, towers, and curated interior essentials including premium furniture and modern appliances — designed for an elegant and intuitive browsing experience.",
    imgSrc: "/urbanflat1.png",
    link: "https://urbanflatkit.web.app/",
    github: "https://github.com/mrkrisshu/UrbanFlatKit",
    techStack: ["React", "TailwindCSS", "JavaScript", "Animation Effects"],
    images: ["/urbanflat1.png", "/urbanflat2.png", "/urbanflat3.png"],
    date: "2025",
  },
  {
    title: "BizCanvas 💼🧩",
    description: "AI-powered business model canvas platform for entrepreneurs to quickly create, visualize, and refine their business ideas.",
    fullDescription: "BizCanvas is an AI-powered business model canvas platform that helps entrepreneurs and startups quickly create, visualize, and refine their business ideas with interactive canvases, smart AI suggestions, auto-save, and easy export options.",
    imgSrc: "/bizz1.png",
    link: "https://bizzcanvasss.vercel.app/",
    github: "https://github.com/mrkrisshu/bizzcanvass",
    techStack: ["React", "Next.js", "TailwindCSS", "Authentication", "Payments"],
    images: ["/bizz1.png", "/bizz2.png", "/bizz3.png", "/bizz4.png"],
    date: "2025",
  },
  {
    title: "Public Wealth Created 📈🌍",
    description: "Live scoreboard ranking the world's biggest public companies by wealth created, with interactive filters and data visualization.",
    fullDescription: "Public Wealth Created is a live scoreboard web app that ranks the world's biggest public companies by how much wealth they've created for everyone else, showing market cap, founder ownership, and wealth created vs kept in an interactive table.",
    imgSrc: "/wealth1.png",
    link: "https://wealthscope-1a584.web.app/",
    github: "https://github.com/mrkrisshu/PublicWealthCreated",
    techStack: ["React", "TailwindCSS", "Next.js", "Data Visualization"],
    images: ["/wealth1.png", "/wealth2.png", "/wealth3.png"],
    date: "2025",
  },
  {
    title: "EventXX 🎉",
    description: "Modern event management platform leveraging blockchain for secure, transparent, and verifiable event registration and ticketing.",
    fullDescription: "EventXX is a modern event management platform that leverages blockchain technology to ensure secure, transparent, and verifiable event registration and ticketing. Users can create, manage, and join events seamlessly.",
    imgSrc: "/event1.png",
    link: "https://event-xx.vercel.app/",
    github: "https://github.com/mrkrisshu/EventXX",
    techStack: ["React", "Node.js", "MongoDB", "Ethereum", "Web3.js"],
    images: ["/event1.png", "/event2.png", "/event3.png"],
    date: "2025",
  },
  {
    title: "Online Grocery Store 🛒",
    description: "Online grocery platform with seamless shopping experience, product listings, cart, checkout, and order management.",
    fullDescription: "An online grocery store platform built to provide a seamless shopping experience with product listings, cart, checkout, and order management.",
    imgSrc: "/grocery2.png",
    link: "https://bhuvaneswaristores.great-site.net/index.php",
    github: "",
    techStack: ["PHP", "MySQL", "JavaScript", "CSS3"],
    images: ["/grocery2.png", "/grocery3.png"],
    date: "2025",
  },
];

interface ProjectModalProps {
  project: typeof projects[0] | null;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-4xl my-4 bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Image gallery with navigation */}
        <div className="relative bg-gray-100">
          <div className="relative w-full" style={{ aspectRatio: '16/10' }}>
            <Image
              src={project.images[currentImageIndex]}
              alt={`Krishna Bantola ${project.title} project screenshot ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Navigation arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </>
          )}

          {/* Image indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
            {project.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors ${idx === currentImageIndex ? "bg-blue-500" : "bg-white/60 hover:bg-white/80"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8 max-h-[50vh] overflow-y-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 sm:mb-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">{project.title}</h2>
            <span className="text-sm text-gray-500">{project.date}</span>
          </div>

          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{project.fullDescription}</p>

          {/* Tech Stack */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase mb-2 sm:mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-blue-100 text-blue-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-sm rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Visit Website
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-sm rounded-full bg-gray-800 text-white hover:bg-gray-900 transition-colors"
              >
                <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                View Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AllProjects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="w-full h-full pt-4 sm:pt-8 px-2 sm:px-0">
      <h2 className="max-w-7xl mx-auto text-lg sm:text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-4 sm:mb-8 px-2 sm:px-0">
        My Projects
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer flex flex-col overflow-hidden rounded-xl sm:rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl h-full active:scale-[0.98]"
          >
            {/* Image */}
            <div className="aspect-video overflow-hidden bg-gray-100">
              <Image
                src={project.imgSrc}
                alt={`Krishna Bantola ${project.title} project demo`}
                title={`${project.title} by Krishna Bantola AI Engineer`}
                width={600}
                height={340}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-3 sm:p-5">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-600 line-clamp-3 flex-1">
                {project.description}
              </p>

              {/* View Details */}
              <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-100">
                <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
                  View Details
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
