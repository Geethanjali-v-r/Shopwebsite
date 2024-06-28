// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Dropdown menu functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            const menu = dropdown.querySelector('.dropdown-menu');
            menu.style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', () => {
            const menu = dropdown.querySelector('.dropdown-menu');
            menu.style.display = 'none';
        });
    });

    // Search functionality
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const categories = document.querySelectorAll('.nav-list > li > a');

        categories.forEach(category => {
            const categoryName = category.textContent.toLowerCase();
            if (categoryName.includes(searchTerm)) {
                category.parentElement.style.display = 'block';
            } else {
                category.parentElement.style.display = 'none';
            }
        });
    });
});
