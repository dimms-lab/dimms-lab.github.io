// DIMMS Lab Navigation Fix
// Ensures mobile hamburger menu functionality works properly

document.addEventListener('DOMContentLoaded', function() {
    // FORCE STATIC HEADER - NO SCROLLING BEHAVIOR
    const masthead = document.querySelector('.masthead');
    if (masthead) {
        masthead.style.position = 'static';
        masthead.style.top = 'auto';
        masthead.style.transform = 'none';
        masthead.style.willChange = 'auto';
        
        // Remove any scroll event listeners that might make it sticky
        masthead.classList.remove('sticky', 'fixed');
        masthead.removeAttribute('data-sticky');
    }
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
    
    // Force GOLD text color on navigation items - HIGHLY VISIBLE
    const navItems = document.querySelectorAll('.greedy-nav .visible-links .masthead__menu-item a, .greedy-nav a, .masthead a');
    navItems.forEach(function(item) {
        item.style.color = '#FFD700';  // BRIGHT GOLD
        item.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.8)';
        item.style.fontWeight = '700';
        item.style.fontSize = '1.1em';
    });
    
    // Ensure site title is GOLD and highly visible
    const siteTitle = document.querySelector('.masthead__menu-item--lg a');
    if (siteTitle) {
        siteTitle.style.color = '#FFD700';  // BRIGHT GOLD
        siteTitle.style.textShadow = '3px 3px 6px rgba(0, 0, 0, 0.8)';
        siteTitle.style.fontWeight = '800';
        siteTitle.style.fontSize = '1.4em';
    }
    
    // Force all masthead links to be gold
    const allMastheadLinks = document.querySelectorAll('.masthead a, .greedy-nav a, .visible-links a');
    allMastheadLinks.forEach(function(link) {
        link.style.color = '#FFD700';
        link.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.8)';
        link.style.fontWeight = '700';
    });
});