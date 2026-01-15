import { MAX_INCOME, MAX_INCOME_SZJA, SZA } from "./data";

//Helper function for a nicer look
export function formatNumber(number) {
  return number.toLocaleString("en-US").replace(/,/g, ".");
}

//Checking gross income
export function CapIncome(income) {
  return income > MAX_INCOME ? MAX_INCOME : income;
}

//Calculating taxes
export function CalcTaxes(income) {
  return income * 0.335;
}

export function CalcTB(income) {
  return income * 0.185;
}

export function CalcSZJA(income) {
  if (!QualifiesForFreeSZJA(income)) {
    let taxable = income - MAX_INCOME_SZJA;
    return taxable * 0.15;
  }
  return income * 0.15;
}

//Checks if the person is eligible for free szja
export function QualifiesForFreeSZJA(income) {
  return income <= MAX_INCOME_SZJA;
}

export function CalcPersonalTaxRelief(income, isSzja) {
  let taxes = 0;

  if (isSzja) {
    taxes += CalcTB(income);

    if (!QualifiesForFreeSZJA(income)) {
      taxes += CalcSZJA(income);
    }
  } else {
    taxes += CalcTaxes(income);
  }

  return Math.max(taxes - SZA, 0); // Returns the maximum of 0 and the difference between taxes and SZA
}

//Checks family deals
export function CalcFamDeal(dependents, beneficiary) {
  return parseInt(countBeneficiary(dependents, beneficiary))
    ? countBeneficiary(dependents, beneficiary)
    : 0;
}

function countBeneficiary(dependents, beneficiary) {
  if (beneficiary === 1) return dependents * 10000;
  if (beneficiary === 2) return dependents * 20000;
  if (beneficiary === 3) return dependents * 33000;
}
