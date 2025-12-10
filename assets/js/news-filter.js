// News Page Filter Functionality
(function() {
    'use strict';

    function initNewsFilters() {
        var filterButtons = document.querySelectorAll('.news-filter-btn');
        var newsCards = document.querySelectorAll('.news-card');

        // Debug logging
        console.log('News filter init: Found ' + filterButtons.length + ' buttons and ' + newsCards.length + ' cards');

        if (filterButtons.length === 0 || newsCards.length === 0) {
            console.log('News filter: No buttons or cards found, exiting');
            return;
        }

        // Add click event to each filter button
        for (var i = 0; i < filterButtons.length; i++) {
            filterButtons[i].addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                var clickedButton = this;
                var filter = clickedButton.getAttribute('data-filter');

                console.log('Filter clicked: ' + filter);

                // Remove active class from all buttons
                for (var j = 0; j < filterButtons.length; j++) {
                    filterButtons[j].classList.remove('active');
                }

                // Add active class to clicked button
                clickedButton.classList.add('active');

                // Filter the cards
                for (var k = 0; k < newsCards.length; k++) {
                    var card = newsCards[k];
                    var category = card.getAttribute('data-category');

                    console.log('Card category: ' + category + ', filter: ' + filter);

                    if (filter === 'all' || category === filter) {
                        card.style.display = 'flex';
                        card.style.visibility = 'visible';
                    } else {
                        card.style.display = 'none';
                        card.style.visibility = 'hidden';
                    }
                }
            });
        }

        console.log('News filter: Event listeners attached');
    }

    function initReadMoreLinks() {
        var links = document.querySelectorAll('.news-card-link');

        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function(e) {
                var href = this.getAttribute('href');
                if (href && href.charAt(0) === '#') {
                    e.preventDefault();
                    var target = document.querySelector(href);
                    if (target) {
                        target.style.display = 'block';
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });
        }
    }

    function initBackLinks() {
        var backLinks = document.querySelectorAll('.news-back-link');

        for (var i = 0; i < backLinks.length; i++) {
            backLinks[i].addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    function init() {
        console.log('News filter JS loaded');
        initNewsFilters();
        initReadMoreLinks();
        initBackLinks();
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // DOM already loaded
        init();
    }

    // Also run on window load as backup
    window.addEventListener('load', init);
})();
