function createHomePage() {
    const home = document.createElement('div');
    home.classList.add('home');

    const welcomeMessage = document.createElement('h1');
    welcomeMessage.textContent = 'Welcome to Our Restaurant!';
    home.appendChild(welcomeMessage);

    const description = document.createElement('p');
    description.textContent = 'Enjoy the finest dining experience with us. We offer a variety of dishes made from the freshest ingredients.';
    home.appendChild(description);

    const hours = document.createElement('div');
    hours.classList.add('hours');
    hours.innerHTML = `
        <h2>Hours</h2>
        <p>Monday: 8am - 8pm</p>
        <p>Tuesday: 8am - 8pm</p>
        <p>Wednesday: 8am - 8pm</p>
        <p>Thursday: 8am - 8pm</p>
        <p>Friday: 8am - 10pm</p>
        <p>Saturday: 10am - 10pm</p>
        <p>Sunday: 10am - 8pm</p>
    `;
    home.appendChild(hours);

    const location = document.createElement('div');
    location.classList.add('location');
    location.innerHTML = `
        <h2>Location</h2>
        <p>123 Food Street, Flavor Town, USA</p>
    `;
    home.appendChild(location);

    return home;
}


export default createHomePage;