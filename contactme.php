<?php
require("./mailing/mailfunction.php");

$recipientEmail = "waghmarevaishnavi40@gmail.com";
$recipientName = "Vaishnavi Waghmare";

$name = $_POST["name"] ?? "";
$phone = $_POST["phone"] ?? "";
$email = $_POST["email"] ?? "";
$message = $_POST["message"] ?? "";

$body = "<ul><li>Name: " . $name . "</li><li>Phone: " . $phone . "</li><li>Email: " . $email . "</li><li>Message: " . $message . "</li></ul>";

$status = mailfunction($recipientEmail, $recipientName, $body);
$redirectStatus = $status ? "success" : "error";

header("Location: contact.html?form_status=" . $redirectStatus . "&form_type=contact");
exit;
?>
