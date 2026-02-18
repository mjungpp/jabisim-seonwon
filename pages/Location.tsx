import React, { useState } from 'react';
import SeoHead from '../components/SeoHead';
import { CONTACT_INFO } from '../constants';
import { Bus, Train, Car, Navigation, MapPin, Copy, ExternalLink, Check } from 'lucide-react';

const Location: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.address);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <>
      <SeoHead 
        title="오시는 길 | 자비심선원" 
        description="경기도 오산시 오산로 368번길 25. 오산대역 1번 출구 도보 10분. 주차 가능."
      />
      
      <div className="bg-main-bg py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-main-text mb-8">오시는 길</h1>
            
            <div className="flex flex-col items-center justify-center gap-6">
              {/* Address Button */}
              <button 
                onClick={handleCopyAddress}
                className="group relative flex flex-col md:flex-row items-center gap-4 bg-white px-8 py-8 rounded-2xl shadow-warm border border-main-border hover:border-main-button hover:shadow-lg transition-all duration-300 w-full"
              >
                <div className="p-4 bg-main-section rounded-full text-main-button group-hover:bg-main-button group-hover:text-white transition-colors flex-shrink-0">
                  <MapPin size={28} />
                </div>
                <div className="flex flex-col items-center md:items-start flex-grow">
                    <span className="text-xl md:text-2xl font-medium text-main-text break-keep text-center md:text-left">
                        {CONTACT_INFO.address}
                    </span>
                    <span className="text-sm text-main-textLight mt-2 flex items-center gap-1.5">
                        {isCopied ? (
                            <span className="text-green-600 font-bold flex items-center gap-1.5 animate-pulse">
                                <Check size={16} /> 주소가 복사되었습니다
                            </span>
                        ) : (
                            <span className="group-hover:text-main-buttonHover transition-colors flex items-center gap-1.5">
                                <Copy size={16} /> 클릭하여 주소 복사하기
                            </span>
                        )}
                    </span>
                </div>
              </button>

              {/* Map Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <a 
                    href="https://map.kakao.com/link/search/자비심선원"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-4 px-6 bg-[#FAE100] text-[#371D1E] rounded-xl font-bold hover:opacity-90 transition-opacity shadow-sm hover:shadow-md h-14"
                >
                    <span className="text-lg">카카오맵 바로가기</span>
                    <ExternalLink size={20} />
                </a>
                <a 
                    href="https://map.naver.com/p/search/자비심선원"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-4 px-6 bg-[#03C75A] text-white rounded-xl font-bold hover:opacity-90 transition-opacity shadow-sm hover:shadow-md h-14"
                >
                    <span className="text-lg">네이버 지도 바로가기</span>
                    <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Transport Info */}
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            
            <div className="bg-white p-6 rounded-2xl shadow-warm border border-main-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-main-section rounded-full text-main-button flex-shrink-0">
                  <Train size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-main-text mb-3">지하철 이용 시</h3>
                  <p className="text-main-textLight leading-relaxed">
                    <span className="inline-block font-bold text-white bg-[#0052A4] px-2 py-0.5 rounded text-xs mr-2 align-middle">1호선</span>
                    오산대역 1번 출구<br/>
                    <span className="text-sm opacity-80 block mt-1">→ 직진 1km (도보 약 10분)</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-warm border border-main-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-main-section rounded-full text-main-button flex-shrink-0">
                  <Bus size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-main-text mb-3">버스 이용 시</h3>
                  <p className="text-main-textLight font-medium mb-2">수청근린공원역 하차</p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded font-medium">8</span>
                    <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded font-medium">32</span>
                    <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded font-medium">201</span>
                    <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded font-medium">H19</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-warm border border-main-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-main-section rounded-full text-main-button flex-shrink-0">
                  <Navigation size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-main-text mb-3">KTX / SRT 이용 시</h3>
                  <ul className="space-y-3 text-main-textLight text-sm">
                    <li className="flex items-start gap-2">
                        <span className="font-bold text-main-text min-w-[32px]">KTX</span>
                        <span>수원역 하차 → 1호선 환승 → 오산대역</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="font-bold text-main-text min-w-[32px]">SRT</span>
                        <span>평택지제역 하차 → 1호선 환승 → 오산대역</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-warm border border-main-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-main-section rounded-full text-main-button flex-shrink-0">
                  <Car size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-main-text mb-3">자가용 / 주차</h3>
                  <p className="text-main-textLight mb-3">
                    네비게이션 <strong>"자비심선원"</strong> 검색
                  </p>
                  <p className="text-sm text-main-buttonHover font-semibold bg-main-section/40 px-3 py-2 rounded-lg inline-block">
                    * 인근 공영주차장 무료 (도보 1분)
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Location;