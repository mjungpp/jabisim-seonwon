import React from "react";
import SeoHead from "../components/SeoHead";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Clock,
  User,
  Shirt,
  Heart,
  MessageCircle,
} from "lucide-react";

const SCHEDULE_URL =
  "https://cafe.naver.com/chungseock53?iframe_url=/ArticleList.nhn%3Fsearch.clubid=23067114%26search.menuid=197%26search.boardtype=L";
const DONATION_URL = "https://cafe.naver.com/chungseock53/638279";
const KAKAO_URL = "https://pf.kakao.com/_ZdxnHn/chat";

const FirstVisit: React.FC = () => {
  return (
    <>
      <SeoHead
        title="처음 오시는 분 안내 | 자비심선원"
        description="자비심선원 방문을 위한 실용 가이드. 일정 확인, 신청 방법, 복장, 정성금 등 방문 전 꼭 확인해야 할 내용을 정리했습니다."
      />

      <div className="bg-main-bg py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-main-text mb-4">
                방문 전 확인사항
              </h1>
              <p className="text-main-textLight max-w-2xl mx-auto">
                편안한 방문을 위해 미리 확인해 주세요.
              </p>
            </div>

            <div className="space-y-8">
              {/* 1. 일정 및 신청 */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-main-border shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-main-section rounded-xl text-main-buttonHover">
                    <Calendar size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-main-text">
                    1. 일정 확인 및 신청
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-main-text flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-main-button" />
                      법회 일정 확인
                    </h3>
                    <p className="text-sm text-main-textLight leading-relaxed">
                      법회 일정은 네이버 카페{" "}
                      <a
                        href={SCHEDULE_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="text-main-buttonHover hover:underline font-bold"
                      >
                        법회 안내(월간 일정표)
                      </a>
                      를 기준으로 공지됩니다.
                      <br />
                      방문 전 반드시 일정표를 확인해주세요.
                    </p>

                    <p className="text-xs text-main-textLight">
                      * 상세 일정은 공지 기준으로 운영됩니다.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-main-text flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-main-button" />
                      법회 신청 방법
                    </h3>
                    <ul className="space-y-2 text-sm text-main-textLight">
                      <li>
                        • <strong>신청 시기:</strong> 법회 이틀 전 오후 12시
                        오픈
                      </li>
                      <li>
                        • <strong>마감 시기:</strong> 법회 전날 오후 9시 30분
                        마감
                      </li>
                      <li>
                        • <strong>신청처:</strong>{" "}
                        <a
                          href={SCHEDULE_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="text-main-buttonHover hover:underline font-medium"
                        >
                          네이버 카페 [법회신청] 게시판
                        </a>
                      </li>
                    </ul>
                    <div className="bg-main-bgAlt p-3 rounded-lg text-xs text-main-textLight border border-main-border/50">
                      * 신청을 놓치셨더라도, 당일 현장 입구 스탭에게
                      말씀해주시면 입실 안내를 도와드립니다.
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. 참여 기본 안내 */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-main-border shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-main-section rounded-xl text-main-buttonHover">
                    <User size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-main-text">
                    2. 참여 자격 및 복장
                  </h2>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-main-text font-semibold">
                      <User size={18} className="text-main-button" />
                      참석 연령
                    </div>
                    <p className="text-sm text-main-textLight leading-relaxed">
                      오프라인 법회는 <strong>만 20세 이상 성인</strong>만 참석
                      가능합니다.
                    </p>
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <div className="flex items-center gap-2 text-main-text font-semibold">
                      <Shirt size={18} className="text-main-button" />
                      복장 규정
                    </div>
                    <p className="text-sm text-main-textLight leading-relaxed">
                      수행과 공부를 하는 자리이므로 <strong>단정한 복장</strong>
                      을 권장합니다.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        노출 심한 의상 삼가
                      </span>
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        맨발 불가 (양말 착용)
                      </span>
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        모자/선글라스 미착용
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. 현장 이용 안내 */}
              <section className="bg-white rounded-2xl p-6 md:p-8 border border-main-border shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-main-section rounded-xl text-main-buttonHover">
                    <Clock size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-main-text">
                    3. 법회 진행 안내
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <Clock
                        className="text-main-button flex-shrink-0 mt-0.5"
                        size={18}
                      />
                      <div>
                        <strong className="block text-main-text text-sm mb-1">
                          법회 진행 시간
                        </strong>
                        <p className="text-sm text-main-textLight">
                          약 1시간 30분 ~ 2시간 30분 소요됩니다.
                          <br />
                          (법회 종류에 따라 상이)
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-3">
                      <Heart
                        className="text-main-button flex-shrink-0 mt-0.5"
                        size={18}
                      />
                      <div>
                        <strong className="block text-main-text text-sm mb-1">
                          정성금 안내
                        </strong>
                        <p className="text-sm text-main-textLight mb-1">
                          법회 참석 시 <strong>정성금을 올립니다.</strong>
                        </p>
                        <a
                          href={DONATION_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-bold text-main-buttonHover hover:underline flex items-center gap-1"
                        >
                          정성금 올리는 법 자세히 보기{" "}
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </li>
                  </ul>

                  <div className="bg-main-bgAlt rounded-xl p-5 border border-main-border/60 h-fit">
                    <h3 className="font-bold text-main-text text-sm mb-3 flex items-center gap-2">
                      <AlertCircle size={16} className="text-main-button" />
                      법회 중 주의사항
                    </h3>
                    <ul className="space-y-2 text-xs text-main-textLight">
                      <li>
                        • 법회 중 <strong>사진 촬영, 녹음, 녹화</strong>는 절대
                        불가합니다.
                      </li>
                      <li>
                        • 법당 내에서는 <strong>음식물 섭취</strong>가
                        어렵습니다.
                      </li>
                      <li>
                        • 법회 시작 후에는 이동이 제한될 수 있으니 시간을
                        지켜주세요.
                      </li>
                      <li>
                        • 입실 시에는 안내에 따라 자리에 앉아 정근을 합니다.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 문의 */}
              <div className="bg-main-sectionAlt rounded-2xl p-8 text-center border border-main-section">
                <MessageCircle className="mx-auto h-8 w-8 text-main-button mb-3" />
                <h3 className="font-bold text-main-text mb-2">
                  더 궁금한 점이 있으신가요?
                </h3>
                <p className="text-sm text-main-textLight mb-6">
                  카카오톡 채널을 통해 문의해주시면 답변해 드립니다.
                </p>
                <a
                  href={KAKAO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#FAE100] text-[#371D1E] text-sm font-bold rounded-xl hover:bg-opacity-90 transition-colors shadow-sm"
                >
                  카카오톡 문의하기
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FirstVisit;
