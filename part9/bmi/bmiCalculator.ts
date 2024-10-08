const calculateBmi = (height: number, weight: number): string => {
	const bmi = weight / Math.pow(height / 100, 2);

	switch (true) {
		case bmi < 18.5:
			return "Underweight";
		case bmi < 24.9:
			return "Normal (healthy weight)";
		case bmi < 29.9:
			return "Overweight";
		case bmi >= 30:
			return "Obese";
		default:
			return "Invalid input";
	}
};

console.log(calculateBmi(180, 74));
