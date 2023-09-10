import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Auth from "../utils/helpers/auth";

export default function Layout() {
	const navigate = useNavigate();

	const handleLogout = () => {
		Auth.logout(navigate);
	};

	return (
		<div>
			<header>this is a header</header>
			<nav>
				this is a navbar
				{Auth.authenticated() && <button onClick={handleLogout}>logout</button>}
			</nav>
			<main>
				<Outlet />
			</main>
		</div>
	);
}
