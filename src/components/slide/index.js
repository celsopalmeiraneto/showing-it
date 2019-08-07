import React from 'react';
import styles from './index.module.css';

export function Slide(props) {
  const settings = props.settings;
  return (
    <div className={styles.slide}>
      <h1>{settings.title}</h1>
      <div className={styles.body}>
        {settings.bullets && Bullets(settings.bullets)}
        {settings.text && Text(settings.text)}
        {settings.img && Image(settings.img)}
      </div>
    </div>
  );
}


function Bullets(bullets) {
  return (
    <ul className={styles.textualContent}>
      {bullets.map((bullet, i) => {
          return (
            <li key={i}>{bullet}</li>
          );
        })
      }
    </ul>
  );
}

function Text(text) {
  return (
    <div className={styles.textualContent}>{text}</div>
  );
}

function Image(img) {
  return (
    <div className={styles.imageContent}>
      <img src={img.src} alt={img.alt} />
    </div>
  );
}
