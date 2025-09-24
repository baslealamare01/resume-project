// =========================
// Define Variables (Data)
// =========================
let name = "Basleal Mezgebu";
let education = "Oral Roberts University";
let experience = "Tutoring, Museum Docent, and Media Production";

// =========================
// Connect Variables to HTML Elements (Display Info on Page)
// =========================
document.getElementById("name").textContent = name;
document.getElementById("education").textContent = "Education: " + education;
document.getElementById("experience").textContent = "Experience: " + experience;

// Log to the console
console.log("Hello, my name is " + name)

// =========================
// Skills Section
// =========================

// Define a list of skills
let skills = ["Organization", "Attention to Detail", "Technical Media Skills"];

// Loop through skills array and create a list in HTML
let skillsList = document.createElement("ul");
for (let i = 0; i < skills.length; i++) {
let li = document.createElement("li");
li.textContent = skills[i];
skillsList.appendChild(li);
}
document.body.appendChild(skillsList);

// =========================
// Fun Fact Section
// =========================

// Function to show a pop-up fun fact when called
function showFunFact() {
alert("Fun Fact: I enjoy coming up with creative and big ideas!");
}

// =========================
// Theme Changer (Interactivity/Personalization)
// =========================
function changeTheme() {
    let theme = document.getElementById("theme").value;
    if (theme === "dark") {
        document.body.style.backgroundColor = "#3493dbff";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "#f9fafc";
        document.body.style.color = "black";
    }
}


// =========================
// End of Script
// =========================


// Github Link: https://github.com/baslealamare01/resume-project.git

// =========================
// Reflection Answers
// =========================

// 1. Following the correct syntax and going through all the steps was easier this time because we have practiced it a couple of times in class. 
// 2. The most challenging part was accidentally writing the lines meant for JavaScript inside the HTML (and vice versa). I solved this by reviewing the project we did in class.
// 3. I would like to learn more about changing the appearance of the page, such as adding colors, images, and enhancing interactivity. 
// 4. I learned that we should always follow the correct functions and syntax appropriate for the specific task, so that the page will work and look right.