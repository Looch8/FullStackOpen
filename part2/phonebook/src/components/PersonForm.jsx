import nameService from "../services/names";

const PersonForm = ({
	newName,
	newNumber,
	setNewName,
	setNewNumber,
	setPersons,
	persons,
	setSuccessMessage,
}) => {
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

		//  Send data to backend
		nameService.create(nameObject).then((response) => {
			setPersons(persons.concat(response.data));
			setNewName("");
			setNewNumber("");
			setSuccessMessage(`message successful`);
			setTimeout(() => {
				setSuccessMessage(null);
			}, 5000);
		});
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
		<>
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
		</>
	);
};

export default PersonForm;
