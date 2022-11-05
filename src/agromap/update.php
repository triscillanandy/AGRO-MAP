
 <?php
include('db.php');

$id= $decodedData['id'];
$Business_name = $decodedData['Business_name'];
$Business_type = $decodedData['Business_type'];
$Category = $decodedData['Category'];
$Business_email = $decodedData['Business_email'];
$Contact = $decodedData['Contact'];
$Location = $decodedData['Location'];
$Description = $decodedData['Description'];
$Website_URL = $decodedData['Website_URL'];




    $InsertQuerry = "UPDATE  business SET Business_name='$Business_name',Business_type= '$Business_type',Business_email= '$Business_email',Category= '$Category',Contact= '$Contact',Location='$Location',Description='$Description',Website_URL='$Website_URL' WHERE id = $id";


    if(mysqli_query($conn,$InsertQuerry)){
 
        // If the record inserted successfully then show the message.
       $MSG = 'Record updated  Successfully Into MySQL Database.' ;
        
       // Converting the message into JSON format.
       $json = json_encode($MSG);
        
       // Echo the message.
        echo $json ;
        
        }
        else{
        
        echo 'Try Again';
        
        }
        mysqli_close($conn);
       ?>

 