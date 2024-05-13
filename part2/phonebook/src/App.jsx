import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
	const [newName, setNewName] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		setPersons(persons.concat({ name: newName }));
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

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={handleSubmit}>
				<div>
					name: <input value={newName} onChange={handleNameChange} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map((person) => (
				<div key={person.name}>{person.name}</div>
			))}
		</div>
	);
};

export default App;
