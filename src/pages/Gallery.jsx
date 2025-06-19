import React from 'react';
import './Gallery.css'; // custom styling

import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';
import img4 from '../Images/img4.jpg';
import img5 from '../Images/img5.jpg';
import img6 from '../Images/img6.jpg';
import img7 from '../Images/img7.jpg';
import img8 from '../Images/img8.jpg';
import img9 from '../Images/img9.jpg';
import img10 from '../Images/img10.jpg';
import img11 from '../Images/img11.jpg';
import img12 from '../Images/img12.jpg';
import img13 from '../Images/img13.jpg';
import img14 from '../Images/img14.jpg';
import img15 from '../Images/img15.jpg';
import img16 from '../Images/img16.jpg';
import img17 from '../Images/img17.jpg';
import img18 from '../Images/img18.jpg';
import img19 from '../Images/img19.jpg';
import img20 from '../Images/img20.jpg';

const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
  img16, img17, img18, img19, img20,
];

function Gallery() {
  return (
    <div className='gallery-wrapper'>
   <h2 className="gallery-title">✨ A Wall Full of Moments ✨</h2>

      <p className="gallery-subtitle">Hover over the memories to feel them again!</p>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Memory ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
