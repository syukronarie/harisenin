import "./App.css";
import { MantineProvider } from "@mantine/core";
import { HeaderMenu } from "./components/HeaderMenu/HeaderMenu";
import Presentation from "./views/Presentation";


const App = () => {



	return (
		<MantineProvider
			withGlobalStyles
			withNormalizeCSS
			theme={{ colorScheme: "dark" }}
		>
			<HeaderMenu />
			<Presentation />
		</MantineProvider>
	);
}

export default App;
