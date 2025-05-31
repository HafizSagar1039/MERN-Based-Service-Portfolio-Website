import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll instead of instant jump
    });
  }, [pathname]); // Triggers on every route change

  return null; // Renders nothing
};

export default ScrollToTop;