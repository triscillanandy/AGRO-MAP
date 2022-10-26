<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$conn = mysqli_connect('localhost', 'root', '','agro_ma');
// $database = mysqli_select_db($conn, 'agro_map');

$encodedData = file_get_contents('php://input');  // take data from react native fetch API
$decodedData = json_decode($encodedData, true);

?>
