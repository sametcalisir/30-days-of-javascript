// Exercise Level 3

// 1. Check the requirement of this project from both images(jpg and gif). All the data and CSS has been implemented using JavaScript only. The data is found on starter folder project_3. The drop down button has been created using details HTML element.
import asabenehChallenges2020 from "./challenges_info.js";

document.body.style.fontFamily = "sans-serif, helvetica";
let wrapper = document.querySelector(".wrapper");

let getDate = () => {
  let d = new Date();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let monthIndex = d.getMonth();
  let year = d.getFullYear();
  let date = d.getDate();
  let hour = d.getHours();
  let mins = d.getMinutes();

  date = date < 10 ? "0" + date : date;
  hour = hour < 10 ? "0" + hour : hour;
  mins = mins < 10 ? "0" + mins : mins;

  return `${months[monthIndex]} ${date}, ${year}  ${hour}:${mins}`;
};

let generateColor = () => {
  let alphanums = "0123456789abcdef";
  let colorArr = [];
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 16);
    colorArr.push(alphanums[index]);
  }
  return "#" + colorArr.join("");
};

let h1 = document.createElement("h1");
h1.innerHTML = "Asabeneh Yetayeh Challenges in <strong>2025</strong>";
h1.style.textAlign = "center";
h1.style.fontSize = "20px";
h1.style.fontWeight = "400";
h1.style.marginBottom = "5px";
h1.style.padding = "5px";
wrapper.appendChild(h1);

let yearText = document.querySelector("strong");
yearText.style.fontSize = "40px";
setInterval(() => (yearText.style.color = generateColor()), 1000);

let h3 = document.createElement("h3");
h3.textContent = "30DaysOfJavaScript Challenge";
h3.style.fontWeight = "370";
h3.style.fontSize = "15px";
h3.style.textDecoration = "underline";
h3.style.textAlign = "center";
h3.style.padding = "3px";
h3.style.margin = "0px";
wrapper.appendChild(h3);

let date = document.createElement("h4");
date.textContent = getDate();
date.style.fontSize = "12px";
date.style.padding = "6px";
date.style.margin = "auto";
date.style.textAlign = "center";
date.style.width = "15%";
date.style.fontWeight = "400";
date.style.marginBottom = "5px";
setInterval(() => {
  date.textContent = getDate();
  date.style.backgroundColor = generateColor();
}, 1000);
wrapper.appendChild(date);

let list = document.createElement("ul");
list.style.listStyleType = "none";
list.style.width = "80%";
list.style.margin = "auto";

// Create an item for each challenge
asabenehChallenges2020.challenges.forEach((x, index) => {
  let item = document.createElement("li");

  // Flex settings
  item.style.display = "flex";
  item.style.justifyContent = "space-between";
  item.style.alignItems = "center";
  item.style.gap = "10px";

  // Challenge name
  let titleSpan = document.createElement("span");
  titleSpan.textContent = x.name;
  titleSpan.style.flex = "2";
  titleSpan.style.fontWeight = "500";

  // Dropdown (details)
  let dropdown = document.createElement("details");
  dropdown.style.flex = "1";
  dropdown.style.cursor = "pointer";

  let summary = document.createElement("summary");
  summary.textContent = x.name.split(" ")[x.name.split(" ").length - 1];
  summary.style.outline = "none";
  summary.style.fontWeight = "500";
  dropdown.appendChild(summary);

  let topics = document.createElement("ul");
  topics.style.listStyleType = "none";
  topics.style.margin = "10px";

  x.topics.forEach((i) => {
    let topicItem = document.createElement("li");
    topicItem.textContent = i;
    topicItem.style.padding = "5px 0";
    topics.appendChild(topicItem);
  });

  dropdown.appendChild(topics);

  // Status
  let statusSpan = document.createElement("span");
  statusSpan.textContent = x.status;
  statusSpan.style.flex = "1";
  statusSpan.style.textAlign = "right";
  statusSpan.style.fontWeight = "bold";

  // Color adjustment
  if (x.status.toLowerCase() === "done") {
    item.style.backgroundColor = "#8ee08e";
  } else if (x.status.toLowerCase() === "ongoing") {
    item.style.backgroundColor = "#f4f46e";
  } else if (x.status.toLowerCase() === "coming") {
    item.style.backgroundColor = "#f58a8a";
  }

  item.appendChild(titleSpan);
  item.appendChild(dropdown);
  item.appendChild(statusSpan);

  item.setAttribute("id", "listed-style-" + (index + 1));
  item.style.border = "1px solid blue";
  item.style.padding = "10px";
  item.style.margin = "5px auto";
  item.style.width = "90%";
  item.style.borderRadius = "5px";

  list.appendChild(item);
});

wrapper.appendChild(list);
