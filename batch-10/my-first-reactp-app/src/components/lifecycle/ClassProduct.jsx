/* eslint-disable react/prop-types */
import React from "react";

class ProductPrice extends React.Component {
	componentWillUnmount() {
		console.log("this is from componentWillUnmount");
	}

	render() {
		return <p>Product Price: {this.props.price}</p>;
	}
}

class Product extends React.Component {
	constructor() {
		super();
		this.state = {
			isShowPrice: true,
			cart: [],
			response: {
				products: [],
				total: 0,
				skip: 0,
				limit: 0,
			},
		};
	}

	componentDidMount() {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((response) => this.setState({ response }));
	}

	componentDidUpdate() {
		console.log(this.state.cart);
	}

	handleAddToCart(id) {
		this.setState({
			cart: [...this.state.cart, id],
		});
	}

	toggleProductPrice() {
		this.setState({
			isShowPrice: !this.state.isShowPrice,
		});
	}

	render() {
		return (
			<div>
				<h1>Product</h1>
				<div className="products">
					{this.state.response.products.map((product) => (
						<div className="products_item" key={product.id}>
							<h3>{product.title}</h3>
							<p>{product.category}</p>
							<img src={product.thumbnail} alt={product.title} />
							{this.state.isShowPrice && <ProductPrice price={product.price} />}
							<button onClick={() => this.toggleProductPrice()}>
								Toggle Price
							</button>
							<button onClick={() => this.handleAddToCart(product.id)}>
								Add to Cart
							</button>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Product;
