import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Products.module.css";

export default function Products(props) {
	const [product, setProduct] = useState();
	const [products, setProducts] = useState();
	const [categories, setCategories] = useState();
	const [category, setCategory] = useState("all");

	useEffect(() => {
		fetch("https://dummyjson.com/products/categories")
			.then((res) => res.json())
			.then((value) => setCategories(["all", ...value]));
	}, []);

	useEffect(() => {
		if (category !== "all") {
			fetch(`https://dummyjson.com/products/category/${category}`)
				.then((res) => res.json())
				.then(setProducts);
		} else {
			fetch("https://dummyjson.com/products")
				.then((res) => res.json())
				.then(setProducts);
		}
	}, [category]);

	const handleShowDetail = (id) => {
		fetch(`https://dummyjson.com/products/${id}`)
			.then((res) => res.json())
			.then(setProduct);
	};

	return (
		<>
			<h2>Our Products</h2>

			{categories && (
				<select
					name="category"
					id="category"
					defaultValue="all"
					onChange={(e) => setCategory(e.target.value)}
				>
					{categories.map((category) => (
						<option value={category} key={category}>
							{category}
						</option>
					))}
				</select>
			)}

			{products ? (
				<div className="products">
					{products.products.map((product) => (
						<div className="products_item" key={product.id}>
							<h3 onClick={() => handleShowDetail(product.id)}>
								{product.title}
							</h3>
							<p>{product.category}</p>
							<img src={product.thumbnail} alt={product.title} />
							<p>Price ${product.price}</p>
						</div>
					))}
				</div>
			) : (
				<p>Loading...</p>
			)}

			{product &&
				createPortal(
					<div className={styles.modal}>
						<button onClick={() => setProduct()}>close</button>
						<div className="products_item" key={product.id}>
							<h3 onClick={() => handleShowDetail(product.id)}>
								{product.title}
							</h3>
							<p>{product.category}</p>
							<p>{product.description}</p>
							<img src={product.thumbnail} alt={product.title} />
							<p>Price ${product.price}</p>
						</div>
					</div>,
					document.body
				)}
		</>
	);
}
