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
			<StatisticsLine text={"good"} value={good} />
			<StatisticsLine text={"neutral"} value={neutral} />
			<StatisticsLine text={"bad"} value={bad} />
			<StatisticsLine text={"all"} value={good + neutral + bad} />
			<StatisticsLine text={"average"} value={average()} />
			<StatisticsLine text={"positive"} value={positive()} />
		</div>
	);
};

const Button = ({
	setGood,
	good,
	bad,
	setNeutral,
	neutral,
	setBad,
	setAllClicks,
}) => {
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
		<>
			<button onClick={handleClick}>good</button>
			<button onClick={handleClick}>neutral</button>
			<button onClick={handleClick}>bad</button>
		</>
	);
};

const StatisticsLine = ({ text, value }) => {
	return (
		<p>
			{text} {value}
		</p>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [allClicks, setAllClicks] = useState([]);

	return (
		<div>
			<h1>give feedback</h1>

			<Button
				setGood={setGood}
				good={good}
				setNeutral={setNeutral}
				neutral={neutral}
				setBad={setBad}
				bad={bad}
				setAllClicks={setAllClicks}
			/>

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
