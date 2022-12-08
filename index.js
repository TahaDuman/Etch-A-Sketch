/* dom stuff */
const container = document.getElementById("container")
const changeSizeBtn = document.getElementById("change-size-btn")
const box = document.querySelectorAll(".box")
const resetBtn = document.getElementById("reset-btn")

let CURRENT_COLOR = "#14e34b"
const DEFAULT_COLOR = "#191b1c"
let lastGrid = [16, 16]
makeDivs(16, 16)

function makeDivs(cols, rows) {
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
  container.innerHTML = ""
  makeDivs(lastGrid[0], lastGrid[1])
  container.style.backgroundColor = `${DEFAULT_COLOR}`
})
/* change grid size */
changeSizeBtn.addEventListener("click", () => {
  let newSize = prompt("Size: (type like = 5x5)")
  newSizeArray = newSize.split("x")
  lastGrid = newSizeArray
  makeDivs(newSizeArray[0], newSizeArray[1])
})
