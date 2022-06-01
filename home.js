
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
        xhttp.open("GET", "index.php?lat=" + position.coords.latitude + 
                          "&long=" + position.coords.longitude, true + 
                          "&uagent=" + navigator.userAgent, true);
        xhttp.send();
        console.log("Send Successful.");
    } catch (err) {
        console.log("Send Failed.");
        console.log(err);
    }

}

