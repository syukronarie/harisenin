import React, { useEffect, useState } from "react";

export default function FormUsingFunc() {
	const [name, setName] = useState("Taylor");
	const [age, setAge] = useState(20);
	const [showFormDisplay, setShowFormDisplay] = useState(true);

	useEffect(() => {
		console.log("initialize");
	}, []);

	useEffect(() => {
		console.log(name);
	}, [name]);

	function logit() {
		console.log(window.pageYOffset);
	}

	useEffect(() => {
		function watchScroll() {
			window.addEventListener("scroll", logit);
		}
		watchScroll();
		return () => {
			window.removeEventListener("scroll", logit);
		};
	}, []);

	return (
		<>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={() => setAge(age + 1)}>Increment age</button>

			<button onClick={() => setShowFormDisplay(!showFormDisplay)}>
				toggle form display
			</button>

			{showFormDisplay ? <FormDisplay name={name} age={age} /> : null}
		</>
	);
}

function FormDisplay({ name, age }) {
	return (
		<p>
			Hello, {name}. You are {age}.
		</p>
	);
}
