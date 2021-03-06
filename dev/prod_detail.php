<?php
$prodNo = $_REQUEST["prodNo"];
//$prodNo = 3;
$errMsg = "";
//連線資料庫
try{
  //require_once("connectProduct.php");
  require_once("./php/connectProduct.php");
  $sql = "select * from product where prodNo = :prodNo";
  $product = $pdo->prepare($sql);
  $product->bindValue(":prodNo", $prodNo);
  $product->execute();

  $sql1 = "select p.prodReviewNo, p.prodscore, p.prodMsg, p.prodMsgTime, m.memNickname from product_review p join `member` m ON(p.MemNo = m.memNo) where prodNo= :prodNo order by prodMsgTime desc;";
  // $sql1 = "select p.prodReviewNo, p.prodscore, p.prodMsg, p.prodMsgTime, m.memNickname from product_review p join `member` m ON(p.MemNo = m.memNo) where $prodNo = $_REQUEST["prodNo"]  order by prodMsgTime desc;";

$product_review = $pdo->prepare($sql1);
$product_review->bindValue(":prodNo", $prodNo);
$product_review->execute();
}catch(PDOException $e){
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
}
?> 


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>商品詳情 | 天然甘</title>
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="./images/shortIcon.png">
    <link rel="stylesheet" href="./css/page/prod/detail.css"> 
    <link rel="stylesheet" href="./css/page/prod/detail_media.css"> 
    <!-- <link rel="stylesheet" href="./sass/page/prod/detail.css"> -->
    <!-- <link rel="stylesheet" href="./sass/page/prod/detail_media.css">  -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="./js/all.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script>		
    <script src="./js/shopping_cart01_1.js"></script>
    
</head>

<body>
    <!-- ↓↓↓ 導覽列 -->
    <script src="./js/hamburger.js"></script>
<script src="./js/login_common.js"></script>
<header>
    <nav class="header__container">
        <span class="logo">
            <a href="home.html"><img src="./images/Logo.svg"></a>
        </span>
        <div class="navList">
            <a class="navItem @@focus01" href="about.html">果甘物語 <i class="fas fa-seedling"></i></a>
            <a class="navItem focus" href="prod_product.html">特色果甘 <i class="fas fa-apple-alt"></i></a>
            <a class="navItem @@focus03" href="box.html">客製禮盒 <i class="fas fa-gift"></i></a>
            <a class="navItem @@focus04" href="cusfruits.html">客製果甘 <i class="fas fa-lemon"></i></a>
            <!-- <a class="navItem @@focus05" href="#">折扣遊戲 <i class="fas fa-carrot"></i></a> -->
            <a class="navItem @@focus06" href="forum.php">果甘話區 <i class="fas fa-leaf"></i></a>
        </div>
        <div class="navList_2">
            <input id="memNo" type="hidden" value="">
            <a id="shopCart" class="navItem_2" href="prod_shopping.html">
                <i class="fas fa-shopping-cart"></i><span id="a_count"></span></a>
            <a id="memNickname" href="member.html">&nbsp;</a>
            <!-- 會員暱稱 -->
            <a id="spanLogin" class="navItem_2">登入</a>
        </div>
    </nav>
    <nav class="rwdHeader">
        <div class="rwdHeaderWrap">
            <a href="home.html">
                <img id="topLogo2" src="./images/Logo.svg">
            </a>
            <button class="hamburger hamburger--elastic" id="hamburger" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
    </nav>

    <div id="rwdHamburgerMenu">
        <nav>
            <ul>
                <a href="member.html">
                    <li id="mobilememNickname">&nbsp;</li>
                </a>
                <a id="mobileloginLink">
                    <li id="mobilespanLogin">登入 <i class="fas fa-user-circle"></i></li>
                </a>
                <a id="shopCart" href="prod_shopping.html">
                    
                    <li>購物車<i class="fas fa-shopping-cart"></i><span id="b_count"></span></li>
                </a>
                <a href="about.html">
                    <li>果甘物語 <i class="fas fa-seedling"></i></li>
                </a>
                <a href="prod_product.html">
                    <li>特色果甘 <i class="fas fa-apple-alt"></i></li>
                </a>
                <a href="box.html">
                    <li>客製禮盒 <i class="fas fa-gift"></i></li>
                </a>
                <a href="cusfruits.html">
                    <li>客製果甘 <i class="fas fa-lemon"></i></li>
                </a>
                <!-- <a href="#">
                    <li>折扣遊戲 <i class="fas fa-carrot"></i></li>
                </a> -->
                <a href="forum.php">
                    <li>果甘話區 <i class="fas fa-leaf"></i></li>
                </a>
            </ul>
        </nav>
    </div>
