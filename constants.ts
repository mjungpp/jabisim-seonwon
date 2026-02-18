import { NavItem, ProgramItem, SeoData } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '소개', path: '/about' },
  { label: '처음 오시는 분', path: '/first-visit' },
  { label: '법회 안내', path: '/program' },
  { label: '자주 묻는 질문', path: '/faq' },
  { label: '오시는 길', path: '/location' },
];

export const SEO_DEFAULTS: SeoData = {
  title: '자비심선원 | 열린 수행 공동체',
  description: '자비심선원은 누구나 마음을 쉬어갈 수 있는 열린 수행 공간입니다. 강요 없는 편안한 분위기에서 명상과 차담을 즐겨보세요.',
  keywords: '자비심선원, 오산 명상, 마음수련, 불교, 수행공동체, 오산대역 가볼만한곳',
};

export const PROGRAMS: ProgramItem[] = [
  {
    title: '데일리 명상',
    description: '바쁜 일상 속에서 잠시 멈추어 호흡을 가다듬고 내면을 바라보는 시간입니다.',
    time: '매주 화~토 오전 10:00',
    target: '누구나 참여 가능'
  },
  {
    title: '마음 차담(Tea Talk)',
    description: '따뜻한 차 한 잔과 함께 편안하게 이야기를 나누며 마음의 짐을 내려놓습니다.',
    time: '상시 운영 (방문 전 문의)',
    target: '초심자 추천'
  },
  {
    title: '수요 수행 정진',
    description: '조금 더 깊이 있는 수행을 원하시는 분들을 위한 집중 수행 시간입니다.',
    time: '매주 수요일 오후 7:00',
    target: '수행에 관심 있는 분'
  }
];

export const CONTACT_INFO = {
  address: '경기도 오산시 오산로 368번길 25, 2층 (수청동)',
  kakao: '자비심선원',
  tel: '카카오톡 채널 문의 권장'
};