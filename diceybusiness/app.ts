// DOM Variables
const dieContainer = document.querySelector(".die-container");
const generateBtn = document.querySelector<HTMLElement>(".generate-btn");
const rerollBtn = document.querySelector<HTMLElement>(".reroll-btn");
const sumBtn = document.querySelector<HTMLElement>(".sum-btn");

// Tracker
const dieTotal = document.querySelector(".die-total-num");

// Create Die
class Die {
  value: number;
  die: HTMLDivElement;
  constructor() {
    // Create dies

    this.value = this.roll(1, 7);
    this.die = document.createElement("div");
    this.die.className = "die";
    this.die.textContent = this.value.toString();
    dieContainer.appendChild(this.die);

    // Change die number individually

    this.die.addEventListener("click", () => {
      this.die.textContent = this.roll(1, 7).toString();
      this.value = Number(this.die.textContent);
    });

    // Reroll all dies

    rerollBtn.addEventListener("click", () => {
      this.die.textContent = this.roll(1, 7).toString();
      this.value = Number(this.die.textContent);
    });

    // Remove a die
    this.die.addEventListener("dblclick", (e) => {
      const allDie = document.querySelectorAll(".die");
      const targetElement = e.target as Element;
      allDie.forEach((all) => {
        if (all === targetElement) {
          targetElement.remove();
        }
      });
    });
  }

  roll(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}

// Generate new dies on click

generateBtn.addEventListener("click", generateDie);

function generateDie() {
  const newDie = new Die();
}

// Get the sum of all dies

sumBtn.addEventListener("click", sumDice);

function sumDice() {
  let updatedTotal: number = 0;
  const dice = document.querySelectorAll(".die");

  dice.forEach((die) => {
    updatedTotal += Number(die.textContent);
  });

  dieTotal.innerHTML = `The total is: <span class="highlight">${updatedTotal}</span>`;

  const highlight = document.querySelector<HTMLElement>(".highlight");
  highlight.style.color = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
}

// Change the total num's color

function randomRGB() {
  return Math.floor(Math.random() * 255);
}
