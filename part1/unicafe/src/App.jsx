import { useState } from "react";

const Statistics = ({ good, bad, neutral, allClicks }) => {
	const average = () => {
		return (good - bad) / (good + neutral + bad);
	};

	const positive = () => {
		return (good / (good + neutral + bad)) * 100;
	};

	if (allClicks.length === 0) {
		return <h3>No feedback given</h3>;
	}
	return (
		<div>
			<p>good {good}</p>
			<p>neutral {neutral}</p>
			<p>bad {bad}</p>
			<p>all {good + neutral + bad}</p>
			<p>average {average()}</p>
			<p>positive {positive()}%</p>
		</div>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [allClicks, setAllClicks] = useState([]);

	const handleClick = (e) => {
		const buttonText = e.target.textContent;

		if (buttonText == "good") {
			setGood(good + 1);
			setAllClicks(good);
		} else if (buttonText == "neutral") {
			setNeutral(neutral + 1);
			setAllClicks(neutral);
		} else if (buttonText == "bad") {
			setBad(bad + 1);
			setAllClicks(bad);
		}
	};

	return (
		<div>
			<h1>give feedback</h1>

			<button onClick={handleClick}>good</button>
			<button onClick={handleClick}>neutral</button>
			<button onClick={handleClick}>bad</button>

			<h1>statistics</h1>
			<Statistics
				good={good}
				neutral={neutral}
				bad={bad}
				allClicks={allClicks}
			/>
		</div>
	);
};

export default App;
