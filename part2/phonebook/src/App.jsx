import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas" + " ", number: "040-1234567" },
	]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");

	const addName = (event) => {
		event.preventDefault();
		const nameObject = {
			name: newName + " ",
			number: newNumber,
		};
		// Check if duplicate is present, if so, prevent adding name to list.
		if (preventDuplicateAdd(nameObject)) {
			return;
		}
		setPersons(persons.concat(nameObject));
		setNewName("");
		setNewNumber("");
	};

	const preventDuplicateAdd = (nameObject) => {
		for (let i = 0; i < persons.length; i++) {
			if (Object.values(persons[i]).includes(nameObject.name)) {
				alert(`${nameObject.name} is already added to the phonebook`);
				return true;
			}
		}
	};

	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addName}>
				<div>
					name:{" "}
					<input
						placeholder="Add name..."
						value={newName}
						onChange={handleNameChange}
					/>
					<div>
						number:{" "}
						<input
							placeholder="Add number..."
							value={newNumber}
							onChange={handleNumberChange}
						/>
					</div>
				</div>
				<div>
					<button type="submit">add </button>
				</div>
			</form>
			<h2>Numbers</h2>{" "}
			{persons.map((person) => (
				<div key={person.name}>
					{person.name}
					{person.number}
				</div>
			))}
		</div>
	);
};

export default App;
