<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['Name'];
  $email = $_POST['email'];
  $message = $_POST['Message'];
  
  $to = 'ahirward247@gmail.com';
  $subject = 'New Contact Form Submission';
  $body = "Name: $name\nEmail: $email\nMessage: $message";

  // Set additional headers if required
  $headers = "From: $email";

  // Send email
  if (mail($to, $subject, $body, $headers)) {
    header('Location: thank_you.html'); // Redirect to thank-you page
    exit();
  } else {
    echo "Oops! Something went wrong. Please try again.";
  }
}
?>
