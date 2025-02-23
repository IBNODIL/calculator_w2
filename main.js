let answerBox = document.getElementById('answer')

let deleteBtn = document.getElementById('delete')
let clearBtn = document.getElementById('clear');
let dotBtn = document.getElementById('dot');
let equalsBtn = document.getElementById('equals');

let firstNumber = '0';
let secondNumber = '0';
let lastNumber = 0;
let calculatingSign = '';
let isSecond = false;
let haveDot = false;
let isFirstZero = true;

dotBtn.addEventListener('click', () => {
  if (isSecond && secondNumber.length > 0 && !haveDot) {
    secondNumber = secondNumber + '.'
    haveDot = true;
    answerBox.textContent = secondNumber
    console.log(secondNumber)
  } else if (firstNumber.length > 0 && !haveDot) {
    firstNumber = firstNumber + '.'
    haveDot = true;
    answerBox.textContent = firstNumber
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
    answerBox.textContent = secondNumber

    if(secondNumber.length == 0){
      isFirstZero = true;
      answerBox.textContent = '0'
    }

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
    answerBox.textContent = firstNumber

    if(firstNumber.length == 0){
      answerBox.textContent = '0'
      isFirstZero = true;
    }

    console.log(firstNumber)
  }
})
clearBtn.addEventListener('click', () => {
  firstNumber = '0'
  secondNumber = '0'
  isSecond = false
  isFirstZero = true
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
  isFirstZero = true;
})

function thisCalculatingSign(sign) {
  if (firstNumber && !isSecond) {
    calculatingSign = `${sign}`;
    console.log(calculatingSign);
    isSecond = true;
    haveDot = false;
    isFirstZero = true;
  }
}

function addNumberToInput(num) {
  if (num == '0' && isFirstZero) {
    return
  } else if ((num == '00' && isFirstZero)) {
    return
  } else {
    if (isSecond) {
      if (isFirstZero) {
        lastNumber = num;
        secondNumber = num
      } else {
        secondNumber = secondNumber + num
      }
      isFirstZero = false
      answerBox.textContent = secondNumber
      console.log(secondNumber)
    } else {
      if (isFirstZero) {
        lastNumber = num;
        firstNumber = num
      } else {
        firstNumber = firstNumber + num
      }
      isFirstZero = false
      answerBox.textContent = firstNumber
      console.log(firstNumber)
    }
  }
}