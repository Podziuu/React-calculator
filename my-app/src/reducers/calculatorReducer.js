const initialState = { score: "0", operation: null, prevNum: null };

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case "addDigit":
      if (state.score === "0" && action.number === "0") return state;
      if (state.score === "0" && action.number === ".") {
        return { ...state, score: "0." };
      }
      if (state.score === "0") {
        return { ...state, score: action.number };
      }

      if (state.score.includes(".") && action.number === ".") return state;
      return { ...state, score: state.score + action.number };
    case "addOperation":
      if (state.operation === null) {
        return {
          ...state,
          operation: action.operation,
          prevNum: state.score,
          score: "0",
        };
      }
      return state;
    case "equal":
      if (state.operation === null) return state;
      if (state.operation === "+") {
        return {
          ...state,
          score: (+state.prevNum + +state.score).toString(),
          operation: null,
          prevNum: null,
        };
      }
      if (state.operation === "-") {
        return {
          ...state,
          score: (+state.prevNum - +state.score).toString(),
          operation: null,
          prevNum: null,
        };
      }
      if (state.operation === "*") {
        return {
          ...state,
          score: (+state.prevNum * +state.score).toString(),
          operation: null,
          prevNum: null,
        };
      }
      if (state.operation === "/") {
        return {
          ...state,
          score: (+state.prevNum / +state.score).toString(),
          operation: null,
          prevNum: null,
        };
      }
    case "allClear": {
      return initialState;
    }
    case "delete": {
      if (state.score.length === 1) {
        return { ...state, score: "0" };
      } else {
        return {
          ...state,
          score: state.score.slice(0, state.score.length - 1),
        };
      }
    }
    default:
      throw new Error();
  }
};

export default calculatorReducer