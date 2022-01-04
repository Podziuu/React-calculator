import { useReducer } from "react";

import CalculatorDigits from "./components/CalculatorDigits";
import ScoreDisplay from "./components/ScoreDisplay";
import calculatorReducer from "./reducers/calculatorReducer";

const initialState = { score: "0", operation: null, prevNum: null };

function App() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const digitClickHandler = (e) => {
    dispatch({ type: "addDigit", number: e.target.outerText });
  };

  const operationClickHandler = (e) => {
    let operation;
    if (e.target.outerText === "÷") {
      operation = "/";
    } else {
      operation = e.target.outerText;
    }
    dispatch({ type: "addOperation", operation: operation });
  };

  const equalClickHandler = () => {
    dispatch({ type: "equal" });
  };

  const allClearClickHandler = () => {
    dispatch({ type: "allClear" });
  };

  const deleteClickHandler = () => {
    dispatch({ type: "delete" });
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen w-screen flex justify-center items-center">
      <div className="w-72 h-96 border-4 box-content">
        <ScoreDisplay score={state.score} />
        <CalculatorDigits
          delete={deleteClickHandler}
          allClear={allClearClickHandler}
          equals={equalClickHandler}
          addOperation={operationClickHandler}
          addDigit={digitClickHandler}
        />
      </div>
    </div>
  );
}

export default App;
