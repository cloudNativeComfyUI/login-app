import React, { useState, useEffect, Suspense } from 'react';
import img1 from '../../images/img1.jpg'; 
import img2 from '../../images/img2.jpg'; 
import img3 from '../../images/img3.jpg'; 
import img4 from '../../images/img4.jpg'; 
import img5 from '../../images/img5.jpg'; 
import img6 from '../../images/img6.jpg'; 
import img7 from '../../images/img7.jpg'; 
import img8 from '../../images/img8.jpg'; 

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{ width: '50%', height: 'auto', opacity: '60%' }}
        />
      </Suspense>
    </div>
  );
};

export default Slideshow;
