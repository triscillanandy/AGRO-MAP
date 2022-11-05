<?php
include('db.php');

$Business_name = $decodedData['Business_name'];
$Business_type = $decodedData['Business_type'];
$Category = $decodedData['Category'];
$Business_email = $decodedData['Business_email'];
$Contact = $decodedData['Contact'];
$Location = $decodedData['Location'];
$Description = $decodedData['Description'];
$Website_URL = $decodedData['Website_URL'];




$SQL = "SELECT * FROM business WHERE Business_email = '$Business_email'";

$exeSQL = mysqli_query($conn, $SQL);

$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $Message = " Business already registered";
    $Error = 0;
} else {

    $InsertQuerry = "INSERT INTO business(Business_name,Business_type,Business_email,Category,Contact,Location,Description,Website_URL) VALUES('$Business_name','$Business_type','$Business_email','$Category','$Contact','$Location','$Description','$Website_URL')";

    $R = mysqli_query($conn, $InsertQuerry);

    if ($R) {
        $Message = "Business registered Successfully";
        $Error = 1;
    } else {
        $Message = "Error";
        $Error = 0;
    }
}


$response = array("message" => $Message,"error" => $Error);
// $response = array("error" => $Error);

echo json_encode($response);

?>