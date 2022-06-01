
// Geolocation API JavaScript Code
var x = document.getElementById("demo");

// Get the user's current location
function getLocation() {
    x.innerHTML = "Locating...";
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}


// Show the user's current location
function showPosition(position) {
    try {
        console.log("Sending coordinate info.");
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "index.php?lat=" + position.coords.latitude + "&long=" + position.coords.longitude, true);
        xhttp.send();
        console.log("Send Successful.");
    } catch (err) {
        console.log("Send Failed.");
        console.log(err);
    }

}

