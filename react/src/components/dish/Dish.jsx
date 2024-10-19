import {
  menuSelectors,
  selectRequestStatus,
} from "../../redux/entities/menu/menuSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GET_dishById } from "../../redux/entities/menu/requests/GET_dishById.js";
import { IDLE, PENDING, REJECTED } from "../../request.constants.js";

const Dish = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_dishById(id));
  }, [dispatch, id]);

  const dish = useSelector((state) => menuSelectors.selectById(state, id));
  const requestStatus = useSelector(selectRequestStatus);

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return <div>Loading...</div>;
  }

  if (requestStatus === REJECTED) {
    return <div>Failed to load data</div>;
  }

  return (
    <li>
      <h3>{dish.name}</h3>
    </li>
  );
};

export default Dish;
