'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Code, Cpu, Users, Smartphone, Cloud, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      category: 'Programming Languages',
      icon: <Code className="h-4 w-4 sm:h-5 sm:w-5" />,
      skills: ['Python', 'Java', 'PHP', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS', 'R'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Mobile & Cross-Platform',
      icon: <Smartphone className="h-4 w-4 sm:h-5 sm:w-5" />,
      skills: ['Flutter', 'Android Development', 'iOS Development'],
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      category: 'Web Frameworks & Libraries',
      icon: <Code className="h-4 w-4 sm:h-5 sm:w-5" />,
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Streamlit'],
      gradient: 'from-emerald-500 to-green-500',
    },
    {
      category: 'AI & LLM Technologies',
      icon: <Brain className="h-4 w-4 sm:h-5 sm:w-5" />,
      skills: ['Hugging Face', 'RAG', 'OpenRouter', 'Ollama', 'LLM Automation', 'Prompt Engineering', 'Vercel AI SDK', 'AI Agents'],
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      category: 'Cloud, DevOps & Infrastructure',
      icon: <Cloud className="h-4 w-4 sm:h-5 sm:w-5" />,
      skills: ['AWS', 'Firebase', 'Supabase', 'Docker', 'Vercel', 'Linux', 'CI/CD', 'Hadoop'],
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      category: 'Tools & Platforms',
      icon: <Wrench className="h-4 w-4 sm:h-5 sm:w-5" />,
      skills: ['Git', 'GitHub', 'Stripe CLI', 'Figma', 'API Integration'],
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      category: 'Core Competencies',
      icon: <Cpu className="h-4 w-4 sm:h-5 sm:w-5" />,
      skills: ['OOP', 'SDLC', 'Web3', 'Auth Systems', 'Scalable Design'],
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      category: 'Soft Skills',
      icon: <Users className="h-4 w-4 sm:h-5 sm:w-5" />,
      skills: ['Communication', 'Problem-Solving', 'Adaptability', 'Learning Agility', 'Teamwork', 'Creativity'],
      gradient: 'from-amber-500 to-yellow-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
    },
  };

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="mx-auto w-full max-w-5xl rounded-4xl px-2 sm:px-0"
    >
      <Card className="w-full border-none px-0 pb-8 sm:pb-12 shadow-none">
        <CardHeader className="px-0 pb-1">
          <CardTitle className="text-primary px-0 text-2xl sm:text-3xl md:text-4xl font-bold">
            Skills & Expertise
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          <motion.div
            className="space-y-6 sm:space-y-8 px-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillsData.map((section, index) => (
              <motion.div key={index} className="space-y-2 sm:space-y-3 px-0" variants={itemVariants}>
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h3 className="text-accent-foreground text-sm sm:text-base md:text-lg font-semibold">
                    {section.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {section.skills.map((skill, idx) => (
                    <motion.button
                      key={idx}
                      className={`relative overflow-hidden rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-r ${section.gradient} active:scale-95`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
                      <span className="relative z-10">{skill}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;
