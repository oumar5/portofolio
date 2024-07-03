document.addEventListener('DOMContentLoaded', function () {
    // Gestion du bouton hamburger
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const menu = document.getElementById('menu');
    const currentPageTitle = document.getElementById('current-page-title');

    // Set the current page title
    const currentPageLink = document.querySelector('.current-page');
    if (currentPageLink) {
        currentPageTitle.textContent = currentPageLink.textContent;
    }

    hamburgerBtn.addEventListener('click', function () {
        menu.classList.toggle('show');
        hamburgerBtn.classList.toggle('open');
    });

    // Gestion de la soumission du formulaire
    const form = document.querySelector('form'); // Assurez-vous que le formulaire est correctement sélectionné
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
});

function handleSubmit(event) {
    event.preventDefault(); // Empêche l'envoi par défaut du formulaire

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            form.reset(); // Réinitialise les champs du formulaire
            document.getElementById('success-message').style.display = 'block'; // Affiche le message de succès
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    alert(data["errors"].map(error => error["message"]).join(", "));
                } else {
                    alert('Il y a eu un problème avec l’envoi de votre message.');
                }
            });
        }
    }).catch(error => {
        alert('Il y a eu un problème avec l’envoi de votre message.');
    });

    return false; // Empêche la soumission réelle du formulaire
}


document.addEventListener('DOMContentLoaded', function () {
    const profilePhoto = document.querySelector('.profile-photo');
    profilePhoto.onload = function () {
        profilePhoto.classList.add('profile-photo-loaded');
    };
    profilePhoto.src = profilePhoto.getAttribute('src');
});

