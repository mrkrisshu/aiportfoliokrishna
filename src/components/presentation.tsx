'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { MapPin, Sparkles } from 'lucide-react';

export function Presentation() {
  const profile = {
    name: 'Krishna Bantola',
    age: '23 years old',
    location: 'Bengaluru, India',
    description:
      "Hey 👋\nI'm Krishna Bantola, also known as mrkrishnu. I'm an AI Engineer, Full Stack Developer & Android Engineer based in Bengaluru. I've worked at Bhai.AR where I built multiple production projects. I hold a BCA from Kristu Jayanti College and pursuing MCA at CMR Group of Institutions. I'm passionate about AI, Generative AI, LLMs, and building intelligent systems.",
    src: '/krishna-photo-white.png',
    fallbackSrc:
      'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3',
  };

  const tags = ['AI Engineer', 'Full Stack Developer', 'Android Engineer', 'Hackathon Warrior', 'Play Store Dev'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="mx-auto w-full max-w-5xl py-4 sm:py-6 font-sans px-2 sm:px-0">
      <motion.div
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white via-gray-50 to-blue-50/30 border border-gray-100 shadow-xl p-4 sm:p-6 md:p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-tr from-cyan-100/40 to-blue-100/40 rounded-full blur-3xl -ml-16 -mb-16" />

        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-10">
          {/* Image section */}
          <motion.div
            className="relative mx-auto w-full max-w-xs sm:max-w-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50">
              {/* Black border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black p-[3px] rounded-2xl sm:rounded-3xl">
                <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden">
                  <Image
                    src={profile.src}
                    alt="Krishna Bantola — AI Engineer, Full Stack Developer, and Android Engineer profile photo"
                    title="Krishna Bantola AI Engineer based in Bengaluru, India"
                    width={500}
                    height={500}
                    priority
                    className="h-full w-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = profile.fallbackSrc;
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text content section */}
          <motion.div
            className="flex flex-col text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent">
                {profile.name}
              </h1>
              <div className="mt-2 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-600">
                <span className="flex items-center gap-1">
                  <Sparkles className="h-4 w-4 text-yellow-500" />
                  {profile.age}
                </span>
                <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-300" />
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-red-500" />
                  {profile.location}
                </span>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line"
            >
              {profile.description}
            </motion.p>

            {/* Tags */}
            <motion.div
              variants={itemVariants}
              className="mt-4 sm:mt-6 flex flex-wrap justify-center md:justify-start gap-2"
            >
              {tags.map((tag, idx) => (
                <motion.span
                  key={tag}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Presentation;
