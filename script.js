document.addEventListener('DOMContentLoaded', () => {
    // Tab Switching Logic
    const navButtons = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Remove active class from all buttons and tabs
            navButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));

            // Add active class to clicked button and corresponding tab
            button.classList.add('active');
            const activeTab = document.getElementById(targetTab);
            if (activeTab) {
                activeTab.classList.add('active');
            }

            // Close mobile menu if open
            navMenu.classList.remove('show');

            // Scroll to top of content smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Mobile Hamburger Menu Toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }
});