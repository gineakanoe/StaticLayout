document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const headerHeight = 100;

    const distanceFromTop = Math.abs(
        document.body.getBoundingClientRect().top
    );  if (distanceFromTop >= headerHeight) header.classList.add('fixed-top');
        else header.classList.remove('fixed-top');
});