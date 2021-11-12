// set inital value to zero
let count = 0;
// select value and buttons
const number = document.querySelector(".number");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("dec")) {
      count--;
    } else if (styles.contains("inc")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      number.style.color = "green";
    }
    if (count < 0) {
      number.style.color = "red";
    }
    if (count === 0) {
      number.style.color = "#222";
    }
    number.textContent = count;
  });
});
