import React, {useEffect, useState} from 'react';
import {Presentation} from './Presentation.js';
import firebase from 'firebase';

export function FirebasePresentation(props) {
  const [presentation, setPresentation] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const presentationRef = firebase.database().ref(`presentations/${props.presentation}/slides`);
    presentationRef.once('value', (snap) => {
      setPresentation(snap.val());
    });
  });

  useEffect(() => {
    const presentationRef = firebase.database().ref(`presentations/${props.presentation}/host/currentSlide`);
    presentationRef.on('value', (snap) => {
      setSlideIndex(snap.val());
    });
    return () => {
      presentationRef.off();
    }
  });

  return (
    <Presentation presentation={presentation} slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
  );
}
