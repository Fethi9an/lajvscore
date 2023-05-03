import React, { useState } from 'react';
/* import styles from './GameList.module.css'; */
import arrowUp from './arrow-up.svg';

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const scrollThreshold = 200;
    setShowButton(currentScrollY > scrollThreshold);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`${styles.backToTopButton} ${showButton ? styles.visible : ''}`}
      onClick={handleClick}
    >
      <img src={arrowUp} alt="Back to top" />
    </button>
  );
};

export default BackToTopButton;