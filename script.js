// Store user preference in localStorage
function setPreference(theme) {
    localStorage.setItem('theme', theme);
    applyPreference();
    animateButtons();
}

// Retrieve and apply user preference
function applyPreference(){
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark'){
        document.body.style.backgroundColor = '#1e1e1e';
        document.body.style.color = '#ffffff';
    } else {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
    }
}


// Animation: pulse effect on buttons
function animateButtons(){
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.classList.remove('pulse'); // reset animation
        void btn.offsetWidth; // reflow to restart animation
        btn.classList.add('pulse');
    })
}

// Apply stored preference on load
window.onload = applyPreference;