if (window.matchMedia("(min-width: 999px)").matches) {
    const track = document.getElementById("image-track");
    let isDragging = false;

    const handleOnDown = e => {
        const isLink = e.target.tagName === 'A' || e.target.closest('a');
        if (!isLink) {
            isDragging = true;
            track.dataset.mouseDownAt = e.clientX;
        }
    };

    const handleOnUp = () => {
        if (isDragging) {
            isDragging = false;
            track.dataset.mouseDownAt = "0";
            track.dataset.prevPercentage = track.dataset.percentage;
        }
    };

    const handleOnMove = e => {
        if (!isDragging) return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
            nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        track.dataset.percentage = nextPercentage;

        track.animate([
            { transform: `translate(${nextPercentage}%, -50%)` }
        ], { duration: 1200, fill: "forwards" });

        for (const image of track.getElementsByClassName("image")) {
            image.animate([
                { objectPosition: `${100 + nextPercentage}% center` }
            ], { duration: 1200, fill: "forwards" });
        }
    };

    window.addEventListener('mousedown', e => handleOnDown(e));
    window.addEventListener('touchstart', e => handleOnDown(e.touches[0]));

    window.addEventListener('mouseup', handleOnUp);
    window.addEventListener('touchend', e => handleOnUp(e.touches[0]));

    window.addEventListener('mousemove', e => handleOnMove(e));
    window.addEventListener('touchmove', e => handleOnMove(e.touches[0]));
}

if (window.matchMedia("(min-width: 999px)").matches) {
    const track = document.getElementById("image-track");
    const period = 35000;
    let direction = -1;
    let percentage = 0;

    const animateImage = () => {
        percentage += (direction * 100 / period) * 16;

        if (percentage >= 0 || percentage <= -85) {
            direction = -direction;
        }

        track.dataset.percentage = percentage;

        track.style.transform = `translate(${percentage}%, -50%)`;

        for (const image of track.getElementsByClassName("image")) {
            image.style.objectPosition = `${100 + percentage}% center`;
        }

        requestAnimationFrame(animateImage);
    }

    animateImage();
}