import { useState } from "react";

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [clicks, setClicks] = useState([]);

	const all = good + bad + neutral;
	const average = good + -bad + neutral / 3;
	const positive = (good / all) * 100;

	const handleGoodClick = () => {
		setGood(good + 1);
		setClicks(clicks.concat(1));
	};
	const handleNeutralClick = () => {
		setNeutral(neutral + 1);
		setClicks(clicks.concat(1));
	};
	const handleBadClick = () => {
		setBad(bad + 1);
		setClicks(clicks.concat(1));
	};

	return (
		<div>
			<h2>give feedback</h2>
			<button onClick={handleGoodClick}>good</button>
			<button onClick={handleNeutralClick}>neutral</button>
			<button onClick={handleBadClick}>bad</button>
			<Statistics
				good={good}
				neutral={neutral}
				bad={bad}
				all={all}
				average={average}
				positive={positive}
				clicks={clicks}
			/>
		</div>
	);
};

export default App;

const Statistics = ({ good, neutral, bad, all, average, positive, clicks }) => {
	if (clicks.length === 0) {
		return <h3>No feedback given</h3>;
	} else
		return (
			<div>
				<h2>statistics</h2>
				<p>good {good}</p>
				<p>neutral {neutral}</p>
				<p>bad {bad}</p>
				<p>all {all}</p>
				<p>average {average}</p>
				<p>positive {positive ? positive : 0}</p>
			</div>
		);
};
