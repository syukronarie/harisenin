/* eslint-disable react/prop-types */

import { useState } from "react";

const Button = ({ isShowEmail, setIsShowEmail }) => {
	return (
		<button
			onClick={() => {
				setIsShowEmail(!isShowEmail);
			}}
		>
			{isShowEmail ? "Hide email" : "Show email"}
		</button>
	);
};

const CardStudent = ({ student: { firstName, lastName, email, gender } }) => {
	// const { firstName, lastName, email, gender } = student;
	const [isShowEmail, setIsShowEmail] = useState(false);

	return (
		<div>
			<h2>
				Name: {firstName} {lastName}
			</h2>
			<p>email: {isShowEmail ? email : "******"}</p>
			<p>gender: {gender}</p>
			<Button
				isShowEmail={isShowEmail}
				setIsShowEmail={setIsShowEmail}
			></Button>
		</div>
	);
};

const students = [
	{
		id: 1,
		firstName: "Janet",
		lastName: "Murton",
		email: "jmurton0@toplist.cz",
		gender: "Female",
	},
	{
		id: 2,
		firstName: "Crissy",
		lastName: "Hariot",
		email: "chariot1@e-recht24.de",
		gender: "Female",
	},
	{
		id: 3,
		firstName: "Jacklin",
		lastName: "Harmes",
		email: "jharmes2@symantec.com",
		gender: "Female",
	},
	{
		id: 4,
		firstName: "Kris",
		lastName: "Woofinden",
		email: "kwoofinden3@twitter.com",
		gender: "Male",
	},
	{
		id: 5,
		firstName: "Lowrance",
		lastName: "Pidon",
		email: "lpidon4@diigo.com",
		gender: "Male",
	},
	{
		id: 6,
		firstName: "Anette",
		lastName: "Norcop",
		email: "anorcop5@independent.co.uk",
		gender: "Female",
	},
	{
		id: 7,
		firstName: "Lamont",
		lastName: "Altimas",
		email: "laltimas6@deliciousdays.com",
		gender: "Male",
	},
	{
		id: 8,
		firstName: "George",
		lastName: "Edgar",
		email: "gedgar7@pen.io",
		gender: "Female",
	},
	{
		id: 9,
		firstName: "Caryl",
		lastName: "Forsdyke",
		email: "cforsdyke8@vimeo.com",
		gender: "Male",
	},
	{
		id: 10,
		firstName: "Nikolos",
		lastName: "Klugman",
		email: "nklugman9@netlog.com",
		gender: "Male",
	},
];

const Content = () => {
	return (
		<main>
			<h1>Main Content</h1>
			<div>
				{students.map((student) => (
					<CardStudent key={student.id} student={student} />
				))}
			</div>
		</main>
	);
};

export default Content;
