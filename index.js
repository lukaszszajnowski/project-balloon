document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.anim-bg');
    console.log(elements);

    document.addEventListener("mousemove", function (event) {
        console.log(event);
        const {
            clientX,
            clientY
        } = event;

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        elements.forEach(element => {
            const ratioX = -element.getAttribute('ratioX');
            const ratioY = -element.getAttribute('ratioY');

            const moveX = clientX - centerX;
            const moveY = clientY - centerY;

            element.style.transform = `translate(${moveX * ratioX}px, ${moveY * ratioY}px)`;
        })
    })

})