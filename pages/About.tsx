import React from 'react'
import SeoHead from '../components/SeoHead'
import { motion, Variants } from 'framer-motion'
import { Sparkles, Quote, Wind, Compass, RefreshCw, DoorOpen } from 'lucide-react'

const About: React.FC = () => {
  // Animation variants for smooth entrance
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <>
      <SeoHead
        title="소개 | 자비심선원"
        description="자비심선원은 보이지 않는 차원을 알고, 내 삶을 움직이는 기운의 흐름을 전환하는 마음법을 배우는 곳입니다."
      />

      <div className="bg-[#FBF8F3] min-h-screen font-sans text-[#3A2F2A]">
        {/* Header Section with Background Image */}
        <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          {/* Background & Overlay */}
          <div className="absolute inset-0 z-0">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1.0 }}
              transition={{ duration: 2.0, ease: 'easeOut' }}
              src="/info.jpeg"
              alt="자비심선원 소개 배경"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/20" />
            {/* Gradient to blend into the next section */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#FBF8F3]" />
          </div>

          {/* Text Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6 mt-10">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
              <motion.span 
                variants={fadeInUp} 
                className="inline-block text-white/90 text-sm font-bold tracking-[0.3em] uppercase mb-6 drop-shadow-sm border-b border-white/30 pb-2"
              >
                소개
              </motion.span>
              <motion.h1 
                variants={fadeInUp} 
                className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8 break-keep text-white drop-shadow-lg"
              >
                보이는 세계 너머에<br/>
                <span className="text-[#E8DCC8]">삶을 움직이는 힘</span>이 있습니다.
              </motion.h1>
            </motion.div>
          </div>
        </section>

        {/* Main Content Flow */}
        <div className="max-w-3xl mx-auto px-6 pb-32 space-y-24 md:space-y-32 pt-20">
          
          {/* 1. The Visible vs Invisible World */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-10%" }} 
            variants={fadeInUp}
            className="text-center relative"
          >
             <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#D6C3A1] to-transparent mx-auto mb-8 opacity-50"></div>
             <p className="text-lg md:text-xl text-[#786C65] font-light leading-9 break-keep">
               우리가 살아가는 세상은 눈에 보이는 물질의 세계입니다.<br/>
               그러나 우리의 삶을 움직이는 힘은<br/>
               <span className="font-medium text-[#5C4F46] border-b border-[#E8DCC8]">보이지 않는 더 깊은 차원</span>에서 작용하고 있습니다.
             </p>
          </motion.section>

          {/* 2. The Conflict (Effort vs Flow) */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-10%" }} 
            variants={fadeInUp}
            className="text-center space-y-8"
          >
             <p className="text-xl md:text-2xl text-[#5C4F46] font-normal leading-relaxed break-keep">
               노력은 하는데 방향이 어긋나 있고,<br/>
               애쓰는데도 삶이 쉽게 풀리지 않는 이유는
             </p>
             <p className="text-xl md:text-2xl text-[#A89068] font-bold leading-relaxed break-keep">
                이미 형성된 기운의 흐름이<br/>
                내가 원하는 방향과 맞지 않기 때문입니다.
             </p>
          </motion.section>

          {/* 3. Mind Law Definition */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-10%" }} 
            variants={staggerContainer}
            className="text-center"
          >
             <motion.div variants={fadeInUp} className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E8DCC8]/30 text-[#A89068] mb-6">
                <Sparkles size={20} />
             </motion.div>
             
             <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold mb-8 text-[#3A2F2A]">
               마음법
             </motion.h2>

             <motion.div variants={fadeInUp} className="space-y-10">
               <p className="text-xl md:text-2xl font-serif text-[#3A2F2A] font-medium leading-relaxed break-keep">
                 마음법은 보이지 않는 차원을 알고,<br/>
                 내 삶을 움직이는 <span className="bg-[#FAE100]/20 px-1">기운의 흐름을 전환하는 공부</span>입니다.
               </p>

               <div className="text-base md:text-lg text-[#786C65] font-light leading-8 space-y-4 break-keep max-w-2xl mx-auto bg-[#F6F2EA] p-8 rounded-2xl">
                 <p>
                   눈에 보이는 결과를 바꾸기 이전에,<br/>
                   그 결과를 만들어내는 보이지 않는 구조를 바로 세우는 공부.
                 </p>
                 <p className="font-normal text-[#5C4F46]">
                   삶의 겉모습이 아니라<br/>
                   삶을 움직이는 근본을 다루는 공부입니다.
                 </p>
               </div>
             </motion.div>
          </motion.section>

          {/* 4. Jabisim Seonwon & Actions */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-10%" }} 
            variants={fadeInUp}
            className="text-center"
          >
             <h3 className="text-lg md:text-xl font-bold text-[#3A2F2A] mb-10 leading-relaxed break-keep">
               자비심선원은<br/>
               구로자비부처님께서 내려주신 마음법을 통해<br/>
               <span className="text-[#A89068]">삶의 흐름을 새롭게 세우는 법</span>을 배우는 곳입니다.
             </h3>

             <p className="text-[#786C65] mb-8">이곳에서 우리는</p>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {[
                 { text: "삶을 돌아보고", icon: Quote },
                 { text: "기운의 방향을 점검하며", icon: Compass },
                 { text: "흐름을 전환하는 법을 배웁니다", icon: RefreshCw }
               ].map((item, idx) => (
                 <div key={idx} className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-[#E6DFCF] hover:border-[#D6C3A1] transition-colors">
                    <item.icon className="w-6 h-6 text-[#D6C3A1] mb-3" />
                    <span className="text-[#5C4F46] font-medium break-keep">{item.text}</span>
                 </div>
               ))}
             </div>
          </motion.section>

          {/* 5. Closing - Enhanced UI */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-10%" }} 
            variants={fadeInUp}
            className="relative mt-24 py-16 px-8 md:px-12 bg-white rounded-3xl border border-[#E6DFCF] shadow-[0_10px_40px_-15px_rgba(168,144,104,0.1)] text-center overflow-hidden"
          >
             {/* Decorative Top Gradient Line */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D6C3A1] to-transparent opacity-60" />

             {/* Icon */}
             <div className="flex justify-center mb-8">
               <div className="p-4 rounded-full bg-[#FBF8F3] text-[#A89068]">
                 <DoorOpen size={28} strokeWidth={1.5} />
               </div>
             </div>
             
             {/* First Beat */}
             <p className="font-serif text-xl md:text-2xl text-[#5C4F46] leading-relaxed mb-8">
               기운의 흐름이 전환될 때<br/>
               비로소 <span className="font-semibold text-[#3A2F2A] decoration-[#D6C3A1]/50 underline underline-offset-4 decoration-1">새로운 문</span>이 열립니다.
             </p>

             {/* Divider */}
             <div className="flex justify-center items-center gap-4 mb-8 opacity-40">
                <div className="h-px w-12 bg-[#A89068]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#A89068]"></div>
                <div className="h-px w-12 bg-[#A89068]"></div>
             </div>

             {/* Second Beat (Impact) */}
             <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#3A2F2A] mb-6 leading-tight">
               문은 저절로 열리지 않습니다.
             </h2>
             
             {/* Third Beat (Identity) */}
             <p className="text-base md:text-lg text-[#786C65] font-light leading-relaxed">
               자비심선원은<br/>
               <span className="text-[#A89068] font-medium">그 문을 여는 법</span>을 배우는 자리입니다.
             </p>
          </motion.section>

        </div>
      </div>
    </>
  )
}

export default About