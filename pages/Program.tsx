import React from 'react'
import SeoHead from '../components/SeoHead'
import { motion } from 'framer-motion'
import { Calendar, Clock, Sparkles } from 'lucide-react'

const DHARMA_TYPES = [
  {
    title: '수요일 대법회',
    badge: { label: '공부 법회', tone: 'study' as const },
    lead: '심진 선생님 주관',
    description:
      '심진 선생님께서 주관하시는 공부 법회입니다. 현실에서 마음을 잘 써서 더 편안하고 행복하게 사는 방법을 공부합니다. 평일 오후 시간에 진행됩니다.',
    time: '매주 수요일 오후 7:30',
  },
  {
    title: '일요일 대법회',
    badge: { label: '공부 법회', tone: 'study' as const },
    lead: '심진 선생님 주관',
    description:
      '심진 선생님께서 주관하시는 공부 법회입니다. 현실에서 마음을 잘 써서 더 편안하고 행복하게 사는 방법을 공부합니다. 주말 오전에 진행됩니다.',
    time: '매주 일요일 오전 10:00',
  },
  {
    title: '초하루 대법회',
    badge: { label: '정화 법회', tone: 'purify' as const },
    lead: '좌명 대선사님 주관',
    description:
      '좌명 대선사님께서 주관하시는 정화 축원 법회입니다. 새로운 달을 맞이하며 마음과 기운을 정리하고, 한 달의 평안과 좋은 흐름을 발원하는 시간입니다.',
    time: '기본 일정: 일요일 오전 10:00 (월간 일정표 기준)',
  },
  {
    title: '지장재일 대법회',
    badge: { label: '정화 법회', tone: 'purify' as const },
    lead: '좌명 대선사님 주관',
    description:
      '좌명 대선사님께서 주관하시는 정화 축원 법회입니다. 지장보살님께 발원하며, 조상님을 위한 마음을 함께 올리는 뜻깊은 법회입니다.',
    time: '기본 일정: 일요일 오전 10:00 (월간 일정표 기준)',
  },
]

// Updated badge colors to match Champagne/Ivory theme
const badgeClass = (tone: 'study' | 'purify') => {
  if (tone === 'study') return 'bg-[#F4EFE6] text-[#786C65] border-[#E6DFCF]' // Soft Beige/Grey
  return 'bg-[#FBF8F3] text-[#A89068] border-[#D6C3A1]/50' // Ivory/Champagne
}

const Program: React.FC = () => {
  return (
    <>
      <SeoHead
        title="법회 안내 | 자비심선원"
        description="자비심선원 법회 안내. 심진 선생님과 함께하는 수요일 대법회, 일요일 대법회(공부 법회)와 좌명 대선사님이 주관하시는 초하루 대법회, 지장재일 대법회(정화 법회)가 열립니다. 정화 법회 일정은 월간 일정표를 확인해주세요."
      />

      <div className="bg-main-bg py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="font-serif text-4xl font-bold text-main-text mb-4">법회 안내</h1>
              <p className="text-main-textLight">자비심선원에서 진행되는 법회 일정을 안내해드립니다.</p>
            </div>

            {/* Dharma Types */}
            <div className="grid gap-8">
              {DHARMA_TYPES.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white rounded-2xl p-8 shadow-warm hover:shadow-gold transition-shadow duration-300 border border-main-border"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeClass(
                          item.badge.tone,
                        )}`}
                      >
                        <Sparkles size={14} className="opacity-70" />
                        {item.badge.label}
                      </span>
                      <span className="text-xs text-main-textLight">{item.lead}</span>
                    </div>

                    <h2 className="text-2xl font-serif font-bold text-main-text">{item.title}</h2>
                    <p className="text-main-textLight leading-relaxed mb-2 whitespace-pre-line">{item.description}</p>

                    <div className="inline-flex items-center gap-2 bg-main-bg px-3 py-2 rounded-lg text-sm text-main-textLight/80 w-fit">
                      <Clock size={16} className="mt-0.5 flex-shrink-0" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 월간 일정표 */}
            <div className="mt-10 bg-main-section border border-main-border rounded-2xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white mb-4 shadow-sm border border-main-border text-main-pointDeep">
                <Calendar size={24} />
              </div>
              <h3 className="text-lg font-bold text-main-text mb-2">월간 법회 일정표</h3>
              <p className="text-main-textLight mb-6">
                매월 상세 일정은 네이버 카페에 공지됩니다.
                <br />
                방문 전 일정표를 확인해주세요.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://cafe.naver.com/f-e/cafes/23067114/menus/185?viewType=L"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-main-border bg-white px-5 py-3 font-semibold text-main-text hover:bg-main-bgAlt transition"
                >
                  월간 일정표 확인하기
                </a>
                <a
                  href="https://pf.kakao.com/_ZdxnHn/chat"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-main-button text-main-text hover:bg-main-buttonHover transition"
                >
                  일정/참석 문의하기
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Program