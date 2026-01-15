/* eslint-disable react/prop-types */
const FamilyMemberTabs = ({ familyMembers, selectRow }) => {
  return (
    <>
      <div className="family-member-tabs">
        {familyMembers.length === 0 ? (
          <span>Név</span>
        ) : (
          familyMembers.map((n, index) => (
            <span key={index} onClick={selectRow} className="link-to-member">
              {n.name}
            </span>
          ))
        )}
      </div>
    </>
  );
};

export default FamilyMemberTabs;
