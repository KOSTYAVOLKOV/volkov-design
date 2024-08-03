// src/components/imagegallery/ImageGallery.js
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import styles from './ImageGallery.module.css'; // Импорт CSS модулей

const ImageGallery = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  
  const [{ x }, set] = useSpring(() => ({ x: 0 }));

  const bind = useGesture({
    onDrag: ({ down, movement: [mx], direction: [xDir], distance, cancel }) => {
      if (down && distance > window.innerWidth / 2) {
        cancel();
        setIndex(state => (state + (xDir > 0 ? -1 : 1) + images.length) % images.length);
      }
      set({ x: down ? mx : 0 });
    }
  });

  const toggleZoom = () => setZoom(!zoom);

  // Проверка наличия изображений
  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className={styles.galleryContainer}>
      <animated.div
        {...bind()}
        style={{ x }}
        className={`${styles.imageContainer} ${zoom ? styles.imageContainerZoom : ''}`}
        onClick={toggleZoom}
      >
        <img src={images[index]} alt={`Image ${index + 1}`} />
      </animated.div>
      <button
        className={`${styles.button} ${styles.nextButton}`}
        onClick={() => setIndex((index + 1) % images.length)}
      >
        Next
      </button>
      <button
        className={`${styles.button} ${styles.prevButton}`}
        onClick={() => setIndex((index - 1 + images.length) % images.length)}
      >
        Prev
      </button>
    </div>
  );
};

export default ImageGallery; 