const ImageCard = ({ imgModalSource, imgSource, imgAlt, onImageClick }) => {
  return (
    <div>
      <img
        src={imgSource}
        alt={imgAlt}
        onClick={() => onImageClick(imgModalSource)}
      ></img>
    </div>
  );
};

export default ImageCard;
