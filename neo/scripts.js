function acceptDisclaimer() {
    // Set a cookie/sessionStorage item
    sessionStorage.setItem('disclaimerAccepted', 'true');
    // Hide the disclaimer modal
    document.getElementById("disclaimerModal").style.display = "none";
}

function declineDisclaimer() {
    // Handle the decline action, such as redirecting to a different page
    window.location.href = '/taichiman/declined/';
}
