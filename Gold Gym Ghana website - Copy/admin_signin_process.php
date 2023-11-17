<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $adminName = $_POST['adminName'];
    $adminPassword = $_POST['adminPassword'];

    // Connect to your database
    $servername = "localhost";
    $username = "root";
    $password = ''; // Assuming no password for localhost
    $dbname = "admindatabase";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check for a successful connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Use prepared statements to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM admin_table WHERE adminName = ?");
    $stmt->bind_param("s", $adminName);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();

        // Verify the entered password with the hashed password from the database
        if (password_verify($adminPassword, $row['adminPassword'])) {
            // Set session variables for admin
            $_SESSION['admin_id'] = $row['admin_id'];
            $_SESSION['adminName'] = $row['adminName'];

            // Redirect to the admin dashboard (replace with your dashboard URL)
            header("Location: admin.html");
            exit();
        } else {
            echo "Incorrect password";
        }
    } else {
        echo "Admin not found";
    }

    // Close the database connection
    $stmt->close();
    $conn->close();
}
?>
