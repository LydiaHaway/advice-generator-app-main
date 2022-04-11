const id = document.querySelector(".advideID");
const advice = document.querySelector(".advice");
const icon = document.getElementById("icon");

function altAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
            id.textContent = `advice # ${data.slip.id}`;
            advice.textContent = `"${data.slip.advice}"`;
        });
}

altAdvice();

icon.addEventListener("click", () => {
    altAdvice(); 
}
)

