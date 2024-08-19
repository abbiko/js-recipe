const display = document.getElementById("quiz-text")
const button1 = document.getElementById("choice-1")
const button2 = document.getElementById("choice-2")
const button3 = document.getElementById("choice-3")

button1.onclick = function () {
  display.textContent = "不正解"
}

button2.onclick = function () {
  display.textContent = "不正解"
}

button3.onclick = function () {
  display.textContent = "正解"
}
