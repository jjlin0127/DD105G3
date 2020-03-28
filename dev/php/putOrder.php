<?php
$errMsg= "";
session_start();
$memNo = $_SESSION["memNo"];
$ordName = $_SESSION["memName"];
$ordaddr = "";
$ordtel = $_SESSION["memTel"];
try {
	require_once("connectHomeserver.php");
	$cartItems = json_decode($_GET["cartItems"]);
	$total = $_GET["total"];
    // $str = '[{"prodNo":"4","price":360,"qty":"1"},{"prodNo":"5","price":360,"qty":"2"},{"prodNo":"3","price":360,"qty":"3"}]';
	// $cartItems = json_decode($str);
	// $total = 2650;
	//----------insert into order_general
	$date = date("Y-m-d");

	$sql = "insert into `order_general` 
	(`ordNo`, `memNo`, `ordDateTime`, `ordTotal`, `ordName`, `ordaddr`, `ordtel`, `ordPay`, `box`, `ordStatus`)
	values (null, '$memNo', '$date', '$total', '$ordName', '$ordaddr', '$ordtel', '1', '1', '0')";
	$pdo->query($sql);
	$orderNo = $pdo->lastInsertId();

	//----------insert into order_items;
	$sql = "insert into `order_item` 
	(`ordItemNo`, `ordNo`, `prodNo`, `ordPrice`, `ordQty`)
	values (null, '$orderNo', :prodNo, :ordPrice, :ordQty)";
	$orderItems = $pdo->prepare($sql);
	foreach($cartItems as $i => $item){
		$orderItems->bindValue(":prodNo", $item->prodNo);
		$orderItems->bindValue(":ordPrice", $item->price);
		$orderItems->bindValue(":ordQty", $item->qty);
		$orderItems->execute();
	}

	echo "OK";
} catch (PDOException $e) {
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
	echo $errMsg;
}
?>  