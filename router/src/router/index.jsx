import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/home";
import Login from "../pages/login";
import Notfound from "../pages/notfound";
import Profile from "../pages/profile";
import PrivateRoute from "./private-route";
import Unauthorized from "../pages/unauthorized";
import ProtectedRoute from "./protected-route";
import Layout from "../pages/layout";

export default function RootRouter() {
	return (
		<Routes>
			<Route path="/" element={<PrivateRoute />}>
				<Route path="/profile" element={<Profile />} />
			</Route>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/401" element={<Unauthorized />} />
			</Route>
			<Route path="/" element={<ProtectedRoute />}>
				<Route path="/login" element={<Login />}></Route>
			</Route>
			<Route path="*" element={<Notfound />} />
		</Routes>
	);
}
