import React, { useState } from "react";
import SeoHead from "../components/SeoHead";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  MapPin,
  ExternalLink,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const MIND_LAW_FAQ_DATA: FaqItem[] = [
  {
    question: "자비심선원은 어떤 곳인가요?",
    answer: (
      <div className="space-y-3 text-main-textLight">
        <p>
          자비심선원은
          <br />
          구로자비부처님께서 내려주신{" "}
          <strong className="text-main-text font-medium">마음법</strong>을
          배우는 곳입니다.
        </p>
        <p className="text-sm bg-main-bgAlt p-3 rounded-lg border border-main-border/50 text-main-textLight/90">
          기도만 드리는 공간이 아니라,
          <br />
          삶의 방향을 바로 세우기 위해 공부하고 실천하는 자리입니다.
        </p>
      </div>
    ),
  },
  {
    question: "마음법이란 무엇인가요?",
    answer: (
      <div className="space-y-3 text-main-textLight">
        <p>
          마음법은
          <br />
          보이는 결과를 바꾸기 이전에,
          <br />그 결과를 만들어내는{" "}
          <strong className="text-main-text font-medium">
            보이지 않는 구조
          </strong>
          를 다루는 공부입니다.
        </p>
        <p>
          내 삶을 움직이는{" "}
          <strong className="text-main-text font-medium">기운의 흐름</strong>을
          알고,
          <br />그 방향을{" "}
          <strong className="text-main-text font-medium">전환하는 법</strong>을
          배우는 가르침입니다.
        </p>
      </div>
    ),
  },
  {
    question: "기존에 알고 있던 불교와 무엇이 다른가요?",
    answer: (
      <div className="space-y-3 text-main-textLight">
        <p>
          경전을 해석하거나 이론을 배우는 공부가 아니라,
          <br />
          <strong className="text-main-text font-medium">
            지금 내 삶에 직접 적용하는 공부
          </strong>
          입니다.
        </p>
        <p>
          삶이 왜 반복되고, 왜 막히는지
          <br />그{" "}
          <strong className="text-main-text font-medium">근본 원인</strong>을
          다루는 데 중심을 둡니다.
        </p>
      </div>
    ),
  },
  {
    question: "마음법은 종교인가요?",
    answer: (
      <div className="space-y-3 text-main-textLight">
        <p>마음법은 단순히 불교를 공부하거나 믿는 것이 아닙니다.</p>
        <p className="text-sm bg-main-bgAlt p-3 rounded-lg border border-main-border/50 text-main-textLight/90">
          우리의 <strong>‘진짜 성공과 행복’</strong>을 찾을 수 있도록
          <br />
          부처님께서 처음 내려주신 가르침(法)을 배우는 공부입니다.
        </p>
      </div>
    ),
  },
  {
    question: "자비심선원에서는 무엇을 배우나요?",
    answer: (
      <div className="space-y-3 text-main-textLight">
        <div>
          <p className="mb-2">자비심선원에서는</p>
          <ul className="list-disc pl-5 space-y-1 marker:text-main-button">
            <li>자신의 삶을 돌아보고,</li>
            <li>기운의 방향을 점검하며,</li>
            <li>흐름을 전환하는 법을 배웁니다.</li>
          </ul>
        </div>
        <p>
          <strong className="text-main-text font-medium">
            삶을 움직이는 근본
          </strong>
          을 바로 세우는 공부를 합니다.
        </p>
      </div>
    ),
  },
  {
    question: "공부는 어떻게 진행되나요?",
    answer: (
      <div className="space-y-3 text-main-textLight">
        <p>공부는 크게 두 가지 흐름의 법회를 통해 이루어집니다.</p>
        <ul className="list-disc pl-5 space-y-1 marker:text-main-button">
          <li>
            <strong>정화 축원 법회</strong>(좌명 대선사님 주관): 기운을
            정화하고,
          </li>
          <li>
            <strong>공부 법회</strong>(심진 선생님 주관): 이치를 배우고 현실
            적용법을 익힙니다.
          </li>
        </ul>
        <p>
          법회에 참석하여 기운을 정화하고, 가르침을 배우며,
          <br />
          이를 삶에 적용해 나가는 구조입니다.
        </p>
      </div>
    ),
  },
  {
    question: "공부하면 어떤 변화가 있나요?",
    answer: (
      <div className="space-y-3 text-main-textLight">
        <p>
          기운의 흐름이 바르게 세워지면 근본이 바뀌면서
          <br />
          삶의 방향이 정리되고 변화가 자연스럽게 나타납니다.
        </p>
        <ul className="list-disc pl-5 space-y-1 marker:text-main-button">
          <li>막혀 있던 일이 풀리고,</li>
          <li>혼란과 불안이 줄어들며,</li>
          <li>내가 가야 할 길이 분명해집니다.</li>
        </ul>
      </div>
    ),
  },
];

