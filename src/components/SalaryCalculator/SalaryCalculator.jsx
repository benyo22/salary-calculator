/* eslint-disable react/prop-types */
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";

import { Button } from "primereact/button";
import { NameInput } from "./components/NameInput";
import { GrossIncomeInput } from "./components/GrossIncomeInput";
import { Buttons } from "./components/Buttons";
import { NetIncome } from "./components/NetIncome";
import { Slider } from "./components/Slider";
import { Checkboxes } from "./components/Checkboxes";

import { buttonText } from "../../data/data";
import FamilyMemberTabs from "../FamilyMemberTabs/FamilyMemberTabs";

const SalaryCalculator = ({
  name,
  setName,
  //inputs
  handleIncomeInput,
  onClick,
  onCheck,
  onSave,
  onDelete,
  onClear,
  selectRow,
  //money
  grossIncome,
  netIncome,
  //family
  familyMembers,
  //family tax relief
  isCsk,
  dependents,
  setDependents,
  beneficiary,
  setBeneficiary,
  //new weds
  isNewWeds,
  setDate,
  eligibleForNewWeds,
  checkDiscounts,
  //checkboxes
  isSza,
  isSzja,
}) => {
  //Event handlers
  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  //Computed values
  const buttons = buttonText.split(";").map((button) => ({
    button,
    value: parseInt(button),
  }));

  return (
    <>
      <div className="salary-calculator">
        <FamilyMemberTabs familyMembers={familyMembers} selectRow={selectRow} />

        <h1>{name === "" ? "Név" : name} bérének kiszámítása</h1>
        <div className="inputs-container">
          <NameInput onChange={handleNameInput} name={name} />
          <GrossIncomeInput
            onChange={handleIncomeInput}
            grossIncome={grossIncome}
          />
        </div>

        <div className="save-delete-clear">
          <Button
            icon="pi pi-check"
            // label="Save"
            severity="success"
            onClick={onSave}
          />
          <Button
            icon="pi pi-delete-left"
            // label="Clear"
            severity="secondary"
            className="mg-top"
            onClick={onClear}
          />
          <Button
            icon="pi pi-trash"
            // label="Delete"
            severity="danger"
            className="mg-top"
            onClick={onDelete}
          />
        </div>

        <div className="slider-container">
          <Slider onChange={handleIncomeInput} value={grossIncome} />
        </div>
        <div className="buttons-container">
          <Buttons buttons={buttons} onClick={onClick} />
        </div>
        <div className="discounts-container">
          <h2>Kedvezmények</h2>
          <Checkboxes
            onChange={onCheck}
            isCsk={isCsk}
            dependents={dependents}
            setDependents={setDependents}
            beneficiary={beneficiary}
            setBeneficiary={setBeneficiary}
            isNewWeds={isNewWeds}
            setDate={setDate}
            eligibleForNewWeds={eligibleForNewWeds}
            checkDiscounts={checkDiscounts}
            isSza={isSza}
            isSzja={isSzja}
          />
        </div>
        <div className="netto-ber">
          <NetIncome netIncome={netIncome} />
        </div>
      </div>
    </>
  );
};

export default SalaryCalculator;
