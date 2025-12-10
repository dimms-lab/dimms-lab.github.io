// DIMMS Lab Navigation Fix
// Ensures mobile hamburger menu functionality works properly

document.addEventListener('DOMContentLoaded', function() {
    // Get navigation elements
    const nav = document.querySelector('#site-nav');
    const menuButton = document.querySelector('.greedy-nav > button');
    const hiddenLinks = document.querySelector('.greedy-nav .hidden-links');
    const visibleLinks = document.querySelector('.greedy-nav .visible-links');

    if (!menuButton || !hiddenLinks || !visibleLinks) {
        console.log('Navigation elements not found');
        return;
    }

    // Function to populate hidden menu with ALL navigation items
    function populateMobileMenu() {
        // Get all menu items except the site title and theme toggle
        const menuItems = visibleLinks.querySelectorAll('.masthead__menu-item:not(.masthead__menu-item--lg):not(#theme-toggle)');

        // Clear existing hidden links
        hiddenLinks.innerHTML = '';

        // Add each menu item to hidden links
        menuItems.forEach(function(item) {
            const link = item.querySelector('a');
            if (link && link.textContent.trim()) {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = link.href;
                a.textContent = link.textContent.trim();
                li.appendChild(a);
                hiddenLinks.appendChild(li);
            }
        });

        console.log('Mobile menu populated with ' + hiddenLinks.children.length + ' items');
    }

    // Populate mobile menu on load
    populateMobileMenu();

    // Handle hamburger button click
    menuButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        const isHidden = hiddenLinks.classList.contains('hidden');

        if (isHidden) {
            hiddenLinks.classList.remove('hidden');
            menuButton.classList.add('close');
            menuButton.setAttribute('aria-expanded', 'true');
        } else {
            hiddenLinks.classList.add('hidden');
            menuButton.classList.remove('close');
            menuButton.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menuButton.contains(e.target) && !hiddenLinks.contains(e.target)) {
            hiddenLinks.classList.add('hidden');
            menuButton.classList.remove('close');
            menuButton.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu when clicking a link
    hiddenLinks.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            hiddenLinks.classList.add('hidden');
            menuButton.classList.remove('close');
            menuButton.setAttribute('aria-expanded', 'false');
        }
    });

    // Set initial state
    hiddenLinks.classList.add('hidden');
    menuButton.setAttribute('aria-expanded', 'false');

    // Re-populate on resize (in case items change)
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(populateMobileMenu, 250);
    });

    console.log('DIMMS Lab navigation fix applied successfully');
});
