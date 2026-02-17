'use client';

import { motion } from 'framer-motion';

// Hackathon images data - ctrlmove in center
const hackathonImages = [
  {
    src: "/aptos.jpg",
    alt: "Krishna Bantola AI Engineer at Build on Aptos Hackathon Bangalore Edition",
  },
  {
    src: "/team1.jpg",
    alt: "Krishna Bantola Full Stack Developer with team at Avalanche India Hackathon",
  },
  {
    src: "/ctrlmove.jpg",
    alt: "Krishna Bantola presenting at CTRL+MOVE Hackathon Bangalore — 2x Finalist",
  },
  {
    src: "/deep.jpg",
    alt: "Krishna Bantola AI Engineer at DEEP Open Innovation Hackathon OIH2025",
  },
  {
    src: "/gdk.jpg",
    alt: "Krishna Bantola building AI Agents at Agent Development Kit ADK event Bengaluru",
  },
];

const Crazy = () => {
  return (
    <motion.div
      className="mx-auto w-full max-w-5xl px-2 sm:px-0"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-gray-100 shadow-xl p-4 sm:p-6 md:p-8">
        {/* Header */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          Hackathon Memories
        </h2>

        {/* Gallery - Expandable on hover like the reference */}
        <div className="flex items-center gap-2 h-[300px] sm:h-[400px] w-full">
          {hackathonImages.map((image, idx) => (
            <div
              key={idx}
              className="relative group flex-grow transition-all w-16 sm:w-24 rounded-xl overflow-hidden h-full duration-500 hover:w-full cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-full w-full object-cover object-center"
                src={image.src}
                alt={image.alt}
                title={image.alt}
                loading="lazy"
                width={800}
                height={600}
              />
              {/* Title overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs sm:text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Crazy;