<?php

if(isset($_POST['submit']))
    $mailto="wahlanglarry@gmail.com";
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone=$_POST['phoneno'];
    $website=$_POST['website'];
    $details=$_POST['details'];
    $subject2="Confirmation: Your message was recevied | Larry Wahlang";
    //email receive by me
    $message="Client Name: " . $name. "\n"
    ."Phone Number:" . $phone. "\n\n"
    ."What do you need:".$website ."\n\n"
    . "Client Message:" . "\n" . $_POST['details'];

    // message for client confirmation
    $message2="Dear". $name . "\n"
    ."Thank you for reaching out to me. I will get back to you as soon as possible". "\n\n"
    ."You submitted the following message:" ."\n". $_POST['message']. "\n\n"
    ."Regards,"."\n"."- Larry Wahlang";

    //email headers
    $header = "From: ".$email; //client email
    $headers2="From: ".$mailto; // my email

    
    //php mail function
    result1=mail($mailto,$website,$message, $header);
    result2=mail($email,$subject2,$message2,$header2);

    if($result1 && $result2){
        $success= "Your message is sent successfully";

    }else{
        $fail="Your message is not sent";
    }


















?>