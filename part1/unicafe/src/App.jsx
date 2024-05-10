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
			<Button onClick={handleGoodClick} text="good" />
			<Button onClick={handleNeutralClick} text="neutral" />
			<Button onClick={handleBadClick} text="bad" />
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

const Button = ({ text, onClick }) => {
	return (
		<>
			<button onClick={onClick}>{text}</button>
		</>
	);
};

const Statistics = (props) => {
	console.log(props);
	if (props.clicks.length === 0) {
		return <h3>No feedback given</h3>;
	} else
		return (
			<div>
				<h2>statistics</h2>
				<StatisticLine text="good" value={props.good} />
				<StatisticLine text="neutral" value={props.neutral} />
				<StatisticLine text="bad" value={props.bad} />
				<StatisticLine text="all" value={props.all} />
				<StatisticLine text="average" value={props.average} />
				<StatisticLine
					text="positive"
					value={props.positive ? props.positive : 0}
				/>
			</div>
		);
};

const StatisticLine = ({ text, value }) => {
	return (
		<p>
			{text} {value}
		</p>
	);
};
