'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Sparkles } from 'lucide-react';

export function Resume() {
  // Resume details
  const resumeDetails = {
    title: "Krishna's Resume",
    description: 'Full Stack Developer • AI Specialist',
    fileType: 'PDF',
    lastUpdated: 'December 2025',
    fileSize: '150 kb',
    downloadUrl: '/KrishnaBantolaDResume.pdf',
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeDetails.downloadUrl;
    link.download = resumeDetails.downloadUrl.split('/').pop() || 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mx-auto w-full py-4 sm:py-8 font-sans px-2 sm:px-0">
      <motion.div
        onClick={handleDownload}
        className="group relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-0 transition-all duration-300 shadow-lg hover:shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Animated gradient background on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Sparkle effect */}
        <motion.div
          className="absolute top-3 right-16 text-yellow-400 opacity-0 group-hover:opacity-100"
          initial={{ scale: 0, rotate: 0 }}
          whileHover={{ scale: 1, rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          <Sparkles className="h-4 w-4" />
        </motion.div>

        {/* Details area */}
        <div className="relative p-4 sm:p-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-start gap-3 sm:gap-4">
              {/* File icon with animation */}
              <motion.div
                className="hidden sm:flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <FileText className="h-6 w-6" />
              </motion.div>

              <div>
                <motion.h3
                  className="text-base sm:text-lg font-semibold text-gray-800"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {resumeDetails.title}
                </motion.h3>
                <motion.p
                  className="text-xs sm:text-sm text-gray-600"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {resumeDetails.description}
                </motion.p>
                <motion.div
                  className="mt-1.5 flex flex-wrap items-center gap-1 sm:gap-0 text-xs text-gray-500"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded-md font-medium">
                    {resumeDetails.fileType}
                  </span>
                  <span className="mx-1.5 sm:mx-2 hidden sm:inline">•</span>
                  <span className="text-green-600 font-medium">
                    Updated {resumeDetails.lastUpdated}
                  </span>
                  <span className="mx-1.5 sm:mx-2 hidden sm:inline">•</span>
                  <span className="hidden sm:inline">{resumeDetails.fileSize}</span>
                </motion.div>
              </div>
            </div>

            {/* Download button with animation */}
            <motion.div
              className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-black text-white shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom progress bar animation on hover */}
        <motion.div
          className="h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        />
      </motion.div>
    </div>
  );
}

export default Resume;