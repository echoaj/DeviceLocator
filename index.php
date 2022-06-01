<!-- Create php file -->
<?php
include_once("home.html");

try
{
    $lat = $_GET["lat"];
    $long = $_GET["long"];
    $ip = $_SERVER["REMOTE_ADDR"];
    $agent = $_GET["uagent"];
    $txt = array($lat, $long, $ip, $agent);
    // loop through the array
    echo "<br>";
    foreach ($txt as $value) {
        echo $value . "<br>";
    }
    echo "POST worked on server side";
}
catch(Exception $e)
{
    echo "Could not get post to work.<br>";
}

?>