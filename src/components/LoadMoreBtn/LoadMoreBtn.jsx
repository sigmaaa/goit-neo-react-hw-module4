import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onLoad }) => {
  return (
    <div className={css.loadField}>
      <button onClick={onLoad} className={css.loadBtn}>
        Load More...
      </button>
    </div>
  );
};

export default LoadMoreBtn;
