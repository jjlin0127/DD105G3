$(document).ready(function(e){
<<<<<<< HEAD
=======

  $('.cube').css('transform','rotateX(-30deg) rotateY(120deg)'); //一開始要立體的角度

>>>>>>> 6f49b77d50069adfd005e3927ec1a033964af516
  $('.for-front').click(function(e){ //如果label按鈕被點擊
    $('.cube-face-front').siblings().removeClass('checked'); //其他同層則移除.checked
    $('.cube-face-front').addClass('checked'); //盒子的面就加上.checked
    $('.cube').css('transform','rotateX(0deg) rotateY(0deg)') //盒子旋轉到那面
  })

  $('.for-back').click(function(e){
    $('.cube-face-back').siblings().removeClass('checked');
    $('.cube-face-back').addClass('checked');
    $('.cube').css('transform','rotateX(0deg) rotateY(180deg)')
  })

  $('.for-top').click(function(e){
    $('.cube-face-top').siblings().removeClass('checked');
    $('.cube-face-top').addClass('checked');
    $('.cube').css('transform','rotateX(-90deg) rotateY(0deg)')
  })

  $('.for-bottom').click(function(e){
    $('.cube-face-bottom').siblings().removeClass('checked');
    $('.cube-face-bottom').addClass('checked');
    $('.cube').css('transform','rotateX(90deg) rotateY(0deg)')
  })

  $('.for-left').click(function(e){
    $('.cube-face-left').siblings().removeClass('checked');
    $('.cube-face-left').addClass('checked');
    $('.cube').css('transform','rotateX(0deg) rotateY(90deg)')
  })

  $('.for-right').click(function(e){
    $('.cube-face-right').siblings().removeClass('checked');
    $('.cube-face-right').addClass('checked');
    $('.cube').css('transform','rotateX(0deg) rotateY(-90deg)')
  })

<<<<<<< HEAD
  $('.for-rotate-cube').click(function(e){  //旋轉的label按鈕被點擊
    $('.cube').css('transform','rotateX(-30deg) rotateY(110deg) ') //盒子旋轉成三個面都看得到
  })
=======

  // $('.for-rotate-cube').click(function(e){  //旋轉的label按鈕被點擊
  //   $('.cube').css('transform','rotateX(-30deg) rotateY(110deg) ') //盒子旋轉成三個面都看得到
  // })
>>>>>>> 6f49b77d50069adfd005e3927ec1a033964af516

  
  // tab切換標籤
  var _showTab = 0;
  var $defaultLi = $('ul.tabs li').eq(_showTab).addClass('active');
  $($defaultLi.find('a').attr('href')).siblings().hide();
  $('ul.tabs li').click(function() {
    var $this = $(this),
      _clickTab = $this.find('a').attr('href');
    $this.addClass('active').siblings('.active').removeClass('active');
    $(_clickTab).stop(false, true).fadeIn().siblings().hide();
        return false;  
  }).find('a').focus(function(){
    this.blur();
  });


  $('.addCartBtn').click(function(e){
    alert('商品已加入購物車');
  }

)});


// 宣告顏色選擇器
var colorPicker = new iro.ColorPicker("#picker", {
  // Set the size of the color picker
  width: 200,
  // Set the initial color to pure red
  color: "#f00"
});

// 如果選擇器的顏色改變了，就執行function
colorPicker.on('color:change', function(color) {
  // log the current color as a HEX string
  console.log(color.hexString);
  
  // 選擇盒子的六個面
  var front = document.querySelector('.cube-face-front');
  var back = document.querySelector('.cube-face-back');
  var top = document.querySelector('.cube-face-top');
  var bottom = document.querySelector('.cube-face-bottom');
  var left = document.querySelector('.cube-face-left');
  var right = document.querySelector('.cube-face-right');

  // 如果盒子的面有.checked，就讓那面的顏色變成顏色選擇器現在的顏色
  if(front.classList.contains('checked')){
    front.style.backgroundColor = color.hexString;
  }else if(back.classList.contains('checked')){
    back.style.backgroundColor = color.hexString;
  }else if(top.classList.contains('checked')){
    top.style.backgroundColor = color.hexString;
  }else if(bottom.classList.contains('checked')){
    bottom.style.backgroundColor = color.hexString;
  }else if(left.classList.contains('checked')){
    left.style.backgroundColor = color.hexString;
  }else if(right.classList.contains('checked')){
    right.style.backgroundColor = color.hexString;
  }
});




