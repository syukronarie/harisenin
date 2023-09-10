import React from "react";
import { Link } from "react-router-dom";

export default function Unauthorized() {
	return (
		<div>
			<h1>401 - Unauthorized</h1>
			<Link to="/">Bring me to home</Link>
		</div>
	);
}
