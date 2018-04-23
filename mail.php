<?php
$to      = 'dedyskatarzyna@gmail.com';
$name = $_POST['name'];
$message = 'Hello, test wysyłki darmowych ciastek.';
$headers = 'From: ' . $_POST['email'] . "\r\n" .
    'Content-type: text/html; charset=utf-8';
    

mail($to, $name, $message, $headers);
echo 'Teraz czekaj na ciastka! :) ';
?>