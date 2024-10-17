const msgContainer = document.querySelector('.msg-container')
const msg = document.querySelector('#msg')
const newGame = document.querySelector('#new-game')
const resetGame = document.querySelector('#reset')
const boxes = document.querySelectorAll('.box')
let nextPlayer = true
let condition
const winCondition = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
]
boxes.forEach((box) => {
   box.addEventListener("click", () => {
      if (nextPlayer) {
         box.innerText = "X"
         nextPlayer = false
      }
      else {
         box.innerText = "O"
         nextPlayer = true
      }
      box.disabled = true
      checkWinner()
   })
})
const showWinner = (winner) => {
   msg.innerText = `Congratulations! Winner is ${winner}`
   msgContainer.classList.remove('hide')
   disabledBoxes()
}
const disabledBoxes = () => {
   for (box of boxes) {
      box.disabled = true
   }
}
const reset = () => {
   nextPlayer = true
   msgContainer.classList.add('hide')
   for (box of boxes) {
      box.disabled = false
      box.innerText = ""
   }
}
const chectDraw = () => {
   const allBoxesFilled = [...boxes].every(box => box.innerText)
   if (allBoxesFilled) {
      msg.innerText = "Game is Draw"
      msgContainer.classList.remove('hide')
      disabledBoxes()
   }
}
const checkWinner = () => {
   for (conditions of winCondition) {
      let condition1 = boxes[conditions[0]].innerText
      let condition2 = boxes[conditions[1]].innerText
      let condition3 = boxes[conditions[2]].innerText

      if (condition1 != "" && condition2 != "" && condition3 != "") {
         if (condition1 == condition2 && condition2 == condition3) {
            showWinner(condition1)
         }
      }
   }
   chectDraw()
}
newGame.addEventListener("click", reset)
resetGame.addEventListener("click", reset)