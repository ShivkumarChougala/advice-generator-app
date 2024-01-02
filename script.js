const adviceId = document.querySelector("#advice-id")
const adviceText = document.querySelector("#advice-text")
const adviceBtn = document.getElementById("#generate-btn")
const url = "https://api.adviceslip.com/advice"

async function getAdvice() {
    try {
        const res = await fetch(url);
        const {slip:{id, advice}} = await res.json();
        adviceId.innerText = id;
        adviceText.innerText = advice;
    } catch (error) {
        console.error("Failed to fetch advice: ", error);
    }
}

getAdvice()

adviceBtn.addEventListener("click", getAdvice);