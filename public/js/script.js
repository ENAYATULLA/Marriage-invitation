function showInfo(event) {
    // Hide all info-popups
    document.querySelectorAll('.info-popup').forEach(popup => {
        popup.style.display = 'none';
    });

    // Show the selected info-popup
    document.getElementById(`${event}-info`).style.display = 'block';
}
function goHome() {
    window.location.href = '/'; // Change this to your actual home page URL if different
}
