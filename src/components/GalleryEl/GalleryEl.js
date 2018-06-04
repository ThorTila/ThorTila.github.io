import React from 'react';

const GalleryEl = props => (
  <div className="gallery-el">
    <a href={props.url}>
      <img src={props.img} alt={props.name} />
      <div className="caption">
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
      </div>
    </a>
  </div>
);

export default GalleryEl;
