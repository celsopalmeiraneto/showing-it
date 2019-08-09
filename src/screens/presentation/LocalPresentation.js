import {Presentation} from './Presentation.js';
import {navigate} from "@reach/router";
import React, {useEffect, useState} from 'react';

async function getPresentation(name) {
  const res = await fetch(`${process.env.PUBLIC_URL}/presentations/${name}.json`);
  return await res.json();
}

export function LocalPresentation(props) {
  const [presentation, setPresentation] = useState([]);

  useEffect(() => {
    if (presentation.length !== 0) return;
    getPresentation(props.presentation)
        .then((p) => {
          setPresentation(p.slides);
        })
        .catch((e) => console.error(e));
  });

  function navigateTo(slide) {
    navigate(`/presentation/local/${props.presentation}/${slide}`);
  }

  return (
    <div>
      {presentation.length > 0 &&
        <Presentation presentation={presentation} slideIndex={props.slideIndex} setSlideIndex={navigateTo}/>
      }
    </div>
  );
}
