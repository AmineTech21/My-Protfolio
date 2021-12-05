<?php

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
?>