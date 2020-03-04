let prevInput = '0'
let calculationOperator = ''
let currentInput = '0'

const initialize = () =>
{
	prevInput = '0'
	calculationOperator = ''
	currentInput = '0'
}
const numbers = document.querySelectorAll(".number")

numbers.forEach((number) =>
{
	number.addEventListener("click", (event) =>
	{
		inputNumber(event.target.value)
		updateScreen(currentInput)
	})
})


const inputNumber = (number) =>
{
	if (currentInput === '0')
	{
		currentInput = number
	}
	else
	{
	currentInput += number
	}
}
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) =>
{
	operator.addEventListener("click" , (event) =>
	{
		inputOperator(event.target.value)
	})
})

const inputOperator = (operator) =>
{
	prevInput = currentInput
	calculationOperator = operator
	currentInput = '0'
}

const calculate = () =>
{
	let result = 0;
	switch(calculationOperator)
	{
		case '+': result = parseFloat(prevInput) + parseFloat(currentInput)
				  break
		case '-': result = parseFloat(prevInput) - parseFloat(currentInput)
				  break
		case '*': result = parseFloat(prevInput) * parseFloat(currentInput)
				  break
		case '/': result = parseFloat(prevInput) / parseFloat(currentInput)
				  break
		default:  return
	}
	currentInput = result.toString();
	calculationOperator = ''
}

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) =>
{
	calculatorScreen.value = number
}

const decimalPoint = document.querySelector(".decimal")

	decimalPoint.addEventListener("click", (event) =>
	{
		inputNumber(event.target.value)
		updateScreen(currentInput)
	})

const equalSign = document.querySelector(".equal-sign")

equalSign.addEventListener('click' , ()=>
{
	calculate()
	updateScreen(currentInput)
})

const allClear = document.querySelector(".all-clear")

allClear.addEventListener('click' , ()=>
{
	initialize()
	updateScreen(currentInput)
})



