document.getElementById('btn-verificar').addEventListener('click', function() {
    alert('¡Servicio verificado correctamente en Dokploy!');
    const statusText = document.getElementById('status-text');
    statusText.innerText = 'Verificado';
    statusText.style.color = '#38bdf8';
});