const VISIT_FAQ_DATA: FaqItem[] = [
  {
    question: "법회는 어떻게 신청하나요?",
    answer: (
      <div className="space-y-3 text-main-textLight">
        <p>
          법회 신청글은 법회 이틀 전 오후 12시에 ‘법회신청’ 게시판에 올라옵니다.
          <br />
          신청서를 작성하시면 법회 신청이 완료됩니다.
        </p>
        <p className="text-sm bg-main-bgAlt p-3 rounded-lg border border-main-border/50 text-main-textLight/90">
          (예: 일요일 대법회 신청글 → 금요일 오후 12시 업로드)
        </p>
      </div>
    ),
  },
  {
    question: "신청 마감은 언제인가요?",
    answer: (
      <div className="space-y-3 text-main-textLight">
        <p>
          사전 신청은 <strong>법회 전날 오후 9시 30분</strong>에 마감됩니다.
        </p>
        <p>
          신청을 못하신 분들은 당일 방문 후 말씀해주시면
          <br />
          입실하실 수 있도록 안내해드립니다.
        </p>
      </div>
    ),
  },
  {
    question: "법회 일정은 어디서 확인하나요?",
    answer: (
      <div className="space-y-3 text-main-textLight">
        <p>월간 법회 일정은 아래 링크에서 확인하실 수 있습니다.</p>
        <a
          href="https://cafe.naver.com/chungseock53?iframe_url=/ArticleList.nhn%3Fsearch.clubid=23067114%26search.menuid=197%26search.boardtype=L"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-main-buttonHover font-bold hover:underline bg-main-bg px-3 py-2 rounded-lg mt-1"
        >
          👉 법회 안내 일정 확인하기 <ExternalLink size={14} />
        </a>
      </div>
    ),
  },
  {
    question: "정성금은 어떻게 올리나요?",
    answer: (
      <div className="space-y-3 text-main-textLight">
        <p>정성금 안내는 아래 링크를 참고해주세요.</p>
        <a
          href="https://cafe.naver.com/chungseock53/638279"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-main-buttonHover font-bold hover:underline bg-main-bg px-3 py-2 rounded-lg mt-1"
        >
          👉 정성금 올리는 법 확인하기 <ExternalLink size={14} />
        </a>
      </div>
    ),
  },
  {
    question: "오프라인 법회 참석 연령 제한이 있나요?",
    answer: (
      <div className="space-y-3 text-main-textLight">
        <p>
          성인을 위한 대중법회이므로
          <br />
          현재 <strong>만 20세 이상만 참석 가능</strong>합니다.
        </p>
      </div>
    ),
  },
  {
    question: "복장에 제한이 있나요?",
    answer: (
      <div className="space-y-3 text-main-textLight">
        <p>단정한 복장을 권장합니다.</p>
        <ul className="list-disc pl-5 space-y-1 marker:text-main-button">
          <li>짧은 치마, 민소매, 몸이 드러나는 옷은 피해주세요.</li>
          <li>법회 중에는 모자와 선글라스 착용이 어렵습니다.</li>
          <li>맨발은 불가합니다. (양말 착용 필수)</li>
        </ul>
      </div>
    ),
  },
  {
    question: "법회 중 주의사항이 있나요?",
    answer: (
      <div className="space-y-3 text-main-textLight">
        <ul className="list-disc pl-5 space-y-2 marker:text-main-button">
          <li>
            법회 중 <strong>사진촬영, 녹음, 녹화</strong>는 불가합니다.
          </li>
          <li>
            법회 중 <strong>음식이나 음료 섭취</strong>는 어렵습니다.
          </li>
          <li>
            대중법회이므로 법회 중 <strong>퇴실은 제한</strong>됩니다.
          </li>
          <li>좌석은 자유롭게 착석하시면 됩니다.</li>
        </ul>
      </div>
    ),
  },
];

const FAQ: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>("mind-0");

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  const renderFaqList = (
    data: FaqItem[],
    prefix: string,
    iconType: "sparkles" | "check",
  ) => {
    return (
      <div className="space-y-4">
        {data.map((item, index) => {
          const id = `${prefix}-${index}`;
          const isOpen = activeId === id;
          const Icon = iconType === "sparkles" ? Sparkles : CheckCircle2;

          return (
            <div
              key={id}
              className={`bg-white rounded-xl overflow-hidden border transition-colors ${
                isOpen
                  ? "border-main-button/50 shadow-warm"
                  : "border-main-border shadow-sm"
              }`}
            >
              <button
                onClick={() => toggleAccordion(id)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <div className="flex items-start gap-3">
                  <Icon
                    className={`mt-1 flex-shrink-0 ${isOpen ? "text-main-button" : "text-gray-300"}`}
                    size={20}
                  />
                  <span
                    className={`font-medium text-lg leading-snug ${isOpen ? "text-main-buttonHover" : "text-main-text"}`}
                  >
                    {item.question}
                  </span>
                </div>
                <ChevronDown
                  className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-main-button" : "text-gray-400"}`}
                />
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-8 pt-0 pl-[3.25rem]">
                      <div className="pt-4 border-t border-main-bg text-base leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <SeoHead
        title="자주 묻는 질문 | 자비심선원"
        description="자비심선원은 무엇을 하는 곳인가요? 마음법 공부에 대한 궁금증과 방문/참석에 대한 자주 묻는 질문을 확인하세요."
      />

      <div className="bg-main-bg py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-main-text mb-4">
              자주 묻는 질문
            </h1>
            <p className="text-main-textLight">
              궁금한 내용을 한눈에 확인하세요.
            </p>
          </div>

          {/* Section 1 Header */}
          <div className="mb-10 flex items-center justify-center gap-2">
            <div className="h-px bg-main-border w-12 md:w-24"></div>
            <div className="flex items-center gap-2 text-main-text">
              <Sparkles className="text-main-button" size={24} />
              <h2 className="text-2xl font-serif font-bold">
                마음법 · 공부 FAQ
              </h2>
            </div>
            <div className="h-px bg-main-border w-12 md:w-24"></div>
          </div>

          {/* Section 1: Mind Law */}
          {renderFaqList(MIND_LAW_FAQ_DATA, "mind", "sparkles")}

          {/* Section 2 Divider & Header */}
          <div className="mt-20 mb-10 flex items-center justify-center gap-2">
            <div className="h-px bg-main-border w-12 md:w-24"></div>
            <div className="flex items-center gap-2 text-main-text">
              <MapPin className="text-main-button" size={24} />
              <h2 className="text-2xl font-serif font-bold">
                방문 · 참석 안내 FAQ
              </h2>
            </div>
            <div className="h-px bg-main-border w-12 md:w-24"></div>
          </div>

          {/* Section 2: Visit Info */}
          {renderFaqList(VISIT_FAQ_DATA, "visit", "check")}

          {/* CTA */}
          <div className="mt-16 text-center p-8 bg-main-section rounded-2xl border border-main-border">
            <MessageCircle className="mx-auto h-8 w-8 text-main-button mb-3" />
            <h3 className="font-bold text-main-text mb-2">
              실질적인 방문 절차가 궁금하신가요?
            </h3>
            <p className="text-sm text-main-textLight mb-4">
              구체적인 이용 안내는 [처음 오시는 분] 페이지에 정리되어 있습니다.
            </p>
            <a
              href="#/first-visit"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-white border border-main-border text-main-text text-sm font-bold rounded-lg hover:bg-main-bgAlt transition-colors shadow-sm"
            >
              처음 오시는 분 안내 보기
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
