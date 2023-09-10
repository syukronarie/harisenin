import React from "react";
import { Link } from "react-router-dom";

export default function ListProducts({ products }) {
	return (
		<div>
			<h1>List of products</h1>
			{products.map((product) => (
				<div key={product.id}>
					<h2>{product.title}</h2>
					<img
						style={{ width: 200 }}
						src={product.images[0]}
						alt={product.title}
					/>
					<p>{product.category}</p>
					<p>{product.description}</p>
					<Link to={`/product/${product.id}`}>See more</Link>
				</div>
			))}
		</div>
	);
}
