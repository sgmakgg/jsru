export const Counter = ({ topic = null, outerValue = 0, addOuterValueCallBack = () => {} }) => {

  const orderCountUp = () => {
    if (outerValue < 5) addOuterValueCallBack(outerValue + 1);
  };

  const orderCountDown = (event) => {
    event.preventDefault();
    if (outerValue > 0) addOuterValueCallBack(outerValue - 1);
  };

  return (
    <>
      {topic !== null ? <label>{topic}</label> : null}
      <br />
      <input
        type="button"
        value={outerValue}
        onClick={orderCountUp}
        onContextMenu={orderCountDown}
      />
    </>
  );
};