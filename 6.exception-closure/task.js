//Задание 1

const parseCount = (parseArg) => {
	let parseResult = Number.parseInt (parseArg);

	if (isNaN (parseResult)) {
		throw new Error ("Невалидное значение");
  }
	return parseResult;
};

const validateCount = (parseArg) => {
	try { parseCount (parseArg);
		return parseCount (parseArg);

	} catch (parseError)	{
		return parseError;
	}
};

//Задание 2

class Triangle {
	constructor (sideA, sideB, sideC) {
		this.sideA = sideA;
		this.sideB = sideB;
		this.sideC = sideC;

		if ((sideA + sideB) < sideC || (sideA + sideC) < sideB
			|| (sideB + sideC) < sideB)	{

			throw new Error
		("Треугольник с такими сторонами не существует");
		}
	};

	

	getPerimeter () { 
		let perimeter = this.sideA + this.sideB + this.sideC;
		return perimeter;
	};

	getArea ()	{
		let p = 0.5 * this.getPerimeter ();
		let triangleArea = Math.pow
		(p * ( p - this.sideA) * ( p - this.sideB) * ( p - this.sideC),	0.5);

		return +triangleArea.toFixed(3);
	}
};

const getTriangle = (sideA, sideB, sideC) => {

	try	{ customTriangle = new Triangle (sideA, sideB, sideC);
		return customTriangle;

	}	catch (sideSumError) {
			let noTriangleObject =	{
										sideA,
										sideB,
										sideC,

										getPerimeter () { 
											return ("Ошибка! Треугольник не существует.");
										},

										getArea ()	{
											return ("Ошибка! Треугольник не существует.");
									}
				};

			return	noTriangleObject;
  		}
};