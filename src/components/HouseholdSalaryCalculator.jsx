import { useState } from "react";

import {
  CalcFamDeal,
  CalcPersonalTaxRelief,
  CalcTB,
  CalcTaxes,
  CalcSZJA,
  CapIncome,
  QualifiesForFreeSZJA,
} from "../data/functions";

import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";

const HandleInputs = () => {
  //DATA
  let taxes = 0;
  let id = 0;

  //Date
  const [date, setDate] = useState(new Date());
  const [eligibleForNewWeds, setEligibleForNewWeds] = useState(false);

  //Income
  let [grossIncome, setGrossIncome] = useState(0);
  let [netIncome, setNetIncome] = useState(0);

  //Booleans
  let [isSzja, setSzja] = useState(false);
  let [isSza, setSza] = useState(false);
  let [isNewWeds, setNewWeds] = useState(false);
  let [isCsk, setCsk] = useState(false);

  //Name, familymembers
  const [name, setName] = useState("");
  const [familyMembers, setFamilyMembers] = useState([]);

  //Dependents, beneficiary
  const [dependents, setDependets] = useState(0);
  const [beneficiary, setBeneficiary] = useState(0);

  //Event handlers
  const handleIncomeInput = (e) => {
    grossIncome = CapIncome(e.target.value);
    setGrossIncome(grossIncome);
    checkDiscounts();
  };

  const handleClick = (e) => {
    const multiplier = e.target.value / 100;
    const additionalIncome = parseInt(grossIncome * multiplier);
    grossIncome = parseInt(grossIncome) + additionalIncome;
    grossIncome = CapIncome(grossIncome);
    setGrossIncome(grossIncome);
    checkDiscounts();
  };

  const handleCheckBox = (e) => {
    switch (e.target.value) {
      case "szja":
        isSzja = !isSzja;
        setSzja(isSzja);
        break;
      case "newweds":
        isNewWeds = !isNewWeds;
        setNewWeds(isNewWeds);
        break;
      case "sza":
        isSza = !isSza;
        setSza(isSza);
        break;
      case "csk":
        isCsk = !isCsk;
        setCsk(isCsk);
        break;
      default:
        break;
    }
    checkDiscounts();
  };

  const handleSave = () => {
    const trimmedName = name.trim();
    if (trimmedName === "") return;

    id = id + 1;

    const defaultFamilyMember = {
      id: id,
      name: trimmedName,
      grossIncome: parseInt(grossIncome),
      netIncome: parseInt(netIncome),
      taxReliefUnder25: isSzja,
      personalTaxRelief: isSza,
      firstMarriageTaxRelief: isNewWeds,
      familyTaxRelief: isCsk,
    };

    const index = familyMembers.findIndex(
      (member) => member.name === trimmedName
    );

    const updatedMembers = [...familyMembers];
    if (index !== -1) {
      updatedMembers[index] = { ...defaultFamilyMember };
    } else {
      updatedMembers.push({ ...defaultFamilyMember });
    }

    setFamilyMembers(updatedMembers);
    clearInputs();
  };

  const handleClear = () => {
    clearInputs();
  };

  const handleDelete = () => {
    setFamilyMembers((prevMembers) =>
      prevMembers.filter((fmember) => fmember.name !== name)
    );
    clearInputs();
  };

  const selectRow = (e) => {
    if (
      e.target.className === "f-name" ||
      e.target.className === "link-to-member"
    ) {
      console.log(e.target.innerText);
      const selectedMemberName = e.target.innerText;
      familyMembers.map((member) => {
        if (member.name === selectedMemberName) {
          setName(member.name);
          setGrossIncome(member.grossIncome);
          setNetIncome(member.netIncome);
          setSzja(member.taxReliefUnder25);
          setNewWeds(member.firstMarriageTaxRelief);
          setSza(member.personalTaxRelief);
          setCsk(member.familyTaxRelief);
        }
      });
    }
  };

  //Helper functions
  const clearInputs = () => {
    setName("");
    setGrossIncome(0);
    setNetIncome(0);
    setSzja(false);
    setNewWeds(false);
    setSza(false);
    setCsk(false);
  };

  //Discount functions --------------------------------
  function checkDiscounts() {
    if (isSzja || isSza) {
      checkSzjaFree();
      checkPersonalTaxRelief();
    } else {
      taxes = CalcTaxes(grossIncome);
    }

    if (isCsk) taxes -= CalcFamDeal(dependents, beneficiary);
    if (isNewWeds) taxes -= checkNewWeddingDate();

    setNetIncome(grossIncome - taxes);
  }

  function checkSzjaFree() {
    if (isSzja) {
      taxes += CalcTB(grossIncome);
      if (!QualifiesForFreeSZJA(grossIncome)) {
        taxes += CalcSZJA(grossIncome);
      }
    }
  }

  function checkPersonalTaxRelief() {
    if (isSza) {
      taxes = CalcPersonalTaxRelief(grossIncome, isSzja);
    }
  }

  function checkNewWeddingDate() {
    const twentyFourMonthsAgo = new Date();
    twentyFourMonthsAgo.setMonth(twentyFourMonthsAgo.getMonth() - 24);

    const minusOneMonthAgo = new Date();
    minusOneMonthAgo.setMonth(minusOneMonthAgo.getMonth() - 1);

    const isWithin24Months =
      date >= twentyFourMonthsAgo && date <= minusOneMonthAgo;

    if (isWithin24Months) {
      setEligibleForNewWeds(true);
      return 5000;
    } else {
      setEligibleForNewWeds(false);
      return 0;
    }
  }

  return {
    name,
    setName,
    //inputs
    handleIncomeInput,
    handleClick,
    handleCheckBox,
    handleSave,
    handleDelete,
    handleClear,
    //money
    grossIncome,
    netIncome,
    //family
    familyMembers,
    selectRow,
    //family tax relief
    isCsk,
    dependents,
    setDependets,
    beneficiary,
    setBeneficiary,
    //new weds
    isNewWeds,
    setDate,
    eligibleForNewWeds,
    checkDiscounts,
    //checkboxes,
    isSza,
    isSzja,
  };
};

const HouseholdSalaryCalculator = () => {
  //Data
  let {
    name,
    setName,
    //inputs
    handleIncomeInput,
    handleClick,
    handleCheckBox,
    handleSave,
    handleDelete,
    handleClear,
    //money
    grossIncome,
    netIncome,
    //family
    familyMembers,
    selectRow,
    //family tax relief
    isCsk,
    dependents,
    setDependets,
    beneficiary,
    setBeneficiary,
    //new weds
    isNewWeds,
    setDate,
    eligibleForNewWeds,
    checkDiscounts,
    //checkboxes,
    isSza,
    isSzja,
  } = HandleInputs();

  return (
    <>
      <div className="layout">
        <SalaryCalculator
          name={name}
          setName={setName}
          //inputs
          handleIncomeInput={handleIncomeInput}
          onClick={handleClick}
          onCheck={handleCheckBox}
          onSave={handleSave}
          onDelete={handleDelete}
          onClear={handleClear}
          selectRow={selectRow}
          //money
          grossIncome={parseInt(grossIncome) ? parseInt(grossIncome) : 0} //to avoid NAN
          netIncome={parseInt(netIncome)}
          //family
          familyMembers={familyMembers}
          //family tax relief
          isCsk={isCsk}
          dependents={dependents}
          setDependents={setDependets}
          beneficiary={beneficiary}
          setBeneficiary={setBeneficiary}
          //new weds
          isNewWeds={isNewWeds}
          setDate={setDate}
          eligibleForNewWeds={eligibleForNewWeds}
          checkDiscounts={checkDiscounts}
          //checkboxes
          isSza={isSza}
          isSzja={isSzja}
        />
        <HouseholdSummary familyMembers={familyMembers} selectRow={selectRow} />
      </div>
    </>
  );
};

export default HouseholdSalaryCalculator;
