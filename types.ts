export interface NavItem {
  label: string;
  path: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProgramItem {
  title: string;
  description: string;
  time: string;
  target: string;
}

export interface SeoData {
  title: string;
  description: string;
  keywords: string;
}

export enum TransportType {
  SUBWAY = '지하철',
  BUS = '버스',
  KTX = 'KTX',
  SRT = 'SRT',
  CAR = '자가용'
}