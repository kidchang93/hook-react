import React, { useMemo, useState } from "react";
const getAverage = (numbers) => {
	console.log("평균 계산중...");
	if (numbers.length == 0) return 0;
	const sum = numbers.reduce((a, b) => a + b); // {1,2,3,4} 1+2 > a로 들어가고 3+3 > a로 들어가고 6+4 이렇게 계산되는게 reduce
	return sum / numbers.length;
};

const Average = () => {
	const [list, setList] = useState([]);
	const [number, setNumber] = useState("");
	const onClick = () => {
		setList(list.concat(parseInt(number)));
		setNumber("");
	};
	// 연산식이 있다면? 메모에 등록해서 쓴다. ( 과부하 방지 , 최적화 )
	const avg = useMemo(() => getAverage(list), [list]);
	return (
		<div>
			<input
				name="number"
				value={number}
				onChange={(e) => setNumber(e.target.value)}
			/>
			<button onClick={onClick}>등록</button> number:{number}
			<br />
			<ul>
				{list.map((value, index) => (
					<li key={index}>{value}</li>
				))}
			</ul>
			평균 : {avg}
		</div>
	);
};

export default Average;
