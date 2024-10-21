var toggleButton = document.getElementById("toggle-skills");
var skillsContainer = document.getElementById("Skills");

toggleButton.addEventListener("click", function () {
    if (skillsContainer.style.display === "none") {
        skillsContainer.style.display = "block";
    } else {
        skillsContainer.style.display = "none";
    }
});
