//* For my information, to add scrolling transition feature with javascript:

/*
document.addEventListener('scroll', function() {
    const navBar = document.querySelector('.navBar');
    const navBarHeight = 100;

    const distanceFromTop = Math.abs(
        document.body.getBoundingClientRect().top
    );  
    
    if (distanceFromTop >= navBarHeight) navBar.classList.add('fixed-top');
    else navBar.classList.remove('fixed-top');
});
*/