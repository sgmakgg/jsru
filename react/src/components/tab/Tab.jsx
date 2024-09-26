export const Tab = ({ totalTabs, onTabClick, currentTab }) => {

  const handleTabClick = (tab) => {
    onTabClick(tab);
  };

  return (
    <div>
      <button onClick={() => handleTabClick(currentTab - 1)} disabled={currentTab === 1}>
        Previous
      </button>
      {[...Array(totalTabs)].map((_, index) => {
        const tab = index + 1;
        return (
            <button key={tab} onClick={() => handleTabClick(tab)} disabled={currentTab === tab}>
             {tab}
            </button>
            );
      })}
      <button onClick={() => handleTabClick(currentTab + 1)} disabled={currentTab === totalTabs}>
        Next
      </button>
    </div>
  );
};