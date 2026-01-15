import PropTypes from "prop-types";

import { InputText } from "primereact/inputtext";
import { NAME_MAX_LENGTH } from "../../../data/data";

export const NameInput = ({ onChange, name }) => {
  //Validation
  NameInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  };

  return (
    <>
      <label htmlFor="name">Családtag neve</label>
      <InputText
        id="name"
        className="input-text"
        value={name}
        onChange={(e) => onChange(e)}
        maxLength={NAME_MAX_LENGTH}
      />
      <small className="smokey">
        Add meg a családtag nevét! (Max 9 karakter)
      </small>
    </>
  );
};
