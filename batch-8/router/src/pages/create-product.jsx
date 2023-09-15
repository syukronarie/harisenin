import React from "react";

export default function CreateProductPage() {
	async function handleOnSubmit(e) {
		e.preventDefault();
		try {
			await submitForm(e);
			alert("Successfully added a new product!");
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div>
			<h1>CreateProduct</h1>
			<form onSubmit={handleOnSubmit}>
				<input type="text" name="title" placeholder="title" />
				<input type="text" name="description" placeholder="description" />
				<input type="text" name="price" placeholder="price" />
				<input
					type="text"
					name="discountPercentage"
					placeholder="discountPercentage"
				/>
				<input type="text" name="rating" placeholder="rating" />
				<input type="text" name="stock" placeholder="stock" />
				<input type="text" name="brand" placeholder="brand" />
				<input type="text" name="category" placeholder="category" />
				<input type="file" name="thumbnail" placeholder="thumbnail" />
				<button type="submit">Add Product</button>
			</form>
		</div>
	);
}

function submitForm(e) {
	return new Promise((resolve, reject) => {
		if (e) {
			const formData = new FormData(e.target);
			const payload = Object.fromEntries(formData);
			console.log(payload);

			// fetch("https://dummyjson.com/products/add/asdfsdfsafd/", {
			// 	method: "POST",
			// 	headers: { "Content-Type": "application/json" },
			// 	body: JSON.stringify({
			// 		...payload,
			// 	}),
			// })
			// 	.then((res) => res.json())
			// 	.then((val) => resolve(val))
			// 	.catch((err) => {
			// 		reject(new Error(JSON.stringify(err)));
			// 	});
		}
	});
}
