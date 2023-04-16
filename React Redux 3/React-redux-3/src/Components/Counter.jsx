import { useSelector, useDispatch } from "react-redux";
import { addAction, reduceAction } from "../redux/Counter/action";

let Counter = () => {
  const data = useSelector((store) => store.counterReducer.counter);
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(addAction(1));
  };

  const handleDec = () => {
    dispatch(reduceAction(1));
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h1>Counter : {data}</h1>
      <button onClick={handleInc}>Inc</button>
      <button disabled={data == 0} onClick={handleDec}>
        Dec
      </button>
    </div>
  );
};

export default Counter;