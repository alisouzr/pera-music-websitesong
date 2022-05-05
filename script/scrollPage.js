document.addEventListener('scroll', (e) => {
    const scroll = window.scrollY;
    const header = document.querySelector('.header-top-site');
    if (scroll > 0) {
        header.classList.add('scroll');
        document.querySelectorAll('.title').forEach(function (element) {
            element.style.color = '#FFFFFF';
        })
    } else {
        header.classList.remove('scroll');
        document.querySelectorAll('.title').forEach(function (element) {
            element.style.color = '#9c44d7';
        })

    }
});