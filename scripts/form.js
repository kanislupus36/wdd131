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



const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate the select options
const productSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Increment review count in localStorage on page load
window.onload = () => {
    const reviewCount = localStorage.getItem('reviewCount') || 0;
    localStorage.setItem('reviewCount', parseInt(reviewCount) + 1);
};