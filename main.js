let answerBox = document.getElementById('answer')

let deleteBtn = document.getElementById('delete')
let clearBtn = document.getElementById('clear');
let divideBtn = document.getElementById('divide');
let multipleBtn = document.getElementById('multiple');
let minusBtn = document.getElementById('minus');
let plusBtn = document.getElementById('plus');
let dotBtn = document.getElementById('dot');
let equalsBtn = document.getElementById('equals');
let doubleZeroBtn = document.getElementById('double-zero');
let zeroBtn = document.getElementById('zero');
let oneBtn = document.getElementById('one');
let twoBtn = document.getElementById('two');
let threeBtn = document.getElementById('three');
let fourBtn = document.getElementById('four');
let fiveBtn = document.getElementById('five');
let sixBtn = document.getElementById('six');
let sevenBtn = document.getElementById('seven');
let eightBtn = document.getElementById('eight');
let nineBtn = document.getElementById('nine');

let firstNumber = '0';
let secondNumber = '0';
let lastNumber = 0;
let calculatingSign = '';
let isSecond = false;
let haveDot = false;
let isFirstZero = true;

oneBtn.addEventListener('click', () => addNumber('1'))
twoBtn.addEventListener('click', () => addNumber('2'))
threeBtn.addEventListener('click', () => addNumber('3'))
fourBtn.addEventListener('click', () => addNumber('4'))
fiveBtn.addEventListener('click', () => addNumber('5'))
sixBtn.addEventListener('click', () => addNumber('6'))
sevenBtn.addEventListener('click', () => addNumber('7'))
eightBtn.addEventListener('click', () => addNumber('8'))
nineBtn.addEventListener('click', () => addNumber('9'))
zeroBtn.addEventListener('click', () => addNumber('0'))
doubleZeroBtn.addEventListener('click', () => addNumber('00'))
plusBtn.addEventListener('click', () => thisCalculatingSign('+'))
minusBtn.addEventListener('click', () => thisCalculatingSign('-'))
multipleBtn.addEventListener('click', () => thisCalculatingSign('*'))
divideBtn.addEventListener('click', () => thisCalculatingSign('/'))
dotBtn.addEventListener('click', () => {
  if (isSecond && secondNumber.length > 0 && !haveDot) {
    secondNumber = secondNumber + '.'
    haveDot = true;
    console.log(secondNumber)
  } else if (!isSecond && firstNumber.length > 0 && !haveDot) {
    firstNumber = firstNumber + '.'
    haveDot = true;
    console.log(firstNumber)
  }
})
deleteBtn.addEventListener('click', () => {
  if (isSecond) {
    secondNumber = secondNumber.split('')
    let returningSecondNumber = []

    for (let i = 0; i < secondNumber.length; i++) {
      if ((secondNumber.length - 1) > i) {
        returningSecondNumber.push(secondNumber[i])
      }
    }

    secondNumber = returningSecondNumber.join('')
    console.log(secondNumber)
  } else {
    firstNumber = firstNumber.split('')
    let returningFirstNumber = []

    for (let i = 0; i < firstNumber.length; i++) {
      if ((firstNumber.length - 1) > i) {
        returningFirstNumber.push(firstNumber[i])
      }
    }

    firstNumber = returningFirstNumber.join('')
    console.log(firstNumber)
  }
})
clearBtn.addEventListener('click', () => {
  firstNumber = '0'
  secondNumber = '0'
  isSecond = false
  answerBox.textContent = '0'

  console.log(firstNumber)
})
equalsBtn.addEventListener('click', () => {
  if (calculatingSign == '+') {
    answerBox.textContent = Number(firstNumber) + Number(secondNumber)
    firstNumber = '0'
    secondNumber = '0'
    isSecond = false
    console.log(answerBox.textContent)
  } else if (calculatingSign == '-') {
    answerBox.textContent = Number(firstNumber) - Number(secondNumber)
    console.log(answerBox.textContent)
  } else if (calculatingSign == '*') {
    answerBox.textContent = Number(firstNumber) * Number(secondNumber)
    console.log(answerBox.textContent)
  } else if (calculatingSign == '/') {
    answerBox.textContent = Number(firstNumber) / Number(secondNumber)
    console.log(answerBox.textContent)
  }
})

function thisCalculatingSign(sign) {
  if (firstNumber && !isSecond) {
    calculatingSign = `${sign}`;
    console.log(calculatingSign);
    isSecond = true;
  }
}

function addNumber(num) {
  if (num == '0' && isFirstZero) {
    return
  } else if ((num == '00' && isFirstZero)) {
    return
  } else {
    if (isSecond) {
      lastNumber = num;
      secondNumber = secondNumber + num
      isFirstZero = false
      answerBox.textContent = secondNumber
      console.log(secondNumber)
    } else {
      lastNumber = num;
      firstNumber = firstNumber + num
      isFirstZero = false
      answerBox.textContent = firstNumber
      console.log(firstNumber)
    }
  }
}
