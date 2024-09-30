import useCounter from "./useCounter";

export const Counter = ({ topic = null, outerValue = null, addOuterValueCallBack = null }) => {
  const { order, increment, decrement } = useCounter();

const orderCountUp = () => {
  if (outerValue === null && order < 5) increment();
  if (addOuterValueCallBack && outerValue < 5) addOuterValueCallBack(outerValue + 1);
};

const orderCountDown = (event) => {
  event.preventDefault();
  if (outerValue === null && order > 0) decrement();
  if (addOuterValueCallBack && outerValue > 0) addOuterValueCallBack(outerValue - 1);
};

  return (
    <>
      {topic !== null ? <label>{topic}</label> : null}
      <br />
      <input
        type="button"
        value={outerValue ?? order}
        onClick={orderCountUp}
        onContextMenu={orderCountDown}
      />
    </>
  );
};