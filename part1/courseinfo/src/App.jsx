const Header = ({ course }) => {
	return <h1>{course}</h1>;
};

// Refactor the Content component so that it does not render any names of parts or their number of exercises by itself. Instead, it only renders three Part components of which each renders the name and number of exercises of one part.

const Content = ({ part1, exercise1, part2, exercise2, part3, exercise3 }) => {
	return (
		<div>
			<Part part1={part1} exercise1={exercise1} />
			<Part part1={part2} exercise1={exercise2} />
			<Part part1={part3} exercise1={exercise3} />
		</div>
	);
};

const Part = ({ part, exercise }) => {
	return (
		<p>
			{part} {exercise}
		</p>
	);
};

const Total = ({ total }) => {
	return <p>Number of exercises {total}</p>;
};

const App = () => {
	const course = "Half Stack application development";
	const part1 = "Fundamentals of React";
	const exercises1 = 10;
	const part2 = "Using props to pass data";
	const exercises2 = 7;
	const part3 = "State of a component";
	const exercises3 = 14;

	return (
		<div>
			<Header course={course} />
			<Content
				part1={part1}
				exercise1={exercises1}
				part2={part2}
				exercise2={exercises2}
				part3={part3}
				exercise3={exercises3}
			/>
			<Total total={exercises1 + exercises2 + exercises3} />
		</div>
	);
};

export default App;
