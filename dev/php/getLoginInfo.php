<?php 
session_start();
if( isset($_SESSION["memId"])){//已登入
	$member = ["memNo"=>$_SESSION["memNo"], 
				"memId"=>$_SESSION["memId"], 
				"memName"=>$_SESSION["memName"], 
				"memNickname"=>$_SESSION["memNickname"]
			];
	echo json_encode($member);
}else{
	echo "{}";
}
