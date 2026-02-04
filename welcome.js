const btn = document.getElementById("runBtn");

let attempts = 0;

btn.addEventListener("mouseover", () => {
    attempts++;

    if (attempts < 8) {
        btn.style.left = Math.random() * 300 + "px";
        btn.style.top = Math.random() * 300 + "px";
        btn.innerText = attempts < 8 ? "Too slow " : "Almost there ";
    } else {
        btn.innerText = "Okay okay click ";
    }
});

btn.addEventListener("click", () => {
    window.location.href = "valentine.html";
});
