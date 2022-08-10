//choose the container u want to put the stuff in 
const container = document.querySelector("#container");
// creating a paragraph inside the container
const para = document.createElement("p");
//adding class selector to <p></p>
para.classList.add("para")
//adding text to the paragraph.
para.textContent = "Hey I'm Red!";
//adding this node to the container 
container.appendChild(para);

const header = document.createElement("h3");
header.classList.add("header");
header.textContent = "I'm a blue h3";
container.appendChild(header);

const node1 = document.createElement("div");
node1.classList.add("node1");
node1.style.backgroundColor = "pink";
node1.style.border = "thick solid black"

const header2 = document.createElement("h1");
header2.classList.add("header2");
header2.textContent = "I'm in a div."

const para2 = document.createElement("p");
para2.classList.add("para2");
para2.textContent = "ME TOO!";

node1.appendChild(header2);
node1.appendChild(para2);
container.appendChild(node1);

