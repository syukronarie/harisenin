import React from "react";

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
				</div>
			))}
		</div>
	);
}
