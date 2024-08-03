// src/components/imagegallery/index.jsx
import React from 'react';
import ImageGallery from './ImageGallery';

const ImageGalleryComponent = () => {
  const images = [
    '/Users/volkov/Documents/volkov-design-site/public/assets/img/1x/Artboard 9-100.jpg',
    'public/assets/img/1x/Artboard 10-100.jpg',
    '/Users/volkov/Documents/volkov-design-site/public/assets/img/pat1.png'
  ];

  return (
    <div>
      <h1>Image Gallery</h1>
      <ImageGallery images={images} />
    </div>
  );
};

export default ImageGalleryComponent;