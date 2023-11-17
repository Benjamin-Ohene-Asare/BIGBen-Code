<?php
$con = new PDO("mysql:host=localhost;dbname=blog", 'root', '');

// Retrieve blog posts from the database
$sql = "SELECT * FROM blog_table ORDER BY created_at DESC";
$result = $con->query($sql);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Blog</title>
</head>
<body>
   
    <div class="blog-container">
        <?php
        // Display blog posts
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            echo "<div class='blog-post'>";
            echo "<h2>" . $row['title'] . "</h2>";
            echo "<p>Category: " . $row['category'] . "</p>";
            echo "<p>Author: " . $row['author'] . "</p>";
            echo "<img src='" . $row['image_url'] . "' alt='Blog Image'>";
            echo "<p>" . substr($row['body'], 0, 100) . "...</p>";
            echo "<a href='read_more.php?id=" . $row['id'] . "'>Read More</a>";
            echo "</div>";
        }

        // Close the PDO connection
        $con = null;
        ?>
    </div>
</body>
</html>
