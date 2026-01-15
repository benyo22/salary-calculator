import PropTypes from "prop-types";

import { InputText } from "primereact/inputtext";
import { INCOME_INPUT_MAX_LENGTH } from "../../../data/data";

export const GrossIncomeInput = ({ onChange, grossIncome }) => {
  //Validation
  GrossIncomeInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    grossIncome: PropTypes.number.isRequired,
  };

  return (
    <>
      <label htmlFor="grossincome">Bruttó bér</label>
      <InputText
        id="grossincome"
        className="gross-income"
        keyfilter="int"
        onChange={(e) => onChange(e)}
        value={grossIncome}
        maxLength={INCOME_INPUT_MAX_LENGTH}
      />
      <small className="smokey">
        Add meg a bruttó béredet! (0-10.000.000 Ft)
      </small>
    </>
  );
};
