// Exercise Level 2

// 1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
const elementStyle = document.querySelectorAll("p");
elementStyle[0].style.color = "#00b894";
elementStyle[1].style.backgroundColor = "#fdcb6e";
elementStyle[2].style.fontFamily = "REM";
elementStyle[3].style.border = "1px solid #000000";

// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
const allSelect = document.querySelectorAll("p");
allSelect.forEach((element, i) => {
  if (i % 2 == 0) {
    element.style.color = "green";
  } else {
    element.style.color = "red";
  }
});
