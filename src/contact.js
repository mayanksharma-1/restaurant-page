function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '📞 123-456-789';

    const address = document.createElement('p');
    address.textContent = '🏠 123 Some Street, SomePlace, India';

    // const restaurantLocation = document.createElement('img');
    // restaurantLocation.src = 'images/location.png';
    // restaurantLocation.alt = 'Restaurant Location';

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    // contact.appendChild(restaurantLocation);

    return contact;
}



export default createContact;