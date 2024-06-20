import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [showAll, setShowAll] = useState("");

	useEffect(() => {
		axios.get("http://localhost:3001/persons").then((response) => {
			console.log("promise fulfilled");
			setPersons(response.data);
		});
	});

	const filteredPersons = persons.filter((person) =>
		person.name.toLowerCase().includes(showAll.toLowerCase())
	);

	const handleFilterChange = (event) => {
		setShowAll(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// check if the name already exists
		if (persons.find((person) => person.name === newName)) {
			alert(`${newName} is already added to phonebook`);
			return;
		}
		setPersons(persons.concat({ name: newName, number: newNumber }));
		setNewName("");
		setNewNumber("");
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
			<Filter value={showAll} onChange={handleFilterChange} />
			<h2>Add a new</h2>
			<PersonForm
				onSubmit={handleSubmit}
				newName={newName}
				handleNameChange={handleNameChange}
				newNumber={newNumber}
				handleNumberChange={handleNumberChange}
			/>
			<h2>Numbers</h2>
			<Persons persons={filteredPersons} />
		</div>
	);
};

export default App;
