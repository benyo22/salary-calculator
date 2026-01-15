import PropTypes from "prop-types";

import { MAX_INCOME } from "../../../data/data";

export const Slider = ({ onChange, value }) => {
  //Validation
  Slider.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
  };

  return (
    <>
      <input
        type="range"
        id="range"
        className="slider"
        min="0"
        max={MAX_INCOME}
        value={value}
        step="10000"
        onChange={(e) => onChange(e)}
      />
    </>
  );
};
