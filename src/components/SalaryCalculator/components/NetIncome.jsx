import PropTypes from "prop-types";

import { formatNumber } from "../../../data/functions";

export const NetIncome = ({ netIncome }) => {
  //Validation
  NetIncome.propTypes = {
    netIncome: PropTypes.number.isRequired,
  };

  return (
    <>
      <p>Számított nettó bér:</p>
      <div>
        <span className="net-income">{formatNumber(netIncome)} Ft</span>
      </div>
    </>
  );
};
