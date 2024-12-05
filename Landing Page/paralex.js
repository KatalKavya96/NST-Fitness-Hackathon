document.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // Current scroll position
    const windowHeight = window.innerHeight; // Height of the viewport
    const parallaxSection = document.querySelector('.parallax');
    const parallaxText = document.querySelector('.parallax-text');

    // Adjustable start and end points
    const parallaxStart = parallaxSection.offsetTop - 300; // Start 30% earlier
    const parallaxEnd = parallaxSection.offsetTop + parallaxSection.offsetHeight -windowHeight * 0.9; // End 30% later

    // Ensure text only reacts within the parallax range
    if (scrollY >= parallaxStart && scrollY <= parallaxEnd) {
        const progress = (scrollY - parallaxStart) / (parallaxEnd - parallaxStart); // 0 to 1 range
        const scale = 0.8 + progress * 0.4; // Zoom from 0.8 to 1.2
        const opacity = Math.max(1 - Math.abs(progress - 0.5) * 2, 0); // Fade in/out around the midpoint

        // Apply transformations and opacity
        parallaxText.style.transform = `translate(-50%, -50%) scale(${scale})`;
        parallaxText.style.opacity = opacity;
        parallaxText.style.visibility = 'visible'; // Ensure it's visible
    } else {
        // Hide text when outside the range
        parallaxText.style.opacity = '0';
        parallaxText.style.visibility = 'hidden';
    }
});
