// access elements
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
// create a counter for loop
let count = 0;
// forEatch will pass buttons one by one
btns.forEach(function (btn) {
  //apply eventListener on passing button
  btn.addEventListener("click", function (e) {
    //check which buton is passing by appling method .curruntTarget and store it in a variable
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("reset")) {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "Red";
    }
    if (count === 0) {
      value.style.color = "#102a42";
    }
    value.textContent = count;
  });
});
