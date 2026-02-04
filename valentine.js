const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const statusText = document.getElementById("status");

let noClicks = 0;

noBtn.addEventListener("click", () => {
  noClicks++;

  // NO gets smaller
  const noScale = Math.max(1 - noClicks * 0.2, 0.2);
  noBtn.style.transform = `scale(${noScale})`;

  // YES gets bigger
  const yesScale = 1 + noClicks * 0.2;
  yesBtn.style.transform = `scale(${yesScale})`;

  statusText.textContent = "Are you sure? 😳";
});

yesBtn.addEventListener("click", () => {
  window.location.href = "loading.html";
});
