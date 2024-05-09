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
	const parts = [
		{
			name: "Fundamentals of React",
			exercises: 10,
		},
		{
			name: "Using props to pass data",
			exercises: 7,
		},
		{
			name: "State of a component",
			exercises: 14,
		},
	];

	return (
		<div>
			<Header course={course} />
			<Content part={parts[0].name} exercise={parts[0].exercises} />
			<Content part={parts[1].name} exercise={parts[1].exercises} />
			<Content part={parts[2].name} exercise={parts[2].exercises} />
			<Total
				total={
					parts[0].exercises + parts[1].exercises + parts[2].exercises
				}
			/>
		</div>
	);
};

export default App;
