const Persons = ({ persons, newFilter, deletePerson }) => {
	const personsToShow = newFilter
		? persons.filter((person) =>
				person.name.toLowerCase().includes(newFilter.toLowerCase())
		  )
		: persons;

	return (
		<>
			{personsToShow.map((person) => (
				<div key={person.name}>
					{person.name}
					{person.number}
					<button onClick={() => deletePerson(person.id)}>
						delete
					</button>
				</div>
			))}
		</>
	);
};

export default Persons;
