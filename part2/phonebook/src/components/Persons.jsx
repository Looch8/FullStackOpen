const Persons = ({ persons, newFilter }) => {
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
				</div>
			))}
		</>
	);
};

export default Persons;
