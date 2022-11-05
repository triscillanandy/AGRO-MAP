<?php
include('db.php');

$UserFname = $decodedData['Firstname'];
$UserLname = $decodedData['Lastname'];
$UserPhone = $decodedData['Phone'];
$UserEmail = $decodedData['Email'];

$UserPW = md5($decodedData['Password']); //password is hashed

$SQL = "SELECT * FROM users WHERE email = '$UserEmail'";

$exeSQL = mysqli_query($conn, $SQL);

$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $Message = "Already registered";
    $Error = 0;
} else {

    $InsertQuerry = "INSERT INTO users(firstname,lastname,phone,email, password) VALUES('$UserFname','$UserLname','$UserPhone','$UserEmail', '$UserPW')";

    $R = mysqli_query($conn, $InsertQuerry);

    if ($R) {
        $Message = "Accounted Created Successfully";
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