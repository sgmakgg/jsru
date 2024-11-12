const Dish = ({ dish }) => {
  return (
    <li>
      <h3>{dish?.name}</h3>
    </li>
  );
};

export default Dish;
