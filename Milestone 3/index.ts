// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement | null;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement | null;

// Ensure the form exists
if (form && resumeDisplayElement) {
    // Handle form submission
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // Prevent page reload

        // Collect input values with null-checks
        const name = (document.getElementById('name') as HTMLInputElement | null)?.value || '';
        const email = (document.getElementById('email') as HTMLInputElement | null)?.value || '';
        const phone = (document.getElementById('phone') as HTMLInputElement | null)?.value || '';
        
        // Correctly cast the textarea elements with null-checks
        const education = (document.getElementById('education') as HTMLTextAreaElement | null)?.value || '';
        const experience = (document.getElementById('experience') as HTMLTextAreaElement | null)?.value || '';
        const skills = (document.getElementById('skills') as HTMLTextAreaElement | null)?.value || '';

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

        // Display the generated resume
        resumeDisplayElement.innerHTML = resumeHTML;
    });
} else {
    console.error('Form or resume display element is missing.');
}
