import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ setFilter }) => {
  const handleChange = (e) => setFilter(e.target.value);
  const searchBoxId = useId();
  return (
    <div className={css.searchContainer}>
      <label className={css.searchLabel} htmlFor={`searchbox${searchBoxId}`}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="searchBox"
        id={`searchbox${searchBoxId}`}
        className={css.searchBar}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
