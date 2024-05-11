import { useState } from "react";

const RandomButton = ({ setSelected, anecdotes }) => {
	const randomAnecdote = () => {
		setSelected(anecdotes[Math.floor(Math.random() * anecdotes.length)]);
	};

	return <button onClick={randomAnecdote}>next anecdote</button>;
};

const App = () => {
	const anecdotes = [
		"If it hurts, do it more often.",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
		"The only way to go fast, is to go well.",
	];

	const [selected, setSelected] = useState(anecdotes[0]);
	const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

	const updatePoint = () => {
		const updatedPoints = [...points];
		const selectedIndex = anecdotes.indexOf(selected);
		updatedPoints[selectedIndex] += 1;
		setPoints(updatedPoints);
	};

	return (
		<div>
			{selected} <br></br>
			<p>has {points[anecdotes.indexOf(selected)]} votes</p>
			<button onClick={updatePoint}>vote</button>
			<RandomButton setSelected={setSelected} anecdotes={anecdotes} />
		</div>
	);
};

export default App;
