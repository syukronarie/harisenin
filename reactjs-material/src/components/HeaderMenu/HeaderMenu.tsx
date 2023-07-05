import {
	createStyles,
	Header,
	Burger,
	Title,
	Menu,
	Button,
	Center,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
	root: {
		padding: "1rem 2rem",
		height: "5rem",
		maxHeight: "5rem",
		position: "fixed",
	},

	inner: {
		height: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},

	links: {
		[theme.fn.smallerThan("sm")]: {
			display: "none",
		},
	},

	burger: {
		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},

	link: {
		display: "block",
		lineHeight: 1,
		padding: "0.4rem 0.8rem",
		borderRadius: theme.radius.sm,
		textDecoration: "none",
		color:
			theme.colorScheme === "dark"
				? theme.colors.dark[0]
				: theme.colors.gray[7],
		fontSize: theme.fontSizes.md,
		fontWeight: 500,

		"&:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[6]
					: theme.colors.gray[0],
		},
	},

	linkLabel: {
		marginRight: "5rem",
	},
}));

export function HeaderMenu() {
	const [opened, { toggle }] = useDisclosure(false);
	const { classes } = useStyles();

	const [language, setLanguage] = useState("eng");

	const handleChangeLanguage = () => {
		setLanguage(language === "eng" ? "in" : "eng");
	};

	return (
		<Header height={56} className={classes.root}>
			<div className={classes.inner}>
				<Title size={28}>ReactJS Handling Events</Title>
				<Menu trigger="hover" withinPortal zIndex={1002}>
					<Menu.Target>
						<Button variant="subtle">
							<Center>
								<span
								// className={classes.linkLabel}
								>
									{language === "eng" ? "English" : "Bahasa Indonesia"}
								</span>
								<IconChevronDown size="0.9rem" stroke={1.5} />
							</Center>
						</Button>
					</Menu.Target>
					<Menu.Dropdown>
						<Menu.Item onClick={handleChangeLanguage}>English</Menu.Item>
						<Menu.Item onClick={handleChangeLanguage}>
							Bahasa Indonesia
						</Menu.Item>
					</Menu.Dropdown>
				</Menu>
				<Burger
					opened={opened}
					onClick={toggle}
					className={classes.burger}
					size="sm"
				/>
			</div>
		</Header>
	);
}
