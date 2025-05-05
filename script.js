const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("clear")) {
      currentInput = "";
      display.textContent = "0";

    } else if (value === "←") {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || "0";

    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
      } catch {
        display.textContent = "Error";
        currentInput = "";
      }

    } else {
      // If current display is "0", replace it
      if (display.textContent === "0" && value !== ".") {
        currentInput = value;
      } else {
        currentInput += value;
      }
      display.textContent = currentInput;
    }
  });
});
