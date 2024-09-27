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


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navItems = document.querySelector('.nav');

    hamburger.addEventListener('click', () => {
        navItems.classList.toggle('show'); // Toggle the 'show' class on nav items
        hamburger.innerHTML = navItems.classList.contains('show') ? '✖' : '&#9776;'; // Change icon
    });
});
