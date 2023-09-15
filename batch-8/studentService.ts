const students = [
	{
		id: 1,
		first_name: "Adoree",
		last_name: "Pocknoll",
		email: "apocknoll0@eepurl.com",
		gender: "Female",
	},
	{
		id: 2,
		first_name: "Nicolais",
		last_name: "Compson",
		email: "ncompson1@arizona.edu",
		gender: "Male",
	},
	{
		id: 3,
		first_name: "Marie-jeanne",
		last_name: "Sutton",
		email: "msutton2@cnn.com",
		gender: "Non-binary",
	},
	{
		id: 4,
		first_name: "Oswald",
		last_name: "Jime",
		email: "ojime3@mlb.com",
		gender: "Male",
	},
	{
		id: 5,
		first_name: "Leonard",
		last_name: "Powton",
		email: "lpowton4@unc.edu",
		gender: "Male",
	},
];

interface Student {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	gender: string;
}

function getStudentById(id: number): Student | undefined {
	return students.find((student) => student.id === id);
}

const student = getStudentById(5);
if (student) {
	console.log(student);
}
