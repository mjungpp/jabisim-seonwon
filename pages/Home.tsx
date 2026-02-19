import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHead from "../components/SeoHead";
import { SEO_DEFAULTS } from "../constants";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <>
      <SeoHead
        title={SEO_DEFAULTS.title}
        description={SEO_DEFAULTS.description}
        keywords={SEO_DEFAULTS.keywords}
      />

      {/* Hero Section: Emotional & Aesthetic */}
      <section className="relative w-full h-[90vh] min-h-[700px] flex flex-col justify-end overflow-hidden bg-[#FBF8F3]">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1.0 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
            src={`${import.meta.env.BASE_URL}hero.jpeg`}
            alt="자비심선원 배경"
            className="w-full h-full object-cover opacity-[0.85]"
          />
          {/* Subtle Overlay for Text Readability without muddying the image */}
          <div className="absolute inset-0 bg-white/20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FBF8F3]/40 via-transparent to-[#FBF8F3]/60" />
        </div>

        {/* Hero Content - Centered Upper Area */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center flex-grow pt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center mb-16"
          >
            {/* Top Tagline - Emotional Hook */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[1px] bg-[#A89068]/60 hidden sm:block"></div>
              {/* Changed color to warmer brown #6B574B */}
              <p className="font-serif text-[#6B574B] text-lg md:text-2xl font-medium tracking-wide break-keep drop-shadow-sm">
                마음법과 연결되는 순간,{" "}
                <span className="text-[#A89068] font-bold">
                  미래가 새롭게 열린다
                </span>
              </p>
              <div className="w-12 h-[1px] bg-[#A89068]/60 hidden sm:block"></div>
            </motion.div>

            {/* Main Title - Refined Serif Typography */}
            <div className="relative">
              {/* Soft glow behind text for readability */}
              <div className="absolute -inset-10 bg-white/30 blur-3xl rounded-full opacity-0 md:opacity-100 pointer-events-none"></div>

              {/* Changed Title color to #54433A (Deep Mocha Brown) to avoid harsh black */}
              <h1 className="relative font-serif font-bold text-6xl md:text-8xl lg:text-9xl text-[#54433A] tracking-tight leading-none z-10 drop-shadow-sm">
                자비심선원
                <span className="text-[#A89068] inline-block transform translate-y-1">
                  .
                </span>
              </h1>

              {/* Changed English subtitle to Hanja "大人市父 仁王天" with Serif font */}
              <p className="relative z-10 text-center mt-5 text-[#948474] font-serif text-sm md:text-lg tracking-[0.3em] font-medium">
                大人市父 仁王天
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Buttons - Bottom of Hero */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {/* Button 1: About */}
            <Link
              to="/about"
              className="group flex items-center justify-between px-8 py-5 rounded-xl border border-white/50 bg-white/70 backdrop-blur-md hover:bg-white/90 transition-all duration-300 shadow-[0_4px_20px_-8px_rgba(168,144,104,0.1)]"
            >
              <span className="font-sans font-medium text-[#54433A] text-lg">
                자비심선원 소개
              </span>
              <ArrowRight className="w-5 h-5 text-[#A89068] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>

            {/* Button 2: Program */}
            <Link
              to="/program"
              className="group flex items-center justify-between px-8 py-5 rounded-xl border border-white/50 bg-white/70 backdrop-blur-md hover:bg-white/90 transition-all duration-300 shadow-[0_4px_20px_-8px_rgba(168,144,104,0.1)]"
            >
              <span className="font-sans font-medium text-[#54433A] text-lg">
                법회 안내
              </span>
              <ArrowRight className="w-5 h-5 text-[#A89068] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>

            {/* Button 3: Kakao */}
            <a
              href="https://pf.kakao.com/_ZdxnHn/chat"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between px-8 py-5 rounded-xl border border-white/50 bg-[#FAE100]/80 backdrop-blur-md hover:bg-[#FAE100] transition-all duration-300 shadow-[0_4px_20px_-8px_rgba(168,144,104,0.1)]"
            >
              <span className="font-sans font-medium text-[#371D1E] text-lg flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[#371D1E]/70 group-hover:text-[#371D1E] transition-colors" />
                문의하기
              </span>
              <ArrowRight className="w-5 h-5 text-[#371D1E]/50 group-hover:text-[#371D1E] group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
