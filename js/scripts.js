/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 


window.addEventListener('DOMContentLoaded', event => {
    //Parallax
    const parallax_el = document.querySelectorAll(".parallax");
    let xValue = 0, yValue = 0;

    let rotateDegree = 0;

    function updateParallax(cursorPosition) {
        parallax_el.forEach(el => {
            let speedx = el.dataset.speedx;
            let speedy = el.dataset.speedy;
            let speedz = el.dataset.speedz;
            let rotateSpeed = el.dataset.rotation;
    
            let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
            let zValue = cursorPosition - parseFloat(getComputedStyle(el).left) * isInLeft;
    
            el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px))
             rotateY(${rotateDegree * rotateSpeed}deg)
             translateY(calc(-50% + ${yValue * speedy}px)) 
             perspective(2300px) translateZ(${zValue * speedz}px)`;
        });
    };

    updateParallax(0);

    window.addEventListener("mousemove", (e) => {
        xValue = e.clientX - window.innerWidth / 2;
        yValue = e.clientY - window.innerHeight / 2;

        rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

        updateParallax(e.clientX);
    });


    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.add('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});