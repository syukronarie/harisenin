import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Notfound from "../pages/notfound";

export default function RootRouter() {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<Home />} />
				<Route path="/about" element={<About />} />
			</Route>
			<Route path="*" element={<Notfound />} />
		</Routes>
	);
}
