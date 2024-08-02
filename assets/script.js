

function updateButtonVisibility() {
    const buttons = document.querySelectorAll('.boutonresponsive');
    const viewMoreLink = document.querySelector('.viewmore');
    const screenWidth = window.innerWidth;

    if (screenWidth <= 600) { 
        buttons.forEach((button, index) => {
            if (index >= 1) {
                button.style.display = 'none';
            }
        });
        // Ajouter des classes ou des styles pour ajuster la position du lien "view more"
        viewMoreLink.style.width = '100%';
        viewMoreLink.style.textAlign = 'left';
        viewMoreLink.style.marginRight = '0';
    } else {
        buttons.forEach((button) => {
            button.style.display = 'flex';
        });
        viewMoreLink.style.width = '';
        viewMoreLink.style.textAlign = '';
        viewMoreLink.style.marginLeft = 'auto';
    }
}

updateButtonVisibility();

window.addEventListener('resize', updateButtonVisibility);
