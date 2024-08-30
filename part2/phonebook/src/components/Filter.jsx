const Filter = ({ newFilter, setNewFilter }) => {
	const handleFilterChange = (event) => {
		setNewFilter(event.target.value);
	};

	return (
		<>
			filter shown with{" "}
			<input
				placeholder="Start typing to filter..."
				value={newFilter}
				onChange={handleFilterChange}
			/>
		</>
	);
};

export default Filter;
