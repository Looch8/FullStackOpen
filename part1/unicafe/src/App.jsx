import { useState } from "react";

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const average = () => {
		return (good - bad) / (good + neutral + bad);
	};

	const positive = () => {
		return (good / (good + neutral + bad)) * 100;
	};

	return (
		<div>
			<h1>give feedback</h1>
			<button onClick={() => setGood(good + 1)}>good</button>
			<button onClick={() => setNeutral(neutral + 1)}>neutral</button>
			<button onClick={() => setBad(bad + 1)}>bad</button>

			<h1>statistics</h1>
			<p>good {good > 0 ? good : null}</p>
			<p>neutral {neutral > 0 ? neutral : null}</p>
			<p>bad {bad > 0 ? bad : null}</p>
			<p>all {good + neutral + bad}</p>
			<p>average {average()}</p>
			<p>positive {positive()}%</p>
		</div>
	);
};

export default App;
