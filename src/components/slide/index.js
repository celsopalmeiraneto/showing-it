import React from 'react';
import styles from './index.module.css';

export function Slide(props) {
  const settings = props.settings;
  return (
    <div className={styles.slide}>
      {settings.cover && <Cover title={settings.title} subtitle={settings.subtitle} img={settings.img}/>}
      {!settings.cover && <Content settings={settings}/>}
    </div>
  );
}

function Cover({title, subtitle, img = {}}) {
  return (
    <div className={styles.cover}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <img src={img.src} alt={img.alt}/>
    </div>
  );
}

function Content({settings}) {
  return (
    <div>
      <h1>{settings.title}</h1>
      <div className={styles.body}>
        {settings.bullets && Bullets(settings.bullets)}
        {settings.text && Text(settings.text)}
        {settings.imgs && Images(settings.imgs)}
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

function Images(imgs) {
  return (
    <div className={styles.gallery}>
      {imgs.map((img, i) => {
        return (
          <div key={i} className={styles.imageContent}>
            <img src={img.src} alt={img.alt} />
          </div>
        );
      })}
    </div>
  );
}
