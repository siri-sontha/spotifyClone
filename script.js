// Sri Krishna

document.addEventListener("DOMContentLoaded", (event) =>
{

    const menu = document.querySelector('.menu');
    const phNav = document.querySelector('.phNav');
    const menuImg = document.querySelector('.menu img');

    menu.addEventListener('click', () => {

        if (phNav.style.display === 'block') {
            phNav.style.display = 'none';    // Hides phNav
            menuImg.src = 'images/menu.svg'; // Shows menu icon
        } else {
            phNav.style.display = 'block';    // Shows phNav
            menuImg.src = 'images/close.svg'; // Shows close icon
        }

    });

});

// Sri Krishna