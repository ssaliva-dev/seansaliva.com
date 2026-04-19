<?php
// public_html/api/contact.php

header('Content-Type: application/json; charset=utf-8');

// Allow the production domains to post to the contact endpoint.
$allowed_origins = [
  'https://seansaliva.com',
  'https://www.seansaliva.com',
];

if (!empty($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowed_origins, true)) {
  header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
  header("Access-Control-Allow-Methods: POST, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type");
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

// Read JSON body
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

$name    = trim($data['name'] ?? '');
$email   = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

// Honeypot field (optional): if filled, treat as bot
$website = trim($data['website'] ?? '');
if ($website !== '') {
  http_response_code(200);
  echo json_encode(['ok' => true]); // pretend success
  exit;
}

// Basic validation
if ($name === '' || $email === '' || $message === '') {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Invalid email']);
  exit;
}

// Block header injection
$bad = ["\r", "\n", "%0a", "%0d", "content-type:", "bcc:", "cc:", "to:"];
$check = strtolower($name . ' ' . $email);
foreach ($bad as $b) {
  if (strpos($check, $b) !== false) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Bad request']);
    exit;
  }
}

$to = 's.saliva@yahoo.com'; // <-- YOUR receiving email
$subject = "New Contact Form Message from {$name}";

$body = "You received a new message:\n\n"
      . "Name: {$name}\n"
      . "Email: {$email}\n\n"
      . "Message:\n{$message}\n";

$headers = [];
// Use a domain email here for best deliverability (not the user's email)
$headers[] = 'From: Website Contact <no-reply@seansaliva.com>';
$headers[] = "Reply-To: {$email}";
$headers[] = 'X-Mailer: PHP/' . phpversion();

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Mail failed']);
  exit;
}

echo json_encode(['ok' => true]);
