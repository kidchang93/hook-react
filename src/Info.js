import React, { useEffect, useState } from "react";

const Info = () => {
	const [name, setName] = useState("");
	useEffect(() => {
		// useEffect는 Didmount+Didupdate가 포함
		console.log("useEffect", { name });
		return () => {
			console.log("cleanup", { name });
		};
	}, [name]); // useEffect 마지막에 빈 배열 추가하면 마운트 상태까지만 표현 빈배열 말고 관찰하고 싶은 값 넣으면 실행이 된다.
	return (
		<div>
			<input type="text" onChange={(e) => setName(e.target.value)} />
			<br />
			name : {name}
		</div>
	);
};

export default Info;
