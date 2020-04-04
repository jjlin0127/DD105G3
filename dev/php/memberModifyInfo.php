<?php 
    session_start();
    $memNo = $_SESSION["memNo"];

    try {
        require_once("connectSchoolServer.php");
		
	    $sql = "UPDATE `member` SET memPsw = :mwmPsw, memName = :memName, memNickname = :memNickname, memTel = :memTel WHERE memNo = :memNo";
        $memInfo = $pdo->prepare( $sql);
        $memInfo -> bindValue(":memNo", $_POST["memNo"]);
        $memInfo -> bindValue(":memName", $_POST["memName"]);
        $memInfo -> bindValue(":memNickname", $_POST["memNickname"]);
        $memInfo -> bindValue(":memPsw", $_POST["memPsw"]);
        $memInfo -> bindValue(":memTel", $_POST["memTel"]);
		$memInfo -> execute();
	
    } catch (PDOException $e) {
	    echo "ErrLine : " . $e->getLine() . "<br>";
	    echo "ErrMsg : " . $e->getMessage() . "<br>";
    }
?>  