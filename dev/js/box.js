$(document).ready(function(e){
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

  $('.for-rotate-cube').click(function(e){  //旋轉的label按鈕被點擊
    $('.cube').css('transform','rotateX(-30deg) rotateY(110deg) ') //盒子旋轉成三個面都看得到
  })

  
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

function dragstart(e){  //e.target代表圖片的DOM本身
let img = e.target.src;  //取得圖片路徑
let data = `<image width="50px" src="${img}"> `;  //製作img標籤字串
e.dataTransfer.setData('image/jpeg',data);
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





