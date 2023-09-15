var students = [
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
function getStudentById(id) {
    return students.find(function (student) { return student.id === id; });
}
var student = getStudentById(5);
if (student) {
    console.log(student);
}
