let name = "Basleal Mezgebu";
let education = "Oral Roberts University";
let experience = "Tutoring, Museum Docent, and Media Production";

document.getElementById("name").textContent = name;
document.getElementById("education").textContent = "Education: " + education;
document.getElementById("experience").textContent = "Experience: " + experience;

console.log("Hello, my name is " + name)

let skills = ["Organization", "Attention to Detail", "Technical Media Skills"];
let skillsList = document.createElement("ul");
for (let i = 0; i < skills.length; i++) {
let li = document.createElement("li");
li.textContent = skills[i];
skillsList.appendChild(li);
}
document.body.appendChild(skillsList);

function showFunFact() {
alert("Fun Fact: I enjoy coming up with creative and big ideas!");
}