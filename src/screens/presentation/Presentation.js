import {Slide} from '../../components/slide';
import arrow from '../../assets/icons/arrow.svg';
import React, {useEffect, useState} from 'react';
import styles from './index.module.css';

export function Presentation(props) {
  const [slide, setSlide] = useState({});

  function changeSlide(pos){
    const idx = Number.parseInt(props.slideIndex);
    if (pos < 0 && props.slideIndex > 0) {
      props.setSlideIndex(idx - 1);
    }
    if (pos > 0 && idx + 1 < props.presentation.length) {
      props.setSlideIndex(idx + 1);
    }
  }

  function handleKeyUp(e) {
    if (e.key === 'ArrowLeft') return changeSlide(-1);
    if (e.key === 'ArrowRight') return changeSlide(1);
    return null;
  }

  useEffect(() => {
    if (props.presentation.length === 0) return;
    setSlide(props.presentation[props.slideIndex]);
  }, [props.slideIndex, props.presentation]);

  useEffect(() => {
    if (props.presentation.length === 0) return;
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
      {props.presentation.length > 0 && <Slide settings={slide}></Slide>}
    </div>
  );
}
