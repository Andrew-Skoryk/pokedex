import React, { useEffect, useState } from 'react';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed w-12 h-12 p-1 bg-blue-600 rounded-full cursor-pointer text-slate-50 xl:right-24 focus:outline-none hover:bg-blue-700 active:bg-blue-800 bottom-4 right-4 md:bottom-8 md:right-8"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}

export default ScrollToTop;
