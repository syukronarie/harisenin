import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ListProducts from "../components/list-products";

export default function Home() {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [category, setCategory] = useState("");

	// no dependency is only running in first render / mounting phase
	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => setProducts(data.products));

		fetch("https://dummyjson.com/products/categories")
			.then((res) => res.json())
			.then((data) => setCategories(data));

		console.log("useEffect");
	}, []);

	useLayoutEffect(() => {
		console.log("useLayoutEffect");
	}, []);

	// updating due to dependency changes / updating phase
	useEffect(() => {
		if (category) {
			setCategory(category);
			fetch(`https://dummyjson.com/products/category/${category}`)
				.then((res) => res.json())
				.then((data) => setProducts(data.products));
		}
	}, [category]);

	// unmounting
	useEffect(() => {
		return () => {
			setProducts([]);
			setCategories([]);
			setCategory("");
		};
	}, []);

	const handleChangeCategory = (e) => {
		setCategory(e.target.value);
	};

	return (
		<div style={{ paddingLeft: "10px" }}>
			<h1>Home page</h1>

			<select value={category} onChange={handleChangeCategory}>
				{categories.map((val) => (
					<option key={val} value={val}>
						{val}
					</option>
				))}
			</select>

			<ListProducts products={products} />

			<div>
				<Link to="/about">go to about page</Link>
			</div>
			<div>
				<Link to="/profile">go to profile page</Link>
			</div>
			<div>
				<Link to="/login">go to login page</Link>
			</div>
		</div>
	);
}
