const display = document.getElementById("display")
const button = document.getElementById("button")
const inputNumber = parseFloat(document.getElementById("number").value)

let count = 0

button.onclick = function () {
  count += inputNumber
  display.textContent = count
}
