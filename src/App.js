import React from "react";
import Counter from "./Counter";
import Info from "./Info";
import CounterReducer from "./CounterReducer";

const App = () => {
	return (
		<div>
			<Info />
			<Counter />
			<hr />
			<CounterReducer />
		</div>
	);
};

export default App;
