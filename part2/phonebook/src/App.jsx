import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas" + " ", number: "040-123456", id: 1 },
		{ name: "Ada Lovelace" + " ", number: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov" + " ", number: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck" + " ", number: "39-23-6423122", id: 4 },
	]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [newFilter, setNewFilter] = useState("");

	const personsToShow = newFilter
		? persons.filter((person) =>
				person.name.toLowerCase().includes(newFilter.toLowerCase())
		  )
		: persons;

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

	const handleFilterChange = (event) => {
		setNewFilter(event.target.value);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			filter shown with{" "}
			<input
				placeholder="Start typing to filter..."
				value={newFilter}
				onChange={handleFilterChange}
			/>
			<form onSubmit={addName}>
				<h2>add a new</h2>
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
			{personsToShow.map((person) => (
				<div key={person.name}>
					{person.name}
					{person.number}
				</div>
			))}
		</div>
	);
};

export default App;
