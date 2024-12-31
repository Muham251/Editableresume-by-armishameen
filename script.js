// Get the form and output container elements
var resumeForm = document.getElementById('resumeform');
var resumeOutput = document.getElementById('resumeoutput');
// Function to generate the resume
function generateResume(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();
    // Get the input values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create the resume content
    var resumeContent = "\n    <div>\n      <h2>".concat(name, "'s Resume</h2>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n      <p><strong>Phone:</strong> ").concat(phone, "</p>\n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n      <h3>Experience</h3>\n      <p>").concat(experience, "</p>\n      <h3>Skills</h3>\n      <p>").concat(skills, "</p>\n    </div>\n  ");
    // Display the generated resume in the #resumeoutput div
    resumeOutput.innerHTML = resumeContent;
}
// Add an event listener to the form submit button
resumeForm.addEventListener('submit', generateResume);
