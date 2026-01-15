import { Dependents } from "./Dependents";
import { NewWeds } from "./NewWeds";

/* eslint-disable react/prop-types */
export const Checkboxes = ({
  onChange,
  isCsk,
  dependents,
  setDependents,
  beneficiary,
  setBeneficiary,
  isSzja,
  isNewWeds,
  isSza,
  setDate,
  eligibleForNewWeds,
  checkDiscounts,
}) => {
  function modDependents(e) {
    let value = parseInt(e.target.value);
    if ((dependents === 0 || dependents === beneficiary) && value < 0) return;
    setDependents(dependents + value);
  }

  function modBeneficiary(e) {
    let value = parseInt(e.target.value);
    if (
      (beneficiary === 0 && value < 0) ||
      ((beneficiary === dependents || beneficiary === 3) && value > 0)
    )
      return;
    setBeneficiary(beneficiary + value);
  }

  return (
    <>
      <div>
        <label className="switch" htmlFor="szja">
          <input
            type="checkbox"
            id="szja"
            name="szja"
            value="szja"
            checked={isSzja}
            onChange={(e) => onChange(e)}
          />
          <div className="checkbox round"></div>
        </label>
        <p>25 év alattiak SZJA mentessége</p>
      </div>

      <div>
        <label className="switch" htmlFor="newweds">
          <input
            type="checkbox"
            id="newweds"
            name="newweds"
            value="newweds"
            checked={isNewWeds}
            onChange={(e) => onChange(e)}
          />
          <div className="checkbox round"></div>
        </label>
        <p>Friss házasok kedvezménye</p>
      </div>
      {isNewWeds && (
        <NewWeds
          setDate={setDate}
          eligibleForNewWeds={eligibleForNewWeds}
          checkDiscounts={checkDiscounts}
        />
      )}

      <div>
        <label className="switch" htmlFor="sza">
          <input
            type="checkbox"
            id="sza"
            name="sza"
            value="sza"
            checked={isSza}
            onChange={(e) => onChange(e)}
          />
          <div className="checkbox round"></div>
        </label>
        <p>Személyi adókedvezmény</p>
      </div>

      <div>
        <label className="switch" htmlFor="csk">
          <input
            type="checkbox"
            id="csk"
            name="csk"
            value="csk"
            checked={isCsk}
            onChange={(e) => onChange(e)}
          />
          <div className="checkbox round"></div>
        </label>
        <p>Családi kedvezmény</p>
      </div>

      {isCsk && (
        <Dependents
          modDependents={modDependents}
          dependents={dependents}
          modBeneficiary={modBeneficiary}
          beneficiary={beneficiary}
        />
      )}
    </>
  );
};
