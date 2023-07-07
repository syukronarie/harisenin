import React from "react";
import Auth from "../utils/helpers/auth";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../pages/layout";

export default function ProtectedRoute() {
	if (!Auth.authenticated()) {
		return (
			<Layout>
				<Outlet />;
			</Layout>
		);
	}

	return <Navigate to="/" />;
}
