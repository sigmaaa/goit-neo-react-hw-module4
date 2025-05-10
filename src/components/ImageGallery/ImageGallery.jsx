import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ imageData, onImageClick }) => {
  return (
    <ul>
      {imageData.map(({ id, alt_description, urls }) => (
        <li key={id}>
          <ImageCard
            imgModalSource={urls.regular}
            imgSource={urls.small}
            imgAlt={alt_description}
            onImageClick={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
