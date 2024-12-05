const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.carousel-card');
let currentIndex = 0;

// Auto-scroll function
function autoScroll() {
    const cardWidth = cards[0].getBoundingClientRect().width + 20; // Card width + gap
    currentIndex++;
    if (currentIndex >= cards.length - 1) {
        currentIndex = 0; // Reset to the start
        track.style.transition = 'none'; // Prevent flicker
        track.style.transform = `translateX(0)`;
        setTimeout(() => {
            track.style.transition = 'transform 0.3s ease-in-out'; // Restore transition
        });
    } else {
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
}

// Start auto-scrolling every 2 seconds
setInterval(autoScroll, 2000);

// Adjust on window resize
window.addEventListener('resize', () => {
    track.style.transition = 'none'; // Disable transition during resize
    const cardWidth = cards[0].getBoundingClientRect().width + 20; // Adjust card width
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    setTimeout(() => {
        track.style.transition = 'transform 0.3s ease-in-out'; // Restore transition
    });
});
