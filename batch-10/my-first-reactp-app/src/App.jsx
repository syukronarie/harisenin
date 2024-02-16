import "./App.css";
// import Content from "./components/Content";
import Layout from "./components/Layout";
import Products from "./components/lifecycle/Product";
// import Product from "./components/lifecycle/ClassProduct";

function App() {
	return (
		<Layout>
			<Products />
			{/* <Content /> */}
		</Layout>
	);
}

export default App;
