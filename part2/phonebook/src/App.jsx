import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-123456", id: 1 },
		{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
	]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [showAll, setShowAll] = useState("");

	const filteredPersons = persons.filter((person) =>
		person.name.toLowerCase().includes(showAll.toLowerCase())
	);

	const handleFilterChange = (event) => {
		setShowAll(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setPersons(persons.concat({ name: newName, number: newNumber }));
		// check if the name already exists
		if (persons.find((person) => person.name === newName)) {
			alert(`${newName} is already added to phonebook`);
			// prevent the name being added, but keep current list
			setPersons(persons);
			return;
		}
	};

	const handleNameChange = (event) => {
		setNewName(event.target.value);
		console.log(event.target.value);
	};

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value);
		console.log(event.target.value);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<div>
				filter shown with{" "}
				<input value={showAll} onChange={handleFilterChange} />
			</div>
			<h2>Add a new</h2>
			<form onSubmit={handleSubmit}>
				<div>
					name: <input value={newName} onChange={handleNameChange} />
				</div>
				<div>
					number:{" "}
					<input value={newNumber} onChange={handleNumberChange} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{filteredPersons.map((person) => (
				<div key={person.name}>
					{person.name} {person.number}
				</div>
			))}
		</div>
	);
};

export default App;
