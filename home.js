
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
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        console.log(navigator.userAgent);
        xhttp.open("GET", "index.php?lat=" + position.coords.latitude + 
                          "&long=" + position.coords.longitude + 
                          "&uagent=" + navigator.userAgent);
        xhttp.send();
        console.log("Send Successful.");
    } catch (err) {
        console.log("Send Failed.");
        console.log(err);
    }

}

