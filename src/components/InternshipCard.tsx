'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Code2, Globe, Briefcase, Rocket, Mail, ChevronRight, Zap } from 'lucide-react';
import Image from 'next/image';

const InternshipCard = () => {
  const openMail = () => {
    window.open('mailto:mrkrisshu@gmail.com', '_blank');
  };

  const skills = [
    { col1: 'Python, JavaScript, TypeScript, Java', col2: 'OpenAI, Claude, Gemini, Hugging Face' },
    { col1: 'React, Next.js, Flutter, Tailwind CSS', col2: 'Prompt Engineering, Fine-tuning' },
    { col1: 'Firebase, Supabase, AWS', col2: 'CI/CD, Vercel, Git, API Integration' },
    { col1: 'RAG, LLM Automation, AI Agents', col2: '' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mt-4 sm:mt-8 w-full max-w-4xl px-2 sm:px-0"
    >
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white via-gray-50 to-purple-50/30 border border-gray-100 shadow-xl">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-green-100/50 to-emerald-100/50 rounded-full blur-3xl -mr-24 -mt-24" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-100/50 to-blue-100/50 rounded-full blur-3xl -ml-20 -mb-20" />

        <div className="relative p-4 sm:p-6 md:p-8 lg:p-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Avatar with gradient ring */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <Image
                      src="/krishna-photo.jpeg"
                      alt="Krishna Bantola AI Engineer and Full Stack Developer profile avatar"
                      title="Krishna Bantola — AI Engineer | Full Stack Developer | Android Engineer"
                      width={64}
                      height={64}
                      priority
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Status dot */}
                <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
              </motion.div>

              <div className="text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Krishna Bantola
                </h2>
                <p className="text-sm text-gray-600">
                  AI Engineer | Full Stack Developer | Android Engineer
                </p>
              </div>
            </div>

            {/* Open to Work badge */}
            <motion.div
              className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold">Open to Work</span>
            </motion.div>
          </div>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {/* Availability Card */}
            <motion.div
              className="p-3 sm:p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-blue-100 shadow-sm"
              whileHover={{ y: -2, shadow: 'lg' }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-100">
                  <CalendarDays className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-800">Availability</p>
                  <p className="text-xs sm:text-sm text-gray-600">6 months • Starting January 2026</p>
                </div>
              </div>
            </motion.div>

            {/* Work Mode Card */}
            <motion.div
              className="p-3 sm:p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-green-100 shadow-sm"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-100">
                  <Globe className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-800">Work Mode</p>
                  <p className="text-xs sm:text-sm text-gray-600">Onsite / Remote</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technical Expertise */}
          <motion.div
            className="p-4 sm:p-5 rounded-xl bg-white/80 backdrop-blur-sm border border-purple-100 shadow-sm mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="p-2 rounded-lg bg-purple-100">
                <Code2 className="h-5 w-5 text-purple-600" />
              </div>
              <p className="text-sm sm:text-base font-semibold text-gray-800">Technical Expertise</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
              {skills.map((skill, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Zap className="h-3.5 w-3.5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>{skill.col1}</span>
                </div>
              ))}
              {skills.filter(s => s.col2).map((skill, idx) => (
                <div key={`col2-${idx}`} className="flex items-start gap-2">
                  <Zap className="h-3.5 w-3.5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>{skill.col2}</span>
                </div>
              ))}
            </div>
            <a
              href="/chat?query=What%20are%20your%20skills%3F%20Give%20me%20a%20list%20of%20your%20soft%20and%20hard%20skills."
              className="inline-flex items-center gap-1 mt-3 text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              View all skills <ChevronRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* What I Bring & What I'm Looking For */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <motion.div
              className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <Briefcase className="h-5 w-5 text-blue-600" />
                <h3 className="text-sm sm:text-base font-semibold text-gray-800">What I Bring</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Hands-on experience building production-ready AI applications and full-stack systems.
                From RAG pipelines to mobile apps, I've shipped real products. I move fast and learn faster.
              </p>
            </motion.div>

            <motion.div
              className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <Rocket className="h-5 w-5 text-purple-600" />
                <h3 className="text-sm sm:text-base font-semibold text-gray-800">What I'm Looking For</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                An opportunity to work on cutting-edge AI products with a team that values innovation.
                Ready to contribute meaningfully and hit the ground running 🚀
              </p>
            </motion.div>
          </div>

          {/* Contact Button */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <motion.button
              onClick={openMail}
              className="flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-gray-800 to-black text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">Contact Me</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InternshipCard;
