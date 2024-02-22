import React, { useReducer } from "react";
function reducer(state, action) {
	switch (action.type) {
		case "INC":
			return { count: state.count + 1 };
		case "DEC":
			const nextCount = state.count - 1;
			return { count: nextCount < 0 ? 0 : nextCount };
		default:
			return state;
	}
}
const CounterReducer = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0 });
	return (
		<div>
			<p>count : {state.count}</p>
			<button onClick={() => dispatch({ type: "INC" })}>+1</button>
			<button onClick={() => dispatch({ type: "DEC" })}>-1</button>
		</div>
	);
};

export default CounterReducer;
