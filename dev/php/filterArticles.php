<?php

// $filterSql = json_decode($_GET["filterSql"]);
// $filterSql = $_GET["filterSql"];
// $sqlBase = "select * from article join member on (article.memNo = member.memNo)
// where (article.artStatus = 1)";
// $fruitsItems = $_GET["fruitsItems"];
try {
    require_once("connectHomeserver.php");

    $sql = "select * from article join member on (article.memNo = member.memNo)
    where (article.artStatus = 1) {$_GET["filterSql"]}";
    $filterArticle = $pdo->query($sql);
    
    if($filterArticle -> rowCount() == 0){
        echo json_encode(array(
            'errorMsg' => 'no data'
        ));
    }else{
        $filterArticlesRows = $filterArticle->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($filterArticlesRows);
    };

} catch (PDOException $e) {
	echo "錯誤行號 : " . $e->getLine() . "<br>";
	echo "錯誤訊息 : " . $e->getMessage() . "<br>";
	// echo "系統暫時連不上請聯絡維護人員";
}
?>