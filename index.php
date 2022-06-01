<!-- Create php file -->
<?php

include_once("home.html");

try
{
    $myfile = fopen("location.txt", "w") or die("Unable to open file!");
    echo "File created successfully";
}
catch(Exception $e)
{
    echo "Could not open file";
}

try
{
    $txt = "lat: " . $_GET["lat"] . "\nlong: " . $_GET["long"] . "\nIP: " . $_SERVER['REMOTE_ADDR'] . "\nUser agent: " . $_GET['uagent'];
    echo "Could get post to work"
}
catch(Exception $e)
{
    echo "Could not get post to work.";
}


try
{
    fwrite($myfile, $txt);
    fclose($myfile);
    echo "File written successfully";
}
catch(Exception $e)
{
    echo "File no written successfully.";
}


// print text
echo $txt;

// Send JSON post request to server
// try catch statement
// try {
//     $url = "https://logging-service-py.herokuapp.com/api/logger";
//     $data = array('lat' => $_GET["lat"], 'long' => $_GET["long"]);
//     $options = array(
//         'http' => array(
//             'header'  => "Content-type: application/json",
//             'method'  => 'POST',
//             'content' => http_build_query($data)
//         )
//     );
//     $context  = stream_context_create($options);
//     $result = file_get_contents($url, false, $context);
// } catch (Exception $e) {
//     echo 'Caught exception: ',  $e->getMessage(), "\n";
//     echo "logging filed";
// }




?>