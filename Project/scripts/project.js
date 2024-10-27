function setCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }
}

function setLastModifiedDate() {
    const lastModifiedDate = document.lastModified;
    const secondParagraph = document.querySelector('footer p:nth-of-type(2)');
    if (secondParagraph) {
        secondParagraph.textContent = `Last modified: ${lastModifiedDate}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setCopyrightYear();
    setLastModifiedDate();
});


document.getElementById('parkFeedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const parkName = document.getElementById('parkName').value;
    const overallRating = document.querySelector('input[name="overallRating"]:checked').value;
    const visitDate = document.getElementById('visitDate').value;
    const enjoyedActivities = Array.from(document.querySelectorAll('input[name="enjoyedActivities"]:checked')).map(input => input.value);
    const writtenReview = document.getElementById('writtenReview').value;
    const userName = document.getElementById('userName').value;

    // Store feedback in localStorage
    const feedback = {
        parkName,
        overallRating,
        visitDate,
        enjoyedActivities,
        writtenReview,
        userName
    };

    // Save feedback with a unique key (could use userName and parkName for uniqueness)
    const feedbackKey = `${userName}-${parkName}-${Date.now()}`;
    localStorage.setItem(feedbackKey, JSON.stringify(feedback));

    alert(`Thank you for your feedback on ${parkName}!`);

    // Optionally, reset the form after submission
    this.reset();
});

const parks = [
    { name: 'Zion National Park', description: 'Famous for its stunning canyons.' },
    { name: 'Bryce Canyon National Park', description: 'Home to unique hoodoos.' },
    { name: 'Arches National Park', description: 'Home to over 2,000 natural stone arches.' },
    { name: 'Canyonlands National Park', description: 'Features a vast landscape of canyons.' },
    { name: 'Capitol Reef National Park', description: 'Known for its Waterpocket Fold.' }
];

// Populate the park feedback dropdown
const parkSelect = document.getElementById('parkName');
parks.forEach(park => {
    const option = document.createElement('option');
    option.value = park.name;
    option.textContent = park.name;
    parkSelect.appendChild(option);
});

// Increment review count in localStorage on page load
window.onload = () => {
    const reviewCount = localStorage.getItem('reviewCount') || 0;
    localStorage.setItem('reviewCount', parseInt(reviewCount) + 1);
};
