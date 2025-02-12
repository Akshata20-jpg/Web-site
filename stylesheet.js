document.querySelector('button').addEventListener('click', () => {
    alert('Button clicked!');
});


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted!');
});

