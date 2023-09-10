import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
	const [product, setProduct] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://dummyjson.com/products/${id}`)
			.then((res) => res.json())
			.then(setProduct);
	}, [id]);

	return (
		<div>
			<h1>ProductDetail</h1>
			{!!product ? (
				<div key={product.id}>
					<h2>{product.title}</h2>
					<img
						style={{ width: 200 }}
						src={product.images[0]}
						alt={product.title}
					/>
					<p>{product.category}</p>
					<p>{product.description}</p>
				</div>
			) : (
				<p>Loading guys.... </p>
			)}
			<Link to="/">Back to list products</Link>
		</div>
	);
}
