// Tu peux ajouter du code JavaScript ici si nécessaire
function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const projectLinks = document.querySelectorAll('.project-link');

    projectLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            const url = this.getAttribute('href'); // Récupère l'URL de la page liée
            setTimeout(function () {
                window.location.href = url; // Redirige vers l'URL après une courte pause
            }, 300); // 300 millisecondes (correspond à la durée de la transition CSS)
        });
    });
});

