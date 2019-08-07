import React, {useEffect, useState} from 'react';
import styles from './index.module.css';

import {Slide} from '../../components/slide';
import script from '../../script.json';

import arrow from '../../assets/icons/arrow.svg';

export function Presentation() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slide, setSlide] = useState(script[slideIndex]);

  function changeSlide(pos){
    if (pos < 0 && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
    if (pos > 0 && slideIndex + 1 < script.length) {
      setSlideIndex(slideIndex + 1);
    }
    setSlide(script[slideIndex]);
  }

  function handleKeyUp(e) {
    if (e.key === 'ArrowLeft') return changeSlide(-1);
    if (e.key === 'ArrowRight') return changeSlide(1);
    return null;
  }

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    }
  });

  return (
    <div className={styles.App}>
      <div className={`${styles.nav} ${styles.previous}`}>
        <img src={arrow} alt="Slide Anterior" onClick={() => changeSlide(-1)}/>
      </div>
      <div className={`${styles.nav} ${styles.next}`}>
        <img src={arrow} alt="Próximo Slide" onClick={() => changeSlide(1)}/>
      </div>
      <Slide settings={slide}></Slide>
    </div>
  );
}
