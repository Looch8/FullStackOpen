import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-123456" },
	]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");

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
			{persons.map((person) => (
				<div key={person.name}>
					{person.name} {person.number}
				</div>
			))}
		</div>
	);
};

export default App;
