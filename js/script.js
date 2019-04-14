const modal = document.querySelector('#modal');
const itemContainer = document.querySelector('#item-container');

// Make request to get items data
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(data => {
        // set some data without creating a backend to respond with it
        data = [
            {
                title: 'Mobile',
                description: 'Get notifications about new releases in our mobile app.',
                price: 10,
                icon: 'device.svg'
            },
            {
                title: 'Desktop',
                description: 'Enjoy new episodes on your laptop in browser with our web service, which supports all the platforms.',
                price: 15,
                icon: 'laptop.svg'
            },
            {
                title: 'TV',
                description: 'Watch your favorite series at home on large screen with our TV application.',
                price: 20,
                icon: 'monitor.svg'
            },
        ];

        for (let itemData of data) {
            let item = generateItem(itemData);
            itemContainer.appendChild(item);
        }

    })
    .catch(error => {
        console.log(error);
    });

function generateItem(itemData) {
    const templateString = `
        <div class="item">
            <div class="icon">
                <img src="/img/${itemData.icon}" alt="${itemData.title}">
            </div>
            <div class="title">${itemData.title}</div>
            <div class="description">${itemData.description}</div>
            <div class="price">
                <span class="sup">$</span><span class="middle">${itemData.price}</span><span class="sub"> / month</span>
            </div>
        </div>
    `;

    const container = document.createElement('div');
    container.innerHTML = templateString.trim();
    return container.firstChild;
}

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
