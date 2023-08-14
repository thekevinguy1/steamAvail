const kevinButton = document.getElementById("kevinButton");
const erikButton = document.getElementById("erikButton");
const displayArea = document.getElementById("displayArea");

let currentState = "none";

kevinButton.addEventListener("click", () => {
  if (currentState === "none") {
    currentState = "kevin";
  } else if (currentState === "kevin") {
    currentState = "none";
  }
  displayState();
});

erikButton.addEventListener("click", () => {
  if (currentState === "none") {
    currentState = "erik";
  } else if (currentState === "erik") {
    currentState = "none";
  }
  displayState();
});

function displayState() {
  displayArea.textContent = currentState.charAt(0).toUpperCase() + currentState.slice(1);
}

// Initial display
displayState();
