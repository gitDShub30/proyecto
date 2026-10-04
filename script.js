document.addEventListener('DOMContentLoaded', function() {
    const ipDisplay = document.getElementById('ip-display');
    
    // Muestra el host/IP desde donde se accede a la página
    ipDisplay.innerText = window.location.hostname + ':' + (window.location.port || '80');

    document.getElementById('btn-contact').addEventListener('click', function() {
        alert('Conexión correcta al servidor CV desplegado en la IP Local: ' + window.location.hostname);
    });
});
