import { useState, useRef } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import fetchImagesFromQuery from "../../api";
import { GridLoader } from "react-spinners";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const queryRef = useRef("");
  const pageCountRef = useRef(1);
  const [selectedImage, setSelectedImage] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const loadImages = async (searchQuery, pageNumber, append = false) => {
    try {
      setLoading(true);
      setError(false);
      const data = await fetchImagesFromQuery(searchQuery, pageNumber);
      setImages((prev) => (append ? [...prev, ...data] : data));
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchQuery) => {
    pageCountRef.current = 1;
    queryRef.current = searchQuery;
    loadImages(searchQuery, pageCountRef.current, false);
  };

  const handleLoadMore = () => {
    pageCountRef.current += 1;
    loadImages(queryRef.current, pageCountRef.current, true);
  };

  const handleImageClick = (imgUrl) => {
    setSelectedImage(imgUrl);
    setIsOpen(true);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && !error && (
        <ImageGallery imageData={images} onImageClick={handleImageClick} />
      )}
      {images.length > 0 && !loading && <LoadMoreBtn onLoad={handleLoadMore} />}
      {selectedImage && (
        <ImageModal
          imgSource={selectedImage}
          isOpen={modalIsOpen}
          onClose={() => setSelectedImage("")}
        />
      )}
      {loading && <GridLoader />}
    </div>
  );
}

export default App;
