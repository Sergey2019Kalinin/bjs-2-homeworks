//Задание 1

const parseCount = (parseArg) => {
	let parseResult = Number.parseInt (parseArg);
	if (isNaN (parseResult)) {
		throw new Error ("Невалидное значение");
  }
	return parseResult;
};

const validateCount = (parseArg) => {
	try { parseCount;
		return parseCount (parseArg);

	} catch	{
		return ("Невалидное значение");
	}
};

//Задание 2

class Triangle {
	constructor (sideA, sideB, sideC) {
		this.sideA = sideA;
		this.sideB = sideB;
		this.sideC = sideC;

		if ((sideA + sideB) < sideC || (sideA + sideC) < sideB || (sideB + sideC) < sideB)	{
			const sideSumError = new Error("Треугольник с такими сторонами не существует");
			throw sideSumError;
		}
	};

	let perimeter = this.sideA + this.sideB + this.sideC;

	getPerimeter () { 
		return perimeter;
	};

	getArea ()	{
		let p = 0.5 * perimeter;
		let triangleArea = Math.pow (p * ( p - this.sideA) * ( p - this.sideB) * ( p - this.sideC),	0.5);

		return +triangleArea.toFixed(3);
	}
};

class noTriangle extends Triangle {
	constructor (sideA, sideB, sideC) {
		super (sideA, sideB, sideC);
	}
		
	getPerimeter () { 
		return ("Ошибка! Треугольник не существует");
	}

	getArea ()	{
		return ("Ошибка! Треугольник не существует");
	}
};

const getTriangle = (sideA, sideB, sideC) => {
	try	{ customTriangle = new Triangle (sideA, sideB, sideC);
		return customTriangle;

	}	catch (sideSumError) {
			if ((sideA + sideB) < sideC || (sideA + sideC) < sideB
			|| (sideB + sideC) < sideB) {

				let noTriangleObject = new noTriangle (sideA, sideB, sideC);
				return	noTriangleObject;
  			}
   		}
};