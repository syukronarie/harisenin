import styles from "./Main.module.css";

export default function Main(props) {
	const { children, title } = props;

	return (
		<main className={styles.main}>
			<h1>{title}</h1>
			<div>{children}</div>
		</main>
	);
}
