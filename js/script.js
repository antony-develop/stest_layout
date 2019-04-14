const modal = document.querySelector('#modal');
const itemContainer = document.querySelector('#item-container');

itemContainer.addEventListener('click', e => {
    const item = e.target.closest('.item');
    if (item) {
        modal.style.display = 'flex';
        let clone = item.cloneNode(true);

        modal.querySelector('.modal-body').innerHTML = '';
        modal.querySelector('.modal-body').appendChild(clone);
    }
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
