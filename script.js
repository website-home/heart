// script.js
window.addEventListener('load', function () {
    // Example JavaScript to interact with elements if needed.
    const heart = document.querySelector('.heart');
    const letterA = document.querySelector('.letter-A');
    const letterM = document.querySelector('.letter-M');

    // Adding a simple effect for when the heart is clicked
    heart.addEventListener('click', function () {
        alert('You clicked the heart!');
    });

    // Animation of letters when they are in view (using scroll event)
    window.addEventListener('scroll', function () {
        let scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            letterA.style.transform = 'translateX(0)';
            letterM.style.transform = 'translateX(0)';
        }
    });
});
