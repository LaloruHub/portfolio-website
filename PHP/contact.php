<?php
    $to = "gonzaloruizazaldegui@gmail.com";
    $subject = $_REQUEST['subject'];
    $message = $_REQUEST['message'];
    
    echo $message;
    echo $subject;
 
    mail($to, $subject, $message);
?>