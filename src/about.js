function createAboutPage() {
    const aboutSection = document.createElement('section');
    aboutSection.classList.add('about');

    const heading = document.createElement('h1');
    heading.textContent = 'About Us';
    aboutSection.appendChild(heading);

    const description = document.createElement('p');
    description.textContent = 'Welcome to our restaurant! We serve the best food in town with fresh ingredients and a lot of love. Come and enjoy a great meal with us!';
    aboutSection.appendChild(description);

    return aboutSection;
}

export default createAboutPage;