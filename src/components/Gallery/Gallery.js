import React from 'react';
import './Gallery.css';
import GalleryEl from '../GalleryEl/GalleryEl';

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      portfolio: [
        {
          name: 'djsjd',
          desc: 'jakis opis',
          img: 'jakis adres',
          url: 'jakis url'
        },
        {
          name: 'djsjd',
          desc: 'jakis opis',
          img: 'jakis adres',
          url: 'jakis url'
        },
        {
          name: 'djsjd',
          desc: 'jakis opis',
          img: 'jakis adres',
          url: 'jakis url'
        },
        {
          name: 'djsjd',
          desc: 'jakis opis',
          img: 'jakis adres',
          url: 'jakis url'
        },
        {
          name: 'djsjd',
          desc: 'jakis opis',
          img: 'jakis adres',
          url: 'jakis url'
        },
        {
          name: 'djsjdfuck',
          desc: 'jakis opis',
          url: 'jakis url'
        },
        {
          name: 'djsjakaa',
          desc: 'jakis opis',
          img: 'jakis adres',
          url: 'jakis url'
        }
      ]
    };
  }
  render() {
    return (
      <div className="gallery">
        {this.state.portfolio.map((el, id) => {
          return (
            <GalleryEl
              key={id}
              name={el.name}
              desc={el.desc}
              img={el.img ? el.img : 'domyslny obrazek'}
              url={el.url}
            />
          );
        })}
      </div>
    );
  }
}

export default Gallery;
