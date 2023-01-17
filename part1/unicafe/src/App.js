import { useState } from "react";

const Display = (props) => (
  <div>
    {props.text} {props.score}
  </div>
);

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

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
      <h1>statistics</h1>
      <Display text="good" score={good} />
      <Display text="neutral" score={neutral} />
      <Display text="bad" score={bad} />
    </div>
  );
};

export default App;
