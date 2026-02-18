import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Route 변경 시 스크롤을 즉시 최상단으로 이동
    // 'instant'를 사용하여 CSS의 scroll-behavior: smooth 설정을 무시하고 즉각 이동
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as any
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;