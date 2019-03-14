document.querySelectorAll('.item').forEach(elem => {
    elem.addEventListener('mouseover', e => {
        e.currentTarget.style.backgroundColor = 'rgba(128, 128, 128, 0.1)';
    });

    elem.addEventListener('mouseleave', e => {
        e.currentTarget.style.backgroundColor = 'inherit';
    });
});