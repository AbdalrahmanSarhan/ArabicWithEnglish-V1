import React from 'react';
import { BookOpen, Users, Trophy, PlayCircle, CheckCircle, BarChart2, MessageCircle, Star, Award, Video, Sparkles, Brain, Rocket, Lightbulb, Globe2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { CountdownTimer } from './CountdownTimer';
import { CTA } from './CTA';
import { motion } from 'framer-motion';
import { FloatingElements, AnimatedAlphabet, AnimatedLearningPath, WordScramble, InteractiveQuiz, AnimatedBook, BrainActivity } from './EducationalAnimations';
import { Hero } from './landing/Hero';
import { WhySection } from './landing/WhySection';
import { EducationalDemosSection } from './landing/EducationalDemosSection';
import { LandingFeatures } from './landing/LandingFeatures';
export const ArabicWithEnglishLanding = () => {
  const {
    language
  } = useLanguage();
  const {
    theme
  } = useTheme();
  const isRTL = language === 'ar';
  return <div className="min-h-screen w-full bg-gradient-to-br from-light-100 via-light-200 to-light-300 dark:from-dark-100 dark:via-dark-200 dark:to-dark-300 text-neutral-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
      {/* Hero Section */}
      <Hero />
      {/* Why Choose Us section */}
      <WhySection />
      {/* Educational Demos Section */}
      <EducationalDemosSection />
      {/* Landing Features */}
      <LandingFeatures />
      {/* Call to Action */}
      <CTA />
      {/* Footer with Copyright */}
      <footer className="bg-white/50 dark:bg-dark-200/50 backdrop-blur-sm py-8 border-t border-gray-200/50 dark:border-gray-700/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <img src="/Logo_%2811%29.png" alt="Arabic With English Logo" className={`w-10 h-10 object-contain ${theme === 'dark' ? 'filter brightness-110' : ''}`} />
              <span className="text-xl font-bold">
                <span className="text-accent-gold-DEFAULT">Arabic</span>
                <span className="text-black dark:text-white">With</span>
                <span className="text-primary-600 dark:text-primary-400">
                  English
                </span>
              </span>
            </div>
            <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
              <a href="https://www.instagram.com/arabicwithenglish" target="_blank" rel="noopener noreferrer" className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Arabic With English.{' '}
              {isRTL ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
            </p>
          </div>
        </div>
      </footer>
    </div>;
};