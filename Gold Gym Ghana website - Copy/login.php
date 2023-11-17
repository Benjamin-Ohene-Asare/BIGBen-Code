<?php
session_start();
include("config.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $adminName = $_POST['adminName'];
    $adminPassword = $_POST['adminPassword'];

    $sql = "SELECT * FROM admin_table WHERE adminName = '$adminName' AND adminPassword = '$adminPassword'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        // Correct login, redirect to admin.php
        $_SESSION['adminName'] = $adminName;
        header("Location: admin.html");
    } else {
        // Incorrect login, display an error message
        echo "Invalid login credentials. Please try again.";
    }
}

$conn->close();
?>
