document.addEventListener('DOMContentLoaded', function() {
    const ipDisplay = document.getElementById('ip-display');
    const syncVal = document.getElementById('sync-val');
    
    // Muestra la IP o Host actual del navegador
    ipDisplay.innerText = window.location.hostname + ':' + (window.location.port || '80');

    // Efecto de fluctuación ligera del Sync Rate estilo NERV
    setInterval(() => {
        const rate = (99.2 + Math.random() * 0.7).toFixed(1);
        syncVal.innerText = rate + '%';
    }, 3000);

    // Botón de verificación
    document.getElementById('btn-sync').addEventListener('click', function() {
        alert('NERV MAGI SYSTEM: Conexión verificada exitosamente en ' + window.location.hostname);
    });
});
