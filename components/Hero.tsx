'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '@/data/portfolio';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30"
        />
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30"
        />
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 relative z-10"
      >
        <div className="text-center">
          <motion.div variants={itemVariants} className="mb-6">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-base sm:text-xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium px-2"
            >
              {personalInfo.title}
            </motion.h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 text-center px-4 whitespace-pre-line"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-10"
          >
            {personalInfo.social.github && (
              <motion.a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                <FaGithub size={32} />
              </motion.a>
            )}
            {personalInfo.social.linkedin && (
              <motion.a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                <FaLinkedin size={32} />
              </motion.a>
            )}
            {personalInfo.social.twitter && (
              <motion.a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                <FaTwitter size={32} />
              </motion.a>
            )}
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <FaEnvelope size={32} />
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <motion.button
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              Get In Touch
            </motion.button>
            <motion.button
              onClick={() =>
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-all"
            >
              View Projects
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-purple-600 rounded-full flex justify-center"
          >
            <motion.div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
