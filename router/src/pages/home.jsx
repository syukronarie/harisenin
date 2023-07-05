import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
	const article = {
		title: "Lorem ipsum dolor sit amet consectetur.",
		content:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quam enim quaerat non nisi eligendi molestiae, repudiandae provident libero totam quas ipsa quis soluta odio, possimus, fugiat ad maxime nemo.",
	};

	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate("/about", { state: "hello" });
	};

	return (
		<div>
			<h1>Home page</h1>
			<h2>{article.title}</h2>
			<p>{article.content}</p>
			<p>{article?.createdAt}</p>
			<Link to="/about">go to about page</Link>
			<button onClick={handleNavigate}>go to about with state</button>
		</div>
	);
}
