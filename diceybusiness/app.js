// DOM Variables
var dieContainer = document.querySelector(".die-container");
var generateBtn = document.querySelector(".generate-btn");
var rerollBtn = document.querySelector(".reroll-btn");
var sumBtn = document.querySelector(".sum-btn");
// Tracker
var dieTotal = document.querySelector(".die-total-num");
// Create Die
var Die = /** @class */ (function () {
    function Die() {
        // Create dies
        var _this = this;
        this.value = this.roll(1, 7);
        this.die = document.createElement("div");
        this.die.className = "die";
        this.die.textContent = this.value.toString();
        dieContainer.appendChild(this.die);
        // Change die number individually
        this.die.addEventListener("click", function () {
            _this.die.textContent = _this.roll(1, 7).toString();
            _this.value = Number(_this.die.textContent);
        });
        // Reroll all dies
        rerollBtn.addEventListener("click", function () {
            _this.die.textContent = _this.roll(1, 7).toString();
            _this.value = Number(_this.die.textContent);
        });
        // Remove a die
        this.die.addEventListener("dblclick", function (e) {
            var allDie = document.querySelectorAll(".die");
            var targetElement = e.target;
            allDie.forEach(function (all) {
                if (all === targetElement) {
                    targetElement.remove();
                }
            });
        });
    }
    Die.prototype.roll = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    return Die;
}());
// Generate new dies on click
generateBtn.addEventListener("click", generateDie);
function generateDie() {
    var newDie = new Die();
}
// Get the sum of all dies
sumBtn.addEventListener("click", sumDice);
function sumDice() {
    var updatedTotal = 0;
    var dice = document.querySelectorAll(".die");
    dice.forEach(function (die) {
        updatedTotal += Number(die.textContent);
    });
    dieTotal.innerHTML = "The total is: <span class=\"highlight\">" + updatedTotal + "</span>";
    var highlight = document.querySelector(".highlight");
    highlight.style.color = "rgb(" + randomRGB() + ", " + randomRGB() + ", " + randomRGB() + ")";
}
// Change the total num's color
function randomRGB() {
    return Math.floor(Math.random() * 255);
}
