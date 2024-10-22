const toggleSkills = document.getElementById("toggle-skills");
const skillsSection = document.getElementById("Skills");

toggleSkills.addEventListener("click", () => {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
    } else {
        skillsSection.style.display = "none";
    }
});
