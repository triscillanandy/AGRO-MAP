
<?php 

include ('db.php');


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

function sendmail($email,$token){
    
    require ('PHPMailer/PHPMailer.php');
    require ('PHPMailer/Exception.php');
    require ('PHPMailer/SMTP.php');
 

    $mail = new PHPMailer(true);

    try {
       // $mail->SMTPDebug = 2; 
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;   
               
        $mail->Username   = 'jonestriscillah@gmail.com';
        $mail->Password   = 'teaplddbncuodxdt';   
        $mail->SMTPSecure = "ssl";                  
        //$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;   
        $mail->Port       = 465;                           

        $mail->setFrom('jonestriscillah@gmail.com','uprint34');
        $mail->addAddress($email);

        $mail->isHTML(true);
        $mail->Subject = 'email verification';
        $mail->Body    ="<a href='http://localhost/agromap/verify_email.php?email=$email&token=$token'>Click and Verify Email</a>";
        $mail->send();
            return true;
    } catch (Exception $e) {
            return false;
    }
}  





$UserFname = $decodedData['Firstname'];
$UserLname = $decodedData['Lastname'];
$UserPhone = $decodedData['Phone'];
$UserEmail = $decodedData['Email']; 

$UserPW = md5($decodedData['Password']); //password is hashed

    $user_exist_query="SELECT * FROM users WHERE  email = '$UserEmail' ";
    $result = $conn->query($user_exist_query);

    if ($result) {
        
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            
            if ($row['email'] === $UserEmail) {
                echo  json_encode('email  is already taken!');
                   
                     
                }
            }
                else{
            
            $token=bin2hex(random_bytes(16));
            
            $query ="INSERT INTO `users`(`firstname`,`lastname`,`phone`, `email`, `password`,`email_verification_link`) VALUES ('$UserFname','$UserLname','$UserPhone','$UserEmail', '$UserPW','$token')";
                
            if (($conn->query($query)===TRUE) && sendmail($UserEmail,$token )===TRUE) {
                echo json_encode('register successful.check your mailbox in inbox or spam and verify your account.');
              
            }else{
                echo json_encode('query can not run');
                    
                        
                        
            }
        }
    }else{
        echo    json_encode('query can not run');
        
      
    }     
      
    

?>