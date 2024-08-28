const Header = ({ course }) => {
	return (
		<>
			<h2>{course.name}</h2>
		</>
	);
};

const Total = ({ parts }) => {
	const total = parts.reduce((sum, part) => (sum += part.exercises), 0);

	return <h4>total of {total} exercises</h4>;
};

const Part = ({ part }) => {
	return (
		<>
			<p>
				{part.name} {part.exercises}
			</p>
		</>
	);
};

const Content = ({ courses }) => {
	return (
		<>
			{courses.map((course) =>
				course.parts.map((part) => <Part key={part.id} part={part} />)
			)}
		</>
	);
};

const Course = ({ courses }) => {
	return (
		<>
			<h1>Web development curriculum</h1>
			{courses.map((course) => (
				<div key={course.id}>
					<Header course={course} />
					<Content courses={[course]} />
					<Total parts={course.parts} />
				</div>
			))}
		</>
	);
};

export default Course;
