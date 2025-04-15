// Exercise Level 1

// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
const firstParagraph = document.querySelector("p");
console.log(firstParagraph);

// 2. Get each of the the paragraph using document.querySelector('#id') and by their id
const paragraph1 = document.querySelector("#paragraph-1");
const paragraph2 = document.querySelector("#paragraph-2");
const paragraph3 = document.querySelector("#paragraph-3");
const paragraph4 = document.querySelector("#paragraph-4");

// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const allParagraphs = document.querySelectorAll("p");
for (let i = 0; i < allParagraphs.length; i++) {
  console.log(allParagraphs[i]);
}

// 4. Loop through the nodeList and get the text content of each paragraph
const text = document.querySelectorAll("p");
for (let i = 0; i < text.length; i++) {
  console.log(text[i].textContent);
}

// 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph
const fourthP = document.querySelector("#paragraph-4");
fourthP.textContent = "Fourth Paragraph";

// 6. Set id and class attribute for all the paragraphs using different attribute setting methods
const element = document.querySelectorAll("p");
element.forEach((paragraph, index) => {
  paragraph.setAttribute("id", "paragraph-" + (index + 1));
  paragraph.setAttribute("class", "custom-paragraph" + (index + 1));
});

console.log(element);
