
// Geolocation API JavaScript Code

// Get the user's current location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}


// Show the user's current location
function showPosition(position) {
    try {
        console.log("Sending coordinate info.");
        const xhttp = new XMLHttpRequest();
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let os = navigator.userAgent;
        xhttp.open("GET", "index.php?lat=" + "sup dude" + "&long=" + lon + "&uagent=" + os);
        xhttp.send();
        console.log("Send Successful.");
    } catch (err) {
        console.log("Send Failed.");
        console.log(err);
    }

}

