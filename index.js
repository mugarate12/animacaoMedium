let textfield1 = document.getElementById('textfield1')
let textfield2 = document.getElementById('textfield2')

let textfield1Lenght = 0
let textfield2Lenght = 0

// Daqui pra baixo, somente códigos pra inserir o css necessário na figura pra criar a pseudo animação
const moveSpoonPixels = 10
const initialPosition = 10
const finalPosition = 100
const marginBottomSpoonInitialPosition = -20

function getInputsLenght() {
  return textfield1Lenght + textfield2Lenght
}

function moveSpoon() {
  let inputsLenght = getInputsLenght()

  let move = initialPosition + (moveSpoonPixels * inputsLenght)
  let spoonPosition = marginBottomSpoonInitialPosition
  
  const initialMove = move <= finalPosition
  const moveToLeft = move > finalPosition && Number(String(move)[0]) % 2 === 1
  const moveToRight = move > finalPosition && Number(String(move)[0]) % 2 === 0

  if (initialMove) {
    move = initialPosition + (moveSpoonPixels * inputsLenght)
  } else if (moveToLeft) {
    const countZero = String(move).length - 1
    let count = String(move)[0]

    for (let index = 0; index < countZero; index++) {
      count += '0'
    }

    move = finalPosition - (move - Number(count))
  } else if (moveToRight) {
    const countZero = String(move).length - 1
    let count = String(move)[0]
    for (let index = 0; index < countZero; index++) {
      count += '0'
    }

    move = move - Number(count)
  }

  if (move > 20 && move <= 40) {
    spoonPosition -= 2
  } else if (move > 40 && move <= 60) {
    spoonPosition -= 4
  } else if (move > 60 && move <= 80) {
    spoonPosition -= 2
  } else {
    spoonPosition = marginBottomSpoonInitialPosition
  }

  let spoon = document.getElementById('spoon')
  spoon.style.marginLeft = `${move + 10}px`
  spoon.style.marginBottom = `${spoonPosition}px`
}

function spoonCableHeight() {
  let spoonCableHeight = 60
  const inputsLenght = getInputsLenght()

  const moveToLeft = initialPosition + (moveSpoonPixels * inputsLenght) > finalPosition && Number(String(initialPosition + (moveSpoonPixels * inputsLenght))[0]) % 2 === 1
  if (moveToLeft) {
    spoonCableHeight -= 5
  } 

  let spoonCable = document.getElementById('spoonCable')
  spoonCable.style.height = `${spoonCableHeight}px`
}

function spoonBaseHeight() {
  let spoonBaseHeight = 40
  const inputsLenght = getInputsLenght()

  const moveToLeft = initialPosition + (moveSpoonPixels * inputsLenght) > finalPosition && Number(String(initialPosition + (moveSpoonPixels * inputsLenght))[0]) % 2 === 1
  if (moveToLeft) {
    spoonBaseHeight -= 5
  }

  let spoonBase = document.getElementById('spoonBase')
  spoonBase.style.height = `${spoonBaseHeight}px`
}

function spoonBaseContentHeight() {
  let spoonBaseContentHeight = 30
  const inputsLenght = getInputsLenght()

  const moveToLeft = initialPosition + (moveSpoonPixels * inputsLenght) > finalPosition && Number(String(initialPosition + (moveSpoonPixels * inputsLenght))[0]) % 2 === 1
  if (moveToLeft) {
    spoonBaseContentHeight -= 5
  }

  let spoonBase = document.getElementById('spoonBaseContent')
  spoonBase.style.height = `${spoonBaseContentHeight}px`
}

// Apenas adiciono os eventos pra cada que algo for digitado eles atualizarem os valores que são importantes e chamarem as funções acima
textfield1.addEventListener('input', () => {
  textfield1Lenght = String(textfield1.value).length

  moveSpoon()
  spoonCableHeight()
  spoonBaseHeight()
  spoonBaseContentHeight()
})

textfield2.addEventListener('input', () => {
  textfield2Lenght = String(textfield2.value).length

  moveSpoon()
  spoonCableHeight()
  spoonBaseHeight()
  spoonBaseContentHeight()
})
