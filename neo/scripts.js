<script nonce="abc123">
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        console.log('Service Worker registered with scope:', registration.scope);
    }).catch(function(error) {
        console.log('Service Worker registration failed:', error);
    });
}

function acceptDisclaimer() {
    sessionStorage.setItem('disclaimerAccepted', 'true');
    document.getElementById("disclaimerModal").style.display = "none";
}

function declineDisclaimer() {
    window.location.href = '/taichiman/declined/';
}
</script>
