import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Auth from "../utils/helpers/auth";
import Layout from "../pages/layout";

export default function PrivateRoute() {
	if (Auth.authenticated()) {
		return (
			<Layout>
				<Outlet />
			</Layout>
		);
	}

	return <Navigate to="/401" />;
}
