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
