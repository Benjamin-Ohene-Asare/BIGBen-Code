<?php
$con = new PDO("mysql:host=localhost;dbname=blog", 'root', '');
// Get blog post ID from the URL
$id = $_GET['id'];

// Retrieve the specific blog post
$sql = "SELECT * FROM blog_table WHERE id=$id";
$result = $con->query($sql);
$row = $result->fetch(PDO::FETCH_ASSOC);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title><?php echo $row['title']; ?></title>
</head>
<body>
    <div class="blog-post">
        <h2><?php echo $row['title']; ?></h2>
        <p>Category: <?php echo $row['category']; ?></p>
        <p>Author: <?php echo $row['author']; ?></p>
        <img src="<?php echo $row['image_url']; ?>" alt="Blog Image">
        <p><?php echo $row['body']; ?></p>
        <a href="log.php">Back to Blog</a>
    </div>
</body>
</html>
