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


const temperatureC = 5;
const windSpeedKmh = 10;
const conditions = "Clear";

function calculateWindChill(temp, wind) {
    return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16))).toFixed(2);
}

function displayWeather() {
    document.getElementById("temperatureDisplay").textContent = `Temperature: ${temperatureC} °C`;

    document.getElementById("conditionsDisplay").textContent = `Conditions: ${conditions}`;

    document.getElementById("windDisplay").textContent = `Wind: ${windSpeedKmh} km/h`;

    let windChill;
    
    if (temperatureC <= 10 && windSpeedKmh > 4.8) {
        windChill = calculateWindChill(temperatureC, windSpeedKmh);
    } else {
        windChill = "N/A";
    }
    
    document.getElementById("windChillDisplay").textContent = `Wind Chill: ${windChill} °C`;
}

window.onload = displayWeather;
