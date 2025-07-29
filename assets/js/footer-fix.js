// CRITICAL FOOTER POSITIONING FIX - IMMEDIATE EXECUTION
// This script runs immediately to fix footer positioning issues

(function() {
    'use strict';
    
    function forceFooterToBottom() {
        console.log('Forcing footer to bottom of page...');
        
        const footer = document.querySelector('.page__footer');
        if (footer) {
            // Remove all positioning that causes mid-page appearance
            footer.style.cssText = `
                position: static !important;
                bottom: auto !important;
                top: auto !important;
                left: 0 !important;
                right: 0 !important;
                width: 100% !important;
                height: auto !important;
                clear: both !important;
                float: none !important;
                display: block !important;
                margin-top: 80px !important;
                margin-bottom: 0 !important;
                padding: 30px 0 !important;
                background: #2c3e50 !important;
                color: white !important;
                border-top: 4px solid #00bcd4 !important;
                transform: none !important;
                animation: none !important;
                -webkit-animation: none !important;
            `;
            console.log('Footer styles applied');
        }
        
        // Ensure body uses flexbox layout and remove excessive padding
        document.body.style.cssText = `
            display: flex !important;
            flex-direction: column !important;
            min-height: 100vh !important;
            margin: 0 !important;
            padding: 0 !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        `;
        
        // Fix content spacing - remove huge gap after header
        const initialContent = document.querySelector('.initial-content');
        if (initialContent) {
            initialContent.style.cssText += `
                margin-top: 20px !important;
                padding-top: 0 !important;
            `;
        }
        
        const layoutSingle = document.querySelector('.layout--single');
        if (layoutSingle) {
            layoutSingle.style.cssText += `
                margin-top: 0 !important;
                padding-top: 0 !important;
            `;
        }
        
        const mainElement = document.querySelector('#main');
        if (mainElement) {
            mainElement.style.cssText += `
                margin-top: 0 !important;
                padding-top: 0 !important;
            `;
        }
        
        // Make main content area flexible
        const layout = document.querySelector('.layout--single, .layout');
        if (layout) {
            layout.style.cssText = `
                flex: 1 0 auto !important;
                display: flex !important;
                flex-wrap: wrap !important;
                align-items: flex-start !important;
            `;
        }
        
        // Ensure content has proper spacing
        const pageContent = document.querySelector('.page__content');
        if (pageContent) {
            pageContent.style.cssText += `
                min-height: 400px !important;
                margin-bottom: 40px !important;
            `;
        }
        
        console.log('Footer positioning fix completed');
    }
    
    // Apply fix immediately if DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', forceFooterToBottom);
    } else {
        forceFooterToBottom();
    }
    
    // Apply fix on window load as backup
    window.addEventListener('load', forceFooterToBottom);
    
    // Monitor for changes and reapply fix
    const observer = new MutationObserver(function(mutations) {
        let shouldReapply = false;
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && 
                mutation.target.classList.contains('page__footer')) {
                shouldReapply = true;
            }
        });
        
        if (shouldReapply) {
            setTimeout(forceFooterToBottom, 100);
        }
    });
    
    // Start observing when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        const footer = document.querySelector('.page__footer');
        if (footer) {
            observer.observe(footer, {
                attributes: true,
                attributeFilter: ['style', 'class']
            });
        }
    });
})();