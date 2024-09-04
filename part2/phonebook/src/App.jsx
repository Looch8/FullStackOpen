import { useEffect, useState } from "react";
import axios from "axios";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [newFilter, setNewFilter] = useState("");

	// Fetch data from db.json
	useEffect(() => {
		axios.get("http://localhost:3001/persons").then((response) => {
			setPersons(response.data);
		});
	}, []);

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
