import React from "react";

import Footer from "./Footer/Footer";
import LeftSidebar from "./Sidebar/LeftSidebar";
import Navbar from "./Navbar/Navbar";
import RightSidebar from "./Sidebar/RightSidebar";
import styles from "./index.module.css";

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<div className={styles.content}>
				<LeftSidebar />
				{children}

				<RightSidebar />
			</div>
			<Footer />
		</>
	);
}
