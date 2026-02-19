import { NavItem, ProgramItem, SeoData, ContactInfo } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "소개", path: "/about" },
  { label: "처음 오시는 분", path: "/first-visit" },
  { label: "법회 안내", path: "/program" },
  { label: "자주 묻는 질문", path: "/faq" },
  { label: "오시는 길", path: "/location" },
];
export const CONTACT_INFO: ContactInfo = {
  address: "경기도 오산시 오산로 368번길 25, 2층",
};

export const SEO_DEFAULTS: SeoData = {
  title: "자비심선원 | 마음법 · 법회 안내 · 마음공부",
  description:
    "자비심선원은 구로자비부처님께서 내려주신 마음법을 배우는 곳입니다. 보이지 않는 차원을 알고, 삶을 움직이는 기운의 흐름을 전환하는 공부를 합니다.",
  keywords:
    "자비심선원, 마음법, 기운 전환, 기운 리셋, 기운 리빌드, 인생 전환, 법회, 구로자비부처님",
};
