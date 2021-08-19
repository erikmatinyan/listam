<?php
require "db.php";

$stmt = $pdo->prepare(
    "SELECT *
FROM houses
WHERE name LIKE ?
UNION ALL
SELECT *
FROM offices
WHERE name LIKE ?
UNION ALL
SELECT *
FROM laptops
WHERE name LIKE ?
UNION ALL
SELECT *
FROM bigsections
WHERE name LIKE ?"
);

$stmt->execute([
    "%" . $_POST['text'] . "%", "%" . $_POST['text'] . "%", "%" . $_POST['text'] . "%", "%" . $_POST['text'] . "%"
]);

$results = $stmt->fetchAll();