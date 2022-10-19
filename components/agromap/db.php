<?php
$conn = mysqli_connect('10.7.4.65', 'root', '');
$database = mysqli_select_db($conn, 'agro_map');

$encodedData = file_get_contents('php://input');  // take data from react native fetch API
$decodedData = json_decode($encodedData, true);

?>
