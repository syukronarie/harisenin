/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Products.module.css";

const Product = ({ product, handleShowDetail }) => {
	// useEffect(() => {
	// 	console.log("this is an affect function");

	// 	return () => {
	// 		console.log("this is a cleanup function");
	// 	};
	// }, []);

	return (
		<div className="products_item" key={product.id}>
			<h3 onClick={() => handleShowDetail(product.id)}>{product.title}</h3>
			<p>{product.category}</p>
			<img src={product.thumbnail} alt={product.title} />
			<p>Price ${product.price}</p>
		</div>
	);
};

export default function Products() {
	const [product, setProduct] = useState();
	const [products, setProducts] = useState();
	const [categories, setCategories] = useState();
	const [category, setCategory] = useState("all");
	const [isShowProducts, setIsShowProducts] = useState(true);

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

	const toggleShowProducts = () => {
		setIsShowProducts(!isShowProducts);
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

			<button onClick={toggleShowProducts}>
				{isShowProducts ? "Hide Products" : "Show Products"}
			</button>

			{products && isShowProducts && (
				<div className="products">
					{products.products.map((product) => (
						<Product
							key={product.id}
							product={product}
							handleShowDetail={handleShowDetail}
						/>
					))}
				</div>
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
