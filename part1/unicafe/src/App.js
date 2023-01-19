import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const StatisticsText = (props) => (
  <div>
    {props.text}
    {props.value}
  </div>
);

const Statistics = ({ good, neutral, bad }) => {
  const calcAverage = (good, neutral, bad) =>
    (good - bad) / (good + bad + neutral).toFixed(2);

  const calcPositive = (good, neutral, bad) =>
    ((good * 100) / (good + neutral + bad)).toFixed(2) + "%";

  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticsText text="good: " value={good} />{" "}
          <StatisticsText text="neutral: " value={neutral} />
          <StatisticsText text="bad: " value={bad} />
          <StatisticsText text="total: " value={good + neutral + bad} />
          <StatisticsText
            text="average: "
            value={
              good + neutral + bad !== 0 ? calcAverage(good, neutral, bad) : 0
            }
          />
          <StatisticsText
            text="posititve: "
            value={
              good + neutral + bad !== 0 ? calcPositive(good, neutral, bad) : 0
            }
          />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  //Save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />{" "}
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />{" "}
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
