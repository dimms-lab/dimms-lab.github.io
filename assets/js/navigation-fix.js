// DIMMS Lab Navigation Fix
// Ensures mobile hamburger menu functionality works properly

document.addEventListener('DOMContentLoaded', function() {
    // Find the hamburger button and hidden menu
    const menuButton = document.querySelector('.greedy-nav > button');
    const hiddenLinks = document.querySelector('.greedy-nav .hidden-links');
    const visibleLinks = document.querySelector('.greedy-nav .visible-links');
    
    if (menuButton && hiddenLinks) {
        // Remove any existing event listeners
        menuButton.replaceWith(menuButton.cloneNode(true));
        const newMenuButton = document.querySelector('.greedy-nav > button');
        
        // Add click event listener
        newMenuButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle the hidden class
            if (hiddenLinks.classList.contains('hidden')) {
                hiddenLinks.classList.remove('hidden');
                hiddenLinks.style.display = 'block';
                newMenuButton.setAttribute('aria-expanded', 'true');
            } else {
                hiddenLinks.classList.add('hidden');
                hiddenLinks.style.display = 'none';
                newMenuButton.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!newMenuButton.contains(e.target) && !hiddenLinks.contains(e.target)) {
                hiddenLinks.classList.add('hidden');
                hiddenLinks.style.display = 'none';
                newMenuButton.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Copy visible menu items to hidden menu for mobile
        if (visibleLinks && hiddenLinks) {
            const visibleItems = visibleLinks.querySelectorAll('.masthead__menu-item:not(.masthead__menu-item--lg):not(.persist)');
            hiddenLinks.innerHTML = ''; // Clear existing content
            
            visibleItems.forEach(function(item) {
                const link = item.querySelector('a');
                if (link) {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = link.href;
                    a.textContent = link.textContent;
                    a.className = 'masthead__menu-item-link';
                    li.appendChild(a);
                    hiddenLinks.appendChild(li);
                }
            });
        }
        
        // Set initial state
        hiddenLinks.classList.add('hidden');
        hiddenLinks.style.display = 'none';
        newMenuButton.setAttribute('aria-expanded', 'false');
        
        console.log('DIMMS Lab navigation fix applied successfully');
    }
    
    // Force white text color on navigation items
    const navItems = document.querySelectorAll('.greedy-nav .visible-links .masthead__menu-item a');
    navItems.forEach(function(item) {
        item.style.color = 'white';
        item.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.3)';
    });
    
    // Ensure site title is white
    const siteTitle = document.querySelector('.masthead__menu-item--lg a');
    if (siteTitle) {
        siteTitle.style.color = 'white';
        siteTitle.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.3)';
    }
});