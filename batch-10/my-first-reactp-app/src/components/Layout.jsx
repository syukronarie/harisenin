/* eslint-disable react/prop-types */
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
	const [theme, setTheme] = useState("light");

	const classTheme = theme === "light" ? "light" : "dark";

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	return (
		<div className={classTheme}>
			<button onClick={toggleTheme}>Toggle Theme</button>
			<Header />
			<main>{props.children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
