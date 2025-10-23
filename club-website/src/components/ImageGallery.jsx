import './ImageGallery.css';

function ImageGallery({ images, title }) {
  return (
    <div className="image-gallery">
      {title && <h3 className="gallery-title">{title}</h3>}
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt || `Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
