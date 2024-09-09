
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.querySelector('input').value;
    if (email) {
        alert('Thanks for registering!');
    } else {
        alert('Please enter a valid email.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let statsTriggered = false;

    // Function to animate the numbers
    function animateStats() {
        const successRate = document.getElementById('success-rate');
        const doctorsCount = document.getElementById('doctors-count');
        const patientsCount = document.getElementById('patients-count');
        const satisfactionRate = document.getElementById('satisfaction-rate');

        // Helper function to animate each stat
        function animateValue(element, start, end, duration) {
            let startTime = null;
            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                element.innerText = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            };
            requestAnimationFrame(step);
        }

        // Trigger the animations once (when in viewport)
        if (!statsTriggered) {
            animateValue(successRate, 0, 95, 2000);  // 95%
            animateValue(doctorsCount, 0, 1500, 2000);  // 1,500+
            animateValue(patientsCount, 0, 3000, 2000);  // 3,000+
            animateValue(satisfactionRate, 0, 100, 2000);  // 100%
            statsTriggered = true;
        }
    }

    // Check if the statistics section is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    }

    // Event listener for scroll
    window.addEventListener('scroll', function() {
        const statsSection = document.querySelector('.statistics-section');
        if (isInViewport(statsSection)) {
            animateStats();
        }
    });

    // Sticky navbar logic
    let lastScrollPosition = 0;
    const navbar = document.querySelector('header');

    window.addEventListener('scroll', function() {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > lastScrollPosition) {
            // Scrolling down - hide the navbar
            navbar.classList.add('hidden-navbar');
        } else {
            // Scrolling up - show the navbar
            navbar.classList.remove('hidden-navbar');
        }

        // Update last scroll position
        lastScrollPosition = currentScrollPosition;
    });
});
