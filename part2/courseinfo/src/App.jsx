const Header = ({ course }) => <h1>{course.name}</h1>;

const Total = ({ parts }) => {
	const total = parts.reduce((sum, part) => (sum += part.exercises), 0);

	return <h4>total of {total} exercises</h4>;
};

const Part = ({ part }) => (
	<p>
		{part.name} {part.exercises}
	</p>
);

const Content = ({ parts }) => {
	return (
		<>
			<Part part={parts[0]} />
			<Part part={parts[1]} />
			<Part part={parts[2]} />
			<Part part={parts[3]} />
		</>
	);
};

const Course = ({ course }) => {
	return (
		<>
			<Header course={course} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</>
	);
};

const App = () => {
	const course = {
		id: 1,
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
				id: 1,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
				id: 2,
			},
			{
				name: "State of a component",
				exercises: 14,
				id: 3,
			},
			{
				name: "Redux",
				exercises: 11,
				id: 4,
			},
		],
	};

	return <Course course={course} />;
};

export default App;
