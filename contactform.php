<?php

ini_set( 'display_errors', 1 );
error_reporting( E_ALL );
$from = $_POST['email'];
$to = "aminetech21@outlook.com";
$subject = $_POST['subject'];
$message = $_POST['message'];
$headers = "From:" . $from;
    if(mail($to,$subject,$message, $headers)) {
    header('location:index.php?mailsend');
    } else {
    echo "The email message was not sent try to send it manually.";
    }
/*
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $subject = $_POST['subject'];
        $mailFrom = $_POST['email'];
        $message = $_POST['message'];

        $mailTo = "aminetech21@outlook.com";
        $headers = "From: ".$mailFrom;
        $txt = "You have received an e-mail from".$name.".\n\n".$message;

        mail($mailTo, $subject, $txt, $headers );
        header("Location: index.html");
        
    }
*/
/*
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['email'];


    $email_from = 'aminetech21@outlook.com';

    $email_subject = "New Form Submission";

    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";

    $to = "aminetech21@outlook.com";

    $headers = "From : $email_from \r\n";

    $headers .= "Reply_to : $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location : index.html");
    */
?>