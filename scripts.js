document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM completamente cargado y analizado");

    var navLinks = document.querySelectorAll('nav ul li a');
    if (navLinks.length > 0) {
        navLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                alert('Has hecho clic en un enlace!');
            });
        });
        console.log("Event listeners added to navigation links");
   
    }

    var form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Formulario enviado');
        });
        console.log("Event listener added to form");
   
    }
});