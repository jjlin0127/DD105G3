<?php
	$dname = 'dd105g3';
	$dsn = "mysql:host=localhost;port=3306;dbname=$dname;charset=utf8";
	$user = "dd105g3";
	$password = "dd105g3";
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO( $dsn, $user, $password, $options);
?>