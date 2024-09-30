import { useState } from "react";

export const Counter = ({topic = null, outerValue = null, addOuterValueCallBack = null }) => {
  const [order, setOrder] = useState(0);

  const orderCountUp = () =>{
      if (outerValue === null && order < 5){
          setOrder(order + 1);
      }

      if(addOuterValueCallBack !== null && outerValue < 5 ){
          addOuterValueCallBack(outerValue + 1);
      }
  }
  const orderCountDown = (event) => {
    event.preventDefault();
    if(outerValue === null && order > 0) {
        setOrder(order - 1);
    }

    if (addOuterValueCallBack !== null && outerValue > 0  ){
        addOuterValueCallBack(outerValue - 1)
    }
  };

  return (
      <>
          {
              topic !== null ?
              <label>
                {topic}
              </label> : null
          }
          <br/>
          <input
              type="button"
            value={outerValue ?? order}
            onClick={orderCountUp}
            onContextMenu={orderCountDown}
        />
      </>
  );
};