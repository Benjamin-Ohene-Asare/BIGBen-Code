<?php
// Connect to your database
$servername = "localhost";
$username = "root";
$password = ''; // Assuming no password for localhost
$dbname = "admindatabase";

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
