<?php
// contact-handler.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);
    
    // Basic validation
    $errors = [];
    
    if (empty($name)) {
        $errors[] = "Name is required";
    }
    
    if (empty($email)) {
        $errors[] = "Email is required";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format";
    }
    
    if (empty($message)) {
        $errors[] = "Message is required";
    }
    
    // If no errors, send email
    if (empty($errors)) {
        // Email configuration
        $to = "keshav@kunver.com"; // Your email address
        $subject = "New Contact Form Submission from " . $name;
        
        // Email body
        $email_body = "You have received a new message from your website contact form.\n\n";
        $email_body .= "Name: " . $name . "\n";
        $email_body .= "Email: " . $email . "\n";
        $email_body .= "Message:\n" . $message . "\n\n";
        $email_body .= "Sent from: " . $_SERVER['HTTP_HOST'] . "\n";
        $email_body .= "Date/Time: " . date('Y-m-d H:i:s') . "\n";
        
        // Email headers
        $headers = "From: noreply@" . $_SERVER['HTTP_HOST'] . "\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        
        // Send email
        if (mail($to, $subject, $email_body, $headers)) {
            // Success - redirect back to contact page with success message
            header("Location: /index.html?status=success");
            exit();
        } else {
            // Error sending email
            header("Location: /index.html?status=error");
            exit();
        }
    } else {
        // Validation errors - redirect back with error
        header("Location: /index.html?status=validation_error");
        exit();
    }
} else {
    // If accessed directly, redirect to contact page
    header("Location: /index.html");
    exit();
}
?> 