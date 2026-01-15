import { CalcFamDeal } from "../../../data/functions";

/* eslint-disable react/prop-types */
export const Dependents = ({
  modDependents,
  dependents,
  modBeneficiary,
  beneficiary,
}) => {
  return (
    <>
      <div className={"csk-panel-container"}>
        <button
          className="plus-minus-button"
          onClick={(e) => modDependents(e)}
          value="-1"
        >
          -
        </button>
        <span className="dependents">{dependents}</span>
        <button
          className="plus-minus-button"
          onClick={(e) => modDependents(e)}
          value="1"
        >
          +
        </button>

        <span>Eltartott, ebből kedvezményezett: </span>

        <button
          className="plus-minus-button"
          onClick={(e) => modBeneficiary(e)}
          value="-1"
        >
          -
        </button>
        <span className="beneficiary">{beneficiary}</span>
        <button
          className="plus-minus-button"
          onClick={(e) => modBeneficiary(e)}
          value="1"
        >
          +
        </button>
        <span>+{CalcFamDeal(dependents, beneficiary)}</span>
      </div>
    </>
  );
};
