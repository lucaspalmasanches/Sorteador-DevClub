const inputMin = document.getElementById("input-min")
const inputMax = document.getElementById("input-max")
const sortButton = document.getElementById("sort-button")
const resultDisplay = document.getElementById("result-display")

const generateNumber = () => {
    const rawMin = parseFloat(inputMin.value)
    const rawMax = parseFloat(inputMax.value)

    resultDisplay.style.color = "#AEC346"

    if (isNaN(rawMin) || isNaN(rawMax)) {
        resultDisplay.textContent = "Por favor, insira números válidos."
        resultDisplay.style.color = "#FF6347"
        setTimeout(() => {
            resultDisplay.textContent = ""
            resultDisplay.style.color = "#AEC346"
        }, 3000)
        return
    }

    if (!Number.isInteger(rawMin) || !Number.isInteger(rawMax)) {
        resultDisplay.textContent = "Por favor, insira apenas números inteiros."
        resultDisplay.style.color = "#FF6347"
        setTimeout(() => {
            resultDisplay.textContent = ""
            resultDisplay.style.color = "#AEC346"
        }, 3000)
        return
    }

    if (rawMin < 1 || rawMax < 1) {
        resultDisplay.textContent = "Os números devem ser maiores ou iguais a 1."
        resultDisplay.style.color = "#FF6347"
        setTimeout(() => {
            resultDisplay.textContent = ""
            resultDisplay.style.color = "#AEC346"
        }, 3000)
        return
    }

    if (rawMin >= rawMax) {
        resultDisplay.textContent = "O valor 'entre' deve ser menor que 'e'."
        resultDisplay.style.color = "#FF6347"
        setTimeout(() => {
            resultDisplay.textContent = ""
            resultDisplay.style.color = "#AEC346"
        }, 3000);
        return
    }

    const min = Math.ceil(rawMin)
    const max = Math.floor(rawMax)

    const result = Math.floor(Math.random() * (max - min + 1)) + min

    resultDisplay.textContent = result
}

sortButton.addEventListener("click", generateNumber)