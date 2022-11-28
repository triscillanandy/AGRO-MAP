



<?php 
    include ('db.php');

    if (isset($_GET['email']) && isset($_GET['token'])) {
        
        $email = $_GET['email'];    
        $token = $_GET['token'];

        $sql="SELECT * FROM users WHERE email = '$email' AND email_verification_link = '$token'";
        $result = $conn->query($sql);

        if ($result) {
            
            if ($result->num_rows == 1) {
                
                $row = $result->fetch_assoc();
                $fetch_Email = $row['email'];
                    
                if ($row['status'] == 0) {
                    $update = "UPDATE users SET status='1' WHERE email = '$fetch_Email'";
                    
                    if ($conn->query($update)===TRUE) {
                    echo  json_encode('verification successful');
                     
                           
                       
                    }else{
                    echo  json_encode('query can not run');
                        
                   
                           
                    }
                }else{
                    echo json_encode('email  is already register');
                      
                        
                          
                        
                }
            }
        }   
    }else{
        echo  json_encode('server down!!');
           
               
            
            
    }
 ?>