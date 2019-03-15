const modal = document.querySelector('#modal');

document.querySelectorAll('.item').forEach(elem => {
    elem.addEventListener('click', e => {
        modal.style.display = 'flex';
        let clone = e.currentTarget.cloneNode(true);
        console.log(clone);

        modal.querySelector('.modal-body').innerHTML = '';
        modal.querySelector('.modal-body').appendChild(clone);

    });
});

modal.querySelector('.close-btn').addEventListener('click', e => {
    modal.style.display = 'none';
});

document.addEventListener('click', e => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('keydown', e => {
    if (e.key === "Escape") {
        modal.style.display = 'none';
    }
});