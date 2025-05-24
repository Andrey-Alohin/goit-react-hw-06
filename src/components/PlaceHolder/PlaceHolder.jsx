import css from "./PlaceHolder.module.css";

const PlaceHolder = ({ visible, all }) => {
  return (
    <div className={css.placeHolderContainer}>
      <h2 className={css.placeHolderText}>
        {(visible.length === 0 && all.length > 0 && "No match") ||
          (all.length === 0 && "No contacts. Please add!")}
      </h2>
    </div>
  );
};

export default PlaceHolder;