// 圖片拖曳事件
function doFirst(){
//先跟畫面產生關聯，再建事件聆聽的功能

<<<<<<< HEAD
=======

// 監聽：旋轉按鈕被點擊的話，就改變禮盒角度
let rotateBtn = document.querySelector('.for-rotate-cube');
rotateBtn.addEventListener('click',degChange);

>>>>>>> 6f49b77d50069adfd005e3927ec1a033964af516
//圖片上傳的change事件
document.getElementById('theFile').onchange = fileChange; 

// 拖曳事件
let files = document.querySelectorAll('.drag_img');  //抓img圖片
for(let i = 0; i < files.length; i++){
  files[i].addEventListener('dragstart',dragstart);  //img圖片監聽dragstart事件
}
let dropAreas = document.querySelectorAll('.cube-face'); // 抓拖曳放下的區域
for(let i =0; i < dropAreas.length; i++){
  dropAreas[i].addEventListener('dragover',dragover); //放置區域監聽dragover事件
  dropAreas[i].addEventListener('drop',drop);  //放置區域監聽drop事件
}
}


function fileChange(){
let file = document.getElementById('theFile').files[0];  //抓input上傳的檔案本身

let readFile = new FileReader();
readFile.readAsDataURL(file);  //讀取圖片路徑
readFile.addEventListener('load',function(){  //圖片上傳完成後，將空img標籤填入圖片路徑
    myImg = document.getElementById('myImg');
    myImg.src = this.result; //回傳圖片路徑
    myImg.style.maxWidth = '100px';
    myImg.style.maxHeight = '100px';
});
}

<<<<<<< HEAD
=======


<<<<<<< HEAD

>>>>>>> 6f49b77d50069adfd005e3927ec1a033964af516
=======
var imgNum = 1;
>>>>>>> e6cbfee870521c1a1c8e8ce67b5eedf4557f5e79
function dragstart(e){  //e.target代表圖片的DOM本身
let img = e.target.src;  //取得圖片路徑

let data = `<img width="50px" src="${img}" id="img${imgNum}">`;  //製作img標籤字串
e.dataTransfer.setData('image/jpeg',data);
<<<<<<< HEAD
<<<<<<< HEAD
}

function dragover(e){
e.preventDefault();
}

function drop(e){  //e.target代表放置區域的DOM本身
e.preventDefault();

let data =  e.dataTransfer.getData('image/jpeg');  //抓到img標籤字串
e.target.innerHTML += data; //每拖曳一個圖片，就在放置區域的DOM裡增加拖曳的img標籤字串
}


window.addEventListener('load',doFirst);
=======
e.dataTransfer.setData("offsetx", e.offsetX);
e.dataTransfer.setData("offsety", e.offsetY);
=======

imgNum++;
>>>>>>> e6cbfee870521c1a1c8e8ce67b5eedf4557f5e79
}

function dragover(e){
  e.preventDefault();
  e.target.style.opacity = "0.8";  //圖片移到盒子上，盒子就變透明
   //新增加的元素可以直接被事件觸發，透過for迴圈去抓元素的方式不行
  if (e.target.classList.contains("drag_img") == true) {//contains一個droped_img使
     e.target.style.pointerEvents = "none";//pointerEvents穿透屬性 none指不到
  }//使用 classList 屬性是取得元素 Class 的一種便利方式
}




function drop(e){  //e.target代表放置區域的DOM本身
  e.preventDefault();
  let data =  e.dataTransfer.getData('image/jpeg');  //抓到img標籤字串


  e.target.innerHTML += data; //每拖曳一個圖片，就在放置區域的DOM裡增加拖曳的img標籤字串
  e.target.style.opacity = "1"; //放下圖片，盒子透明度就恢復正常

  let img = document.getElementById(`img${imgNum-1}`);


  let x = e.offsetX;
  let y = e.offsetY;
  alert(x);
  alert(y);

  img.style.position = "absolute";
  img.style.top = y;
  img.style.left = x;
}
>>>>>>> 6f49b77d50069adfd005e3927ec1a033964af516




<<<<<<< HEAD

<<<<<<< HEAD
=======
=======




>>>>>>> e6cbfee870521c1a1c8e8ce67b5eedf4557f5e79
var clickCount = 0;  //要先宣告在外面，才能一直被加，放在function裡執行完畢資料就會消失
function degChange(e){
  clickCount ++; 
  
  let cube = document.querySelector('.cube');
  if(clickCount == 12){
    clickCount = 0;
  }
  let degNow = 120 + 30 * clickCount;
  cube.style.transform = `rotateX(-30deg) rotateY(${degNow}deg)`;
}


window.addEventListener('load',doFirst);
>>>>>>> 6f49b77d50069adfd005e3927ec1a033964af516
