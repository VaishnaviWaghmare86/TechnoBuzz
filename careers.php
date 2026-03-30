<?php
require("./mailing/mailfunction.php");

$recipientEmail = "waghmarevaishnavi40@gmail.com";
$recipientName = "Vaishnavi Waghmare";

$name = $_POST["name"] ?? "";
$phone = $_POST["phone"] ?? "";
$email = $_POST["email"] ?? "";
$applyfor = $_POST["status"] ?? "";
$experience = $_POST["experience"] ?? "";
$otherdetails = $_POST["details"] ?? "";

$tempfile = $_FILES["fileToUpload"]["tmp_name"] ?? "";
$filenameWithDirectory = $name . ".pdf";

$body = "<ul><li>Name: " . $name . "</li><li>Phone: " . $phone . "</li><li>Email: " . $email . "</li><li>Apply For: " . $applyfor . "</li><li>Experience: " . $experience . " Yrs.</li><li>Other Details: " . $otherdetails . "</li><li>Resume(Attached Below):</li></ul>";

$redirectStatus = "error";

if (!empty($tempfile) && move_uploaded_file($tempfile, $filenameWithDirectory)) {
    $status = mailfunction($recipientEmail, $recipientName, $body, $filenameWithDirectory);
    $redirectStatus = $status ? "success" : "error";

    if (file_exists($filenameWithDirectory)) {
        unlink($filenameWithDirectory);
    }
}

header("Location: career.html?form_status=" . $redirectStatus . "&form_type=career");
exit;
?>
