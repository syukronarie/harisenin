// import FormUsingClass from "../components/Form/FormUsingClass";
import FormUsingFunc from "../components/Form/FormUsingFunc";
import Layout from "../components/Layout";
import Main from "../components/Layout/Main/Main";
import Products from "../components/Products/Products";

export default function HomePage() {
	return (
		<Layout>
			<Main title="Homepage">
				{/* <FormUsingClass /> */}
				{/* <FormUsingFunc /> */}

				<Products />
			</Main>
		</Layout>
	);
}
