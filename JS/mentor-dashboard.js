const statistics = document.querySelectorAll('.statistic');

statistics.forEach(statistic => {
    const numberElement = statistic.querySelector('h2');

    const originalNumber = numberElement.textContent;
    console.log(`Original number for this statistic: ${originalNumber}`); // Optional: for debugging
});

function scrollToSection() {
            const target = document.getElementById('schedule');
            target.scrollIntoView({ behavior: 'smooth' });
        }