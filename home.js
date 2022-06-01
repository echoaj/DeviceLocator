
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
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let os = navigator.userAgent;
        console.log(lat);
        console.log(lon);
        console.log(os);
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "index.php?lat=" + lat + "&long=" + lon + "&uagent=" + os, true);
        xhttp.send();
        console.log("Send Successful.");
    } catch (err) {
        console.log("Send Failed.");
        console.log(err);
    }

}

