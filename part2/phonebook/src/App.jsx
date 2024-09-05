import { useEffect, useState } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import nameService from "./services/names";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [newFilter, setNewFilter] = useState("");

	// Fetch data from db.json
	useEffect(() => {
		nameService.getAll().then((response) => {
			setPersons(response.data);
		});
	}, []);

	const deletePerson = (id) => {
		if (
			window.confirm(
				`Delete ${persons.find((person) => person.id === id)?.name}?`
			)
		) {
			nameService.deleteNumber(id).then(() => {
				// Update the persons state by removing the deleted person
				setPersons(persons.filter((person) => person.id !== id));
			});
		}
	};

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
			<Persons
				persons={persons}
				newFilter={newFilter}
				deletePerson={deletePerson}
			/>
		</div>
	);
};

export default App;
