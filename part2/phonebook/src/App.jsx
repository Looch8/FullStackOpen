import { useState } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

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

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter newFilter={newFilter} setNewFilter={setNewFilter} />
			<h2>add a new</h2>
			<PersonForm
				newName={newName}
				newNumber={newNumber}
				setNewName={setNewName}
				setNewNumber={setNewNumber}
				setPersons={setPersons}
				persons={persons}
			/>
			<h2>Numbers</h2>
			<Persons persons={persons} newFilter={newFilter} />
		</div>
	);
};

export default App;