</header>
    <?php 
    if( $errMsg != ""){ //例外
    echo "<div><center>$errMsg</center></div>";
    }elseif($product->rowCount()==0){
        echo "<div><center>查無此商品資料</center></div>";
    }else{
        $prodRow = $product->fetchObject();
    ?>

<div class="wrapper">
        <div class="box_for_title_hot_topics">
            <div class="title_hot_topics">
                <img src="./images/index/leaf6.svg" class="leafLeft">
                <img src="./images/index/leaf5.svg" class="leafRight">
                <h2>商品詳情</h2>
            </div>      
        </div>
    <div class="detail_wrapper">
        <div class="prdt_img">
            <div class="large_img">
                <!-- ↓↓↓記得id="large"要下在圖片本身-->
                <img  id="large" src="images/prdt/<?php echo $prodRow->prodNo;?>_1.jpg">
            </div>
            <div class="small_img">
                <div class="small_imgs_list">
                    <img src="images/prdt/<?php echo $prodRow->prodNo;?>_1.jpg" class="sm_photo">
                    <img src="images/prdt/<?php echo $prodRow->prodNo;?>_2.jpg" class="sm_photo">
                    <img src="images/prdt/<?php echo $prodRow->prodNo;?>_3.jpg" class="sm_photo">
                    <img src="images/prdt/<?php echo $prodRow->prodNo;?>_4.jpg" class="sm_photo">
                </div>
    <?php
    }
    ?>
            </div>
            <script>
                function showLarge(e){
                    
                    let large = document.getElementById("large");
                    if(e.target.classList.contains("sm_photo")){
                        console.log(large.src);
                        large.src = e.target.src;
                        console.log(e.target.src);
                        console.log(large.src);
                    }	
                        
                }

                window.addEventListener("load", function(){
                    let imgs = document.getElementsByClassName("sm_photo");

                    for( let i=0; i<imgs.length; i++){
                        imgs[i].onclick = showLarge;
                    }                    
                });
            </script>
        </div> <!--prdt_img的結尾標籤-->

        <div class="prdt_text">
            <center><h2><b><?php echo $prodRow->prodName;?></b></h2></center>
            <center>
                <h2 class="prdt_avgscore">4.0</h2>
                <img src="images/prdt/icon/stars_4.svg" class="star">
            </center>

            <p class="introduce" style="line-height: 1.4;">基本介紹：<?php echo $prodRow->prodDesc;?></p>
            <div class="buy">
                <h4>售價:<span class="price_label"><?php echo $prodRow->prodPrice;?></span></h4>
                <div class="purchase">
                    <button class="green_btn shopping_cart_btn putin" id="putin_<?php echo $prodRow->prodNo;?>"> 
                        放入購物車
                        <input type="hidden" 


                            value="<?php echo $prodRow->prodName;?>|<?php echo $prodRow->prodPicPath?>|<?php echo $prodRow->prodPrice;?>">
                    </button>
                    <label for="putin"><img src="images/prdt/icon/shopping_cart.svg" class="purchase_icon">
                    </label>
                    <br>
                </div><!--div.purchase的結尾標籤-->
                <div id="newItem" style="visibility: hidden;">
                    <div id="content">
                        項目數量：<span id="itemCount">0</span>
                        <br>
                        總金額：$<span id="subtotal">0</span>
                    </div>
                </div>
            </div>  <!--div.buy的結尾標籤-->
        </div>  <!--prdt_text的結尾標籤-->
        <table class="previous_and_next">
            <tr>
                <td>
                    <h4>
                        <a href="prod_detail.php?prodNo=<?=$prodNo-1?>" class="a_previous_and_next">
                            <img src="images/prdt/icon/icon_previous.svg">上一筆產品
                        </a>
                    </h4>
                </td>
                <td class="prod_next">
                    <h4>
                        <a href="prod_detail.php?prodNo=<?=$prodNo+1?>" class="a_previous_and_next">下一筆產品
                            <img src="images/prdt/icon/icon_next.svg">
                        </a>
                    </h4>
                </td>
            </tr>
        </table>

    </div> <!--第一個 div.detail_wrapper的結尾標籤-->

    <div class="detail_wrapper">
        <!-- <div class="see_comment"> -->
<?php
//$prodNo = $_REQUEST["prodNo"];
//$prodNo = 3;
//$errMsg = "";
//連線資料庫
// try{
//   require_once("connectProduct.php");
    // $sql1 = "select p.prodReviewNo, p.prodscore, p.prodMsg, p.prodMsgTime, m.memNickname from product_review p join `member` m ON(p.MemNo = m.memNo) where prodNo= :prodNo order by prodMsgTime desc;";
    // $sql1 = "select p.prodReviewNo, p.prodscore, p.prodMsg, p.prodMsgTime, m.memNickname from product_review p join `member` m ON(p.MemNo = m.memNo) where $prodNo = $_REQUEST["prodNo"]  order by prodMsgTime desc;";
  //$product_review = $pdo->query($sql1);
//   $product_review = $pdo->prepare($sql);
//   $product_review->bindValue(":prodNo", $_REQUEST["prodNo"]);
//   $product_review->execute();

//   <?php 
//   $artiRows = $articles->fetchAll(PDO::FETCH_ASSOC); 
//   foreach($artiRows as $i => $artiRow){    
// 
// }catch(PDOException $e){
//   $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
//   $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
// }
// ?> 
            <center><h2>觀看評價</h2></center>
            <ul class="prtd_comment"> 
            <?php 
                $product_reviewRows = $product_review->fetchAll(PDO::FETCH_ASSOC);
                foreach($product_reviewRows as $i =>$product_reviewRow) {
            ?>
                <li>
                    <div><?=$product_reviewRow["memNickname"]?>於<?=$product_reviewRow["prodMsgTime"]?> 發表評價：
                    <?=$product_reviewRow["prodMsg"]?></div>
                    <div class="each_comment">
                        <img src="images/prdt/icon/stars_<?=$product_reviewRow["prodscore"];?>.svg" class="stars">
                        <!-- <button class="accuse" title="我想檢舉這篇留言">
                            檢舉<img src="images/prdt/icon/icon_accuse.svg" class="accuse_icon">
                        </button> -->
                    </div>
                </li>
            <?php  
                };
            ?> 
            
            </ul>  <!--ul.prdt_comment的結尾標籤-->
        <!--</div>--> <!--see_comment的結尾標籤-->
    </div> <!--detail_wrapper的結尾標籤-->

</body>
<footer>
    <div class="footer_content">
        <strong>地址：320 桃園市中壢區中大路300號<br></strong>
        <strong>電話：03-4257387<br></strong>
        <strong>信箱：DD105G3@gmail.com<br></strong>
        <strong>Copyright &copy; 2020 Natural Sweet</srong>
            <i class="fas fa-leaf"></i>
    </div>
</footer>
</html>