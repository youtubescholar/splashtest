document.getElementById('acceptButton').addEventListener('click', function () {
    document.cookie = "disclaimerAccepted=true; path=/; max-age=86400"; // Set cookie
    document.getElementById("disclaimerModal").style.display = "none"; // Hide modal
});

document.getElementById('declineButton').addEventListener('click', function () {
    window.location.href = '/taichiman/declined/';
});
