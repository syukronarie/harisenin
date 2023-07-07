import React from "react";
import { Link, useParams } from "react-router-dom";

export default function About() {
	const params = useParams();

	console.log(params);

	return (
		<div>
			<h1>About page</h1>
			<Link to="/">home</Link>
		</div>
	);
}
