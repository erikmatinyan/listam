<?php
$DB_HOST = "localhost";
$DB_NAME = "listam";
$DB_CHARSET = "utf8";
$DB_USER = "mysql";
$DB_PASSWORD = "mysql";

$pdo = new PDO(
    "mysql:host=" . $DB_HOST . ";charset=" . $DB_CHARSET . ";dbname=" . $DB_NAME,
    $DB_USER,
    $DB_PASSWORD,
    [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]
);