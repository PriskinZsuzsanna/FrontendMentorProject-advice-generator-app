const id = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const dice = document.querySelector(".circle");
const url = "https://api.adviceslip.com/advice";

window.addEventListener("load", fetchData)

dice.addEventListener("click", fetchData)

function fetchData () {
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        const dataId = data.slip.id
        const dataAdvice = data.slip.advice

        id.innerHTML = dataId;
        adviceText.innerHTML = `
        "${dataAdvice}"
        `;

        dice.classList.add("disabled");

        setTimeout(() => {
            dice.classList.remove("disabled")
        }, 1500)
    })
}