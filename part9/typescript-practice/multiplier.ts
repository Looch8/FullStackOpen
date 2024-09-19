type Operation = "multiply" | "add" | "divide";

const calculator = (a: number, b: number, op: Operation): number => {
	switch (op) {
		case "multiply":
			return a * b;
		case "add":
			return a + b;
		case "divide":
			if (b === 0) throw new Error("Can't divide by 0!");
			return a / b;
		default:
			throw new Error("Operation is not valid!");
	}
};

try {
	console.log(calculator(2, 3, "divide"));
} catch (error: unknown) {
	let errorMessage = "something went wrong: ";
	if (error instanceof Error) {
		errorMessage += error.message;
	}
}

calculator(2, 3, "add");
