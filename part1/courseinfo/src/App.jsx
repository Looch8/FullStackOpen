const Header = ({ course }) => {
	return <h1>{course}</h1>;
};

const Content = ({ part, exercise }) => {
	return (
		<div>
			<Part part={part} exercise={exercise} />
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
	const part1 = {
		name: "Fundamentals of React",
		exercises: 10,
	};
	const part2 = {
		name: "Using props to pass data",
		exercises: 7,
	};
	const part3 = {
		name: "State of a component",
		exercises: 14,
	};

	return (
		<div>
			<Header course={course} />
			<Content part={part1.name} exercise={part1.exercises} />
			<Content part={part2.name} exercise={part2.exercises} />
			<Content part={part3.name} exercise={part3.exercises} />
			<Total
				total={part1.exercises + part2.exercises + part3.exercises}
			/>
		</div>
	);
};

export default App;
