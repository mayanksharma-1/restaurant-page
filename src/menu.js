function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Menu';
    menu.appendChild(menuTitle);

    const menuItems = [
        { name: 'Pizza', description: 'Delicious cheese pizza', price: '$10' },
        { name: 'Burger', description: 'Juicy beef burger', price: '$8' },
        { name: 'Pasta', description: 'Creamy Alfredo pasta', price: '$12' }
    ];

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const itemName = document.createElement('h2');
        itemName.textContent = item.name;
        menuItem.appendChild(itemName);

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;
        menuItem.appendChild(itemDescription);

        const itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;
        menuItem.appendChild(itemPrice);

        menu.appendChild(menuItem);
    });

    return menu;
}


export default createMenu;