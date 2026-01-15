import { FamilyMembersTable } from "./components/FamilyMembersTable";

/* eslint-disable react/prop-types */
const HouseholdSummary = ({ familyMembers, selectRow }) => {
  return (
    <>
      <div className="household-summary">
        <h1 id="household-h1">Háztartás összesített jövedelme</h1>

        <div className="table-household">
          <FamilyMembersTable
            familyMembers={familyMembers}
            selectRow={selectRow}
          />
        </div>
      </div>
    </>
  );
};

export default HouseholdSummary;
