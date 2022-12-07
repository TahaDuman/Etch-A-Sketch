const container = document.getElementById("container")

function makeDivs(cols, rows) {
  for (let i = 0; i < cols * rows; i++) {
    let div = document.createElement("div")
    container.style.cssText = `grid-template-columns: repeat(${cols}, 1fr); grid-template-rows: repeat(${rows}, 1fr);`
    div.className = "box"
    container.appendChild(div)
  }
}
makeDivs(16, 16)

container.addEventListener("mouseover", (event) => {
  event.target.style.cssText = "background-color: red;"
})
