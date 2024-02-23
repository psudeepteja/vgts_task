import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./feature/slices/counterSlice";

function App() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleDec = () => {
    dispatch(decrement());
  };

  const handleInc = () => {
    dispatch(increment());
  };

  return (
    <div className="App">
      <button onClick={handleDec}> Dec</button>
      <span>{value}</span>
      <button onClick={handleInc}> inc</button>
    </div>
  );
}

export default App;
