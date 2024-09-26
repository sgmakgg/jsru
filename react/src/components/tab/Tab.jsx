export const Tab = ({ name, onTabClick, currentTab }) => {
  return (
    <button onClick={onTabClick} disabled={currentTab}>
     {name}
    </button>)
};