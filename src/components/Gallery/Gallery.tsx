import React, {useState, FunctionComponent, MouseEvent} from 'react';

import './gallery.css';

interface Props {
  images: string[];
  isExtended: boolean;
}

export const Gallery: FunctionComponent<Props> = ({
  images,
  isExtended = false
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleBack = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNext = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div className={`photo-gallery ${isExtended ? 'extended' : ''}`}>
      <img src={images[currentImageIndex]} alt="Colon" style={{width:'20em', height:"20em"}} />

      <div className="gallery-navigation">
        <div className="nav-buttons">
          <button onClick={handleBack} disabled={currentImageIndex === 0} style={{borderColor:"none", boxSizing:"unset"}}>
          <svg fill="#000000" width="2vw" height="2vh" viewBox="0 0 24 24" id="previous"
             data-name="Line Color" xmlns="http://www.w3.org/2000/svg">
              <path id="primary" d="M17,3V21L5,12Z" 
              fill="none" style={{stroke:"#000000"}} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
          </button>
          <button
            onClick={handleNext}
            disabled={currentImageIndex === images.length - 1}>
              <svg fill="#000000" width="2vw" height="2vh" viewBox="0 0 24 24" id="next"
           data-name="Line Color" xmlns="http://www.w3.org/2000/svg" >
            <path id="primary" d="M17,12,5,21V3Z" fill="none" stroke="rgb(0, 0, 0)" stroke-linecap="round"
             stroke-linejoin="round" stroke-width="2"></path></svg>
          </button>
        </div>
        <div className="indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentImageIndex ? 'active' : ''}`}></span>
          ))}
        </div>
      </div>
    </div>
  );
};