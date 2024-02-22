import React from "react";
import Counter from "./Counter";
import Info from "./Info";
import CounterReducer from "./CounterReducer";
import Average from "./Average";

const App = () => {
	return (
		<div>
			<Info />
			<Counter />
			<hr />
			<CounterReducer />
			<hr />
			<Average />
		</div>
	);
};

export default App;
