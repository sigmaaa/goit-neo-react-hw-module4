import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value;
    if (query.trim() === "") {
      notifyAboutEmptySubmit();
      form.elements.query.focus();
    } else {
      onSubmit(query);
    }
  };

  const notifyAboutEmptySubmit = () =>
    toast.error("What are you looking for? Start typing!");

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          name="query"
          className={css.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={() => toast.dismiss()}
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
