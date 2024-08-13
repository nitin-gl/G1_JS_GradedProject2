let currentIndex = 0;
let applicants = [];

fetch('Data.json')
    .then(response => response.json())
    .then(data => {
        applicants = data;
        displayApplicant(currentIndex);
    });

document.getElementById('next').addEventListener('click', function() {
    if (currentIndex < applicants.length - 1) {
        currentIndex++;
        displayApplicant(currentIndex);
    }
});

document.getElementById('prev').addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        displayApplicant(currentIndex);
    }
});

document.getElementById('search').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const filteredApplicants = applicants.filter(applicant => applicant.jobTitle.toLowerCase().includes(searchValue));
    if (filteredApplicants.length > 0) {
        currentIndex = 0;
        applicants = filteredApplicants;
        displayApplicant(currentIndex);
    } else {
        document.getElementById('error-message').textContent = 'Invalid search or No applications for this job';
    }
});

function displayApplicant(index) {
    const applicant = applicants[index];
    document.getElementById('resume-details').innerHTML = `
        <h2>${applicant.name}</h2>
        <p>Job Title: ${applicant.jobTitle}</p>
        <p>Experience: ${applicant.experience}</p>
        <p>Projects: ${applicant.projects}</p>
        <p>Achievements: ${applicant.achievements}</p>
        <p>Personal Details: ${applicant.personalDetails}</p>
    `;
    document.getElementById('prev').style.display = index === 0 ? 'none' : 'inline';
    document.getElementById('next').style.display = index === applicants.length - 1 ? 'none' : 'inline';
}
