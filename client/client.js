console.log("Hello world");

const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading');

loadingElement.style.display = 'none';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');

    const bark = {
        name,
        content
    };

    console.log(bark);
    loadingElement.style.display = '';
    form.style.display = "none";
})
