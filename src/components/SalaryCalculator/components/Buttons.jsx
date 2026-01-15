import PropTypes from "prop-types";

export const Buttons = ({ buttons, onClick }) => {
  Buttons.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClick: PropTypes.func.isRequired,
  };

  return (
    <>
      {buttons.map(({ button, value }, i) => (
        <button
          key={i}
          className={
            value < 0 ? "percents-button red" : "percents-button green"
          }
          value={value}
          onClick={(e) => onClick(e)}
        >
          {button + "%"}
        </button>
      ))}
    </>
  );
};
