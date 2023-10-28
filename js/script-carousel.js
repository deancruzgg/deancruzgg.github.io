if (window.matchMedia("(min-width: 999px)").matches) {

    const track = document.getElementById("image-track");

    const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

    const handleOnUp = () => {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
    }

    const handleOnMove = e => {
        if (track.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
            nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        track.dataset.percentage = nextPercentage;

        track.animate({
            transform: `translate(${nextPercentage}%, -50%)`
        }, { duration: 1200, fill: "forwards" });

        for (const image of track.getElementsByClassName("image")) {
            image.animate({
                objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
        }
    }

    /* -- Had to add extra lines for touch events -- */

    window.onmousedown = e => handleOnDown(e);

    window.ontouchstart = e => handleOnDown(e.touches[0]);

    window.onmouseup = e => handleOnUp(e);

    window.ontouchend = e => handleOnUp(e.touches[0]);

    window.onmousemove = e => handleOnMove(e);

    window.ontouchmove = e => handleOnMove(e.touches[0]);
}

if (window.matchMedia("(min-width: 999px)").matches) {
    const track = document.getElementById("image-track");
    const period = 35000;
    let direction = -1;
    let percentage = 0;

    const animateImage = () => {
        percentage += (direction * 100 / period) * 16;

        // Edit this to adjust how far the track goes before it oscillates
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
