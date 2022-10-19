<?php
include('db.php');

$UserEmail = $decodedData['Email'];
$Username = $decodedData['Username'];
$UserPW = md5($decodedData['Password']); //password is hashed

$SQL = "SELECT * FROM user WHERE email = '$UserEmail'";

$exeSQL = mysqli_query($conn, $SQL);

$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $Message = "Already registered";
} else {

    $InsertQuerry = "INSERT INTO user(username,email, password) VALUES('$Username','$UserEmail', '$UserPW')";

    $R = mysqli_query($conn, $InsertQuerry);

    if ($R) {
        $Message = "Complete--!";
    } else {
        $Message = "Error";
    }
}
$response[] = array("Message" => $Message);

echo json_encode($response);

?>
