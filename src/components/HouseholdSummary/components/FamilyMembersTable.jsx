import { formatNumber } from "../../../data/functions";

/* eslint-disable react/prop-types */
export const FamilyMembersTable = ({ familyMembers, selectRow }) => {
  //Computed values
  let sumMoney = 0;
  familyMembers.map(
    (familyMember) => (sumMoney += parseInt(familyMember.netIncome))
  );

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>
              <b>Családtag neve</b>
            </td>
            <td>
              <b>Nettó bér:</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {familyMembers.map((familyMember, i) => (
            <tr key={i} onClick={selectRow}>
              <td className="f-name">{familyMember.name}</td>
              <td>{formatNumber(familyMember.netIncome)} Ft</td>
            </tr>
          ))}
          <tr>
            <td>Összesen:</td>
            <td>{formatNumber(sumMoney)} Ft</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
