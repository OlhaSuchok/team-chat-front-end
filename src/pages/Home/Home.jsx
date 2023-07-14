import { useSelector, useDispatch } from "react-redux";
import { selectMessage } from "../../redux/message/selectors";

import { increment, decrement } from "../../redux/message/slice";
import {} from "./Home.styled";

export default function Home() {
  const dispatch = useDispatch();
  const value = useSelector(selectMessage);
  console.log("value", value);

  return (
    <div>
      <h1>Home page</h1>
      <p>Value: {value}</p>
      <button onClick={() => dispatch(increment(100))}>increment</button>
      <button onClick={() => dispatch(decrement(100))}>decrement</button>
    </div>
  );
}
