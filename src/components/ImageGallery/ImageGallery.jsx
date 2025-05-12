import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
const ImageGallery = ({ imageData, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {imageData.map(({ id, alt_description, urls }) => (
        <li key={id} className={css.galleryItem}>
          <ImageCard
            imgModalSource={urls.regular}
            imgSource={urls.raw + "&fit=crop&w=400&h=400"}
            imgAlt={alt_description}
            onImageClick={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
