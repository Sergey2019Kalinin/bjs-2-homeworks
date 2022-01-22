//Задание 1

const parseCount = (parseArg) => {
	if (isNaN(Number.parseInt (parseArg))) {
		 const parseError = new Error ("Невалидное значение");
		 throw parseError;
  }
	return Number.parseInt (parseArg);
};

const validateCount = (parseArg) => {
	try { parseCount;
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

		if ((sideA + sideB) < sideC || (sideA + sideC) < sideB || (sideB + sideC) < sideB)	{
			const sideSumError = new Error("Треугольник с такими сторонами не существует");
			throw sideSumError;
		}
	};

	getPerimeter () { 
		return this.sideA + this.sideB + this.sideC;
	};

	getArea ()	{
		let p = 0.5 * (this.sideA + this.sideB + this.sideC);
		let triangleArea = Math.pow (p * ( p - this.sideA) * ( p - this.sideB) * ( p - this.sideC),	0.5);

		return +triangleArea.toFixed(3);
	}
};

const getTriangle = (sideA, sideB, sideC) => {
	try	{ customTriangle = new Triangle (sideA, sideB, sideC);
		return customTriangle;
	}	catch (sideSumError) { if ((sideA + sideB) < sideC || (sideA + sideC) < sideB || (sideB + sideC) < sideB) {
	        this.getArea;
	        this.getPerimeter;
	        const SumError = new Error("Ошибка! Треугольник не существует");
	        throw SumError;l
  		}
  }
};