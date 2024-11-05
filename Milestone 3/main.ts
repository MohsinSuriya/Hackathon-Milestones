// Get references to the form and display area
const resumeform = document.getElementById('resume-form') as HTMLFormElement;
const education = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
resumeform.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value; // Correct for textarea
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value; // Correct for textarea
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value; // Correct for textarea

    // Generate the resume content dynamically
    const resumeHTML = `
        <h2><b>Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Display the generated resume in the resume-display element
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing.');
    }
});
