/* dom stuff */
const container = document.getElementById("container")
const changeSizeBtn = document.getElementById("change-size-btn")
const box = document.querySelectorAll(".box")
const resetBtn = document.getElementById("reset-btn")
const changeColorBtn = document.getElementById("select-color-btn")
const eraserBtn = document.getElementById("eraser-btn")
const currentColorIndicator = document.getElementById("current-color-indicator")

const DEFAULT_COLOR = "#191b1c"
let CURRENT_COLOR = "#14e34b"
let lastGrid = [16, 16]

let picker = new Picker(changeColorBtn)
picker.setColor(CURRENT_COLOR)
//initial grid
makeGrids(16, 16)

function makeGrids(cols, rows) {
  // clearing grid so old grids don't add to each other
  clearGrid()
  for (let i = 0; i < cols * rows; i++) {
    let div = document.createElement("div")
    container.style.cssText = `grid-template-columns: repeat(${cols}, 1fr); grid-template-rows: repeat(${rows}, 1fr);`
    div.className = "box"
    container.appendChild(div)
  }
}

function clearGrid() {
  container.innerHTML = ""
  container.style.backgroundColor = `${DEFAULT_COLOR}`
}

/* change color */
container.addEventListener("mouseover", (event) => {
  event.target.style.cssText = `background-color: ${CURRENT_COLOR};`
})

/* reset btn */
resetBtn.addEventListener("click", () => {
  makeGrids(lastGrid[0], lastGrid[1])
  container.style.backgroundColor = `${DEFAULT_COLOR}`
  if (CURRENT_COLOR == DEFAULT_COLOR) {
    CURRENT_COLOR = "#14e34b"
    showCurrentColor()
  }
})

/* change grid size with button*/
changeSizeBtn.addEventListener("click", () => {
  let newSize = prompt("Size: (type like = 5)")
  newSizeArray = [newSize, newSize]
  lastGrid = newSizeArray
  makeGrids(newSizeArray[0], newSizeArray[1])
})

eraserBtn.addEventListener("click", () => {
  CURRENT_COLOR = DEFAULT_COLOR
  currentColorIndicator.style.backgroundColor = `${CURRENT_COLOR}`
})

// try to make them shorter
picker.onChange = function (color) {
  CURRENT_COLOR = color.rgbaString
  currentColorIndicator.style.backgroundColor = `${CURRENT_COLOR}`
}
picker.onDone = function (color) {
  CURRENT_COLOR = color.rgbaString
  currentColorIndicator.style.backgroundColor = `${CURRENT_COLOR}`
}
function showCurrentColor() {
  currentColorIndicator.style.backgroundColor = `${CURRENT_COLOR}`
}
currentColorIndicator.style.backgroundColor = `${CURRENT_COLOR}`
