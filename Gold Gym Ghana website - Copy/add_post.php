<?php
// Define database connection details
$servername = "localhost";
$username = "root";
$password = ''; // Assuming no password for localhost
$dbname = "blog";

try {
    // PDO Connection
    $con = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // MySQLi Connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check MySQLi connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Get form data
    $title = $_POST['title'];
    $category = $_POST['category'];
    $author = $_POST['author'];
    // Assuming $_POST['image'] is the file input, you need to handle file uploads separately
    // See the previous examples for file upload handling
    $image = "path_to_uploaded_image"; // Replace this with the actual path or URL
    $body = $_POST['body'];

    // Insert data into the database using PDO
    $pdoStatement = $con->prepare("INSERT INTO blog_table (title, category, author, image_url, body) VALUES (?, ?, ?, ?, ?)");
    $pdoStatement->execute([$title, $category, $author, $image, $body]);

    // Redirect to index.php after successful insertion
    header("Location: log.php");
    exit(); // Ensure that no further code is executed after the redirect

} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

// Close connections
$conn->close();
?>
