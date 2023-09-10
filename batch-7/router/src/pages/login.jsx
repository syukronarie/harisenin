import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const userData = Object.entries(formData);
		Cookies.set("token", btoa(userData.email));
		navigate("/profile");
	};

	return (
		<div>
			<h1>Login page</h1>
			<form method="post" onSubmit={handleSubmit}>
				<input type="email" name="email" id="email" />
				<input type="password" name="password" id="password" />
				<button type="submit">login</button>
			</form>
		</div>
	);
}
