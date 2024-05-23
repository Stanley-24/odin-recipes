document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-description');
    const description = document.getElementById('recipe-description');
    const links = document.querySelectorAll('a');

    toggleButton.addEventListener('click', function () {
        if (description.classList.contains('hidden')) {
            description.classList.remove('hidden');
            description.classList.add('fade-in');
            toggleButton.textContent = 'Hide Description';
        } else {
            description.classList.add('fade-out');
            setTimeout(() => {
                description.classList.add('hidden');
                description.classList.remove('fade-out');
            }, 500); // Duration of fade-out
            toggleButton.textContent = 'Show Description';
        }
    });

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.classList.add('link-hover');
        });
        link.addEventListener('mouseout', () => {
            link.classList.remove('link-hover');
        });
    });
});
