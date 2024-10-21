const toggleskills = document.getElementById("toggle-skills") as HTMLButtonElement;
const Skills = document.getElementById("Skills") as HTMLElement;

toggleskills.addEventListener("click", () => {
    if (Skills.style.display === "none") {
        Skills.style.display = "block";
    } else {
        Skills.style.display = "none";
    }
});
