<?php
include('db.php');

$UserEmail = $decodedData['Email'];
$UserPW = md5($decodedData['Password']); //password is hashed

$SQL = "SELECT * FROM user WHERE email = '$UserEmail'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
  $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['password'] != $UserPW) {
        $Message = "Wrong Password";
        $Error = 0;
        $User ="";
    } else {
      $Error = 1;
      $Message =  $arrayu['username']."!, Welcome Back";
      $User =  $arrayu['username'];
    }
} else {
  $Error = 0;
  $Message = "No account yet";
  $User ="";
}

$response = array("message" => $Message,"error" => $Error,"user" => $User);
echo json_encode($response);

?>
