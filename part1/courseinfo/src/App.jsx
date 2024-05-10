import { useState } from "react";

const Header = ({ course }) => {
	return <h1>{course}</h1>;
};

const Content = ({ ...parts }) => {
	return (
		<div>
			<Part
				part={parts.part[0].name}
				exercises={parts.part[0].exercises}
			/>

			<Part
				part={parts.part[1].name}
				exercises={parts.part[1].exercises}
			/>
			<Part
				part={parts.part[2].name}
				exercises={parts.part[2].exercises}
			/>
		</div>
	);
};

const Part = ({ part, exercises }) => {
	return (
		<p>
			{part} {exercises}
		</p>
	);
};

const Total = ({ ...parts }) => {
	const total =
		parts.parts[0].exercises +
		parts.parts[1].exercises +
		parts.parts[2].exercises;

	return <p>Number of exercises {total}</p>;
};

const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
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
		],
	};

	return (
		<div>
			<Header course={course.name} />
			<Content part={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
};

export default App;
