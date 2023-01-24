import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}> {text}</button>
);

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const calcAverage = (good, neutral, bad) =>
    (good - bad) / (good + neutral + bad);

  const calcPositive = (good, neutral, bad) =>
    (100 * good) / (good + bad + neutral);

  return (
    <>
      <h1>Statistics</h1>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <p>No Feedback Given</p>
      ) : (
        <div>
          <table>
            <tbody>
              <StatisticLine text="good" value={good} />
              <StatisticLine text="neutral" value={neutral} />
              <StatisticLine text="bad" value={bad} />
              <StatisticLine text="all" value={good + neutral + bad} />
              <StatisticLine
                text="average"
                value={calcAverage(good, neutral, bad)}
              />
              <StatisticLine
                text="positive"
                value={calcPositive(good, neutral, bad)}
              />
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>Give feedback</h2>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

// Up to unicafe step 5

export default App;
