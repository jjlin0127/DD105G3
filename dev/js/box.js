// ---------------------改變盒子角度、增減盒面class------------------------------------------------
$(document).ready(function(e){
<<<<<<< HEAD
=======

  $('.cube').css('transform','rotateX(-30deg) rotateY(120deg)'); //一開始要立體的角度

  $('.for-rotate-cube').click(function(e){ 
    e.preventDefault();  //取消預設行為 點了按鈕畫面才不會跳掉
  })

  $('.for-zoom-cube').click(function(e){ 
    e.preventDefault();
    // this.toggleClass('zoom');
    $('.cube-wrap').toggleClass('zoom');
    $('.for-zoom-cube').toggleClass('zoom');
  })

>>>>>>> 2da8c96558c60749e9fe63bbf99a630e393fecb3
  $('.for-front').click(function(e){ //如果label按鈕被點擊
    e.preventDefault();
    $('.cube-face-front').siblings().removeClass('checked'); //其他同層則移除.checked
    $('.cube-face-front').addClass('checked'); //盒子的面就加上.checked
    $('.cube').css('transform','rotateX(0deg) rotateY(0deg)') //盒子旋轉到那面
  })

  $('.for-back').click(function(e){
    e.preventDefault();
    $('.cube-face-back').siblings().removeClass('checked');
    $('.cube-face-back').addClass('checked');
    $('.cube').css('transform','rotateX(0deg) rotateY(180deg)')
  })

  $('.for-top').click(function(e){
    e.preventDefault();
    $('.cube-face-top').siblings().removeClass('checked');
    $('.cube-face-top').addClass('checked');
    $('.cube').css('transform','rotateX(-90deg) rotateY(0deg)')
  })

  $('.for-bottom').click(function(e){
    e.preventDefault();
    $('.cube-face-bottom').siblings().removeClass('checked');
    $('.cube-face-bottom').addClass('checked');
    $('.cube').css('transform','rotateX(90deg) rotateY(0deg)')
  })

  $('.for-left').click(function(e){
    e.preventDefault();
    $('.cube-face-left').siblings().removeClass('checked');
    $('.cube-face-left').addClass('checked');
    $('.cube').css('transform','rotateX(0deg) rotateY(90deg)')
  })

  $('.for-right').click(function(e){
    e.preventDefault();
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
>>>>>>> 2da8c96558c60749e9fe63bbf99a630e393fecb3

  
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
    alert('商品已加入購物車，按鈕-查看購物車');
  }

)});

// ---------------------盒子變色------------------------------------------------
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
// ---------------------盒子變色------------------------------------------------




// ---------------------圖片拖曳-------------------------------------------------------------------------

var dropCount = 1;
var arrDropedImg = [];  //放從tab放到盒子上的img，因為動態生成的元素沒有辦法被抓，所以要改成陣列操作監聽

//---------------------圖片按鈕-------------------------------------------


function doFirst(){
//先跟畫面產生關聯，再建事件聆聽的功能

<<<<<<< HEAD
//圖片上傳的change事件
document.getElementById('theFile').onchange = fileChange; 
=======
  // 監聽：旋轉按鈕被點擊的話，就改變禮盒角度
  let rotateBtn = document.querySelector('.for-rotate-cube');
  rotateBtn.addEventListener('click',degChange);

  //圖片上傳的change事件
  document.getElementById('theFile').onchange = fileChange; 

  // dragstart 事件(右邊tab裡的圖)
  let files = document.querySelectorAll('.drag_img');  //抓img圖片
  for(let i = 0; i < files.length; i++){
    files[i].addEventListener('dragstart',dragstart);  //監聽img的dragstart事件
  }
>>>>>>> 2da8c96558c60749e9fe63bbf99a630e393fecb3

  // dragover/drop 事件(放置圖片的區域)
  let dropAreas = document.querySelectorAll('.cube-face'); // 抓拖曳放下的區域
  for(let i =0; i < dropAreas.length; i++){
    dropAreas[i].addEventListener('dragover',dragover); //放置區域監聽dragover事件
    dropAreas[i].addEventListener('drop',drop);  //放置區域監聽drop事件
    dropAreas[i].addEventListener('dragleave',dragleave);  

    dropAreas[i].addEventListener('mouseenter', function wakeUp(e){ //動態新增的東西需要先監聽父層，子層新增的元素開監聽才有效
      console.log('1234');
      for(let i = 0; i < arrDropedImg.length; i++){
        arrDropedImg[i].addEventListener('dragstart', function dragstart_2(e){
          for(let i = 0; i < arrDropedImg.length; i++){  //當drag時，其他盒上圖移除select
            arrDropedImg[i].classList.remove('select');
          }
          e.target.classList.add('select');  //drag時，會有select
          e.dataTransfer.setData("text", "onSurface");  //在drop的時候，會用這個來判定圖片是否在盒子上
          imgOnBox = this; //沒有加var 是全域變數 什麼時候都可以用 -> drop時可以用此抓取在箱子被drag的圖片
        })
      }
      for(let i = 0; i < arrDropedImg.length; i++){
        arrDropedImg[i].addEventListener('click',function(e){  
          for(let i = 0; i < arrDropedImg.length; i++){  
            arrDropedImg[i].classList.remove('select');  //當盒上圖被點擊時，所有盒上圖先移除select
          }
          e.target.classList.add('select');  //被點的圖再加上class
          imgSelect = e.target;
        })
      }
    });  

    largeBtn = document.getElementById('large');
    smallBtn = document.getElementById('small');
    turnLeftBtn = document.getElementById('turnLeft');
    turnRightBtn = document.getElementById('turnRight');
    deleteBtn = document.getElementById('deleteBtn');

    largeBtn.addEventListener('click', larger);
    smallBtn.addEventListener('click', smaller);
    turnLeftBtn.addEventListener('click', turnLeft);
    turnRightBtn.addEventListener('click', turnRight);
    deleteBtn.addEventListener('click', deleteImg);
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
<<<<<<< HEAD
let img = e.target.src;  //取得圖片路徑
let data = `<image width="50px" src="${img}"> `;  //製作img標籤字串
e.dataTransfer.setData('image/jpeg',data);
=======
  // 分為兩種方法  1.資料單純放圖片的src，到drop再加工給更多屬性   2.將資料做成字串
  let data = e.target.src;  //方法1
  //--------------------------------方法2------------------------------------------------------------------------------------------------------
  // let data = `<img width="50px" src="${img}" class="imgOnBox imgOnBox${dropCount}">`;  //製作img標籤字串(傳送的資料設定class：(將會)放在box上的圖片)
  //--------------------------------方法2------------------------------------------------------------------------------------------------------

  e.dataTransfer.setData('image/jpeg',data);
>>>>>>> 2da8c96558c60749e9fe63bbf99a630e393fecb3
}


function dragover(e){
e.preventDefault();
}

<<<<<<< HEAD
function drop(e){  //e.target代表放置區域的DOM本身
e.preventDefault();

let data =  e.dataTransfer.getData('image/jpeg');  //抓到img標籤字串
e.target.innerHTML += data; //每拖曳一個圖片，就在放置區域的DOM裡增加拖曳的img標籤字串
=======
function dragleave(e){
  e.target.style.opacity = "1"; //離開盒子，盒子透明度就恢復正常
}

function drop(e){  //e.target代表放置區域的DOM本身
  e.preventDefault();

  if (e.dataTransfer.getData('text') == "onSurface"){ //要是圖片是本來就在盒子上的，就執行這段
    let x = e.offsetX;
    let y = e.offsetY;
    imgOnBox.style.top = y + "px";
    imgOnBox.style.left = x + "px";
    imgOnBox.classList.remove("select"); //drop完就移除select
  }else{ //如果是從tab移入的圖片，就執行這段
    //--------------------------------字串方法----------------------------------------
    // let data =  e.dataTransfer.getData('image/jpeg');  //抓到img標籤字串
    // e.target.innerHTML += data; //每拖曳一個圖片，就在放置區域的DOM裡增加拖曳的img標籤字串
    //--------------------------------字串方法----------------------------------------
    
    //--------------------------------新增DOM，之後appendChild方法----------------------------------------
    var img = document.createElement('img');  //先新增DOM節點
    img.src = e.dataTransfer.getData('image/jpeg');  //取得src資料
    img.style.width = '50px'; //給寬度
    img.style.position = "absolute"; //才可以被定位在盒子
    img.style.zIndex = dropCount; 
    // img.classList.add("imgOnBox");  //可能不需要了
    // img.classList.add(`imgOnBox${dropCount}`); //可能不需要了
    let x = e.offsetX;  //dropX位置 ＝ 相對盒子左上的x位置
    let y = e.offsetY; //dropY位置 ＝ 相對盒子左上的y位置
    img.style.top = y + "px"; 
    img.style.left = x + "px";
    img.style.transform = 'translateX(-50%) translateY(-50%)'; //會用圖片左上角定位，要移回本身的寬高
    this.appendChild(img);//把圖片塞進去
    dropCount++;  //如果成功被drop，數字才會增加，這樣等等drag才會是下一個數字
    arrDropedImg.push(img);//做一個陣列把動態添加元素的資料先存起來，之後統一操作
    //--------------------------------新增DOM，之後appendChild方法----------------------------------------
  
  } 
  e.target.style.opacity = "1"; //放下圖片，盒子透明度就恢復正常
>>>>>>> 2da8c96558c60749e9fe63bbf99a630e393fecb3
}

function larger(e){
  imgSelect.style.width = `${imgSelect.width + 5}px`;  //給予寬度: imgSelect.style.width =  "數值px";  查值: imgSelect.width;
}
function smaller(e){
  imgSelect.style.width = `${imgSelect.width - 5}px`;
}
function turnLeft(e){
  imgSelect.style.transform += 'rotate(-5deg)';   //嘗試出來 使用+= 可以改變角度， 但是 -= 不行
}
function turnRight(e){
  imgSelect.style.transform += 'rotate(5deg)'; 
}
function deleteImg(e){
  imgSelect.setAttribute('src','');
  imgSelect.classList.remove('select');
}

<<<<<<< HEAD
window.addEventListener('load',doFirst);





=======
// ---------------------圖片拖曳-------------------------------------------------------------------------

//-----------------------------盒子360度旋轉----------------------------------------------------------
var clickCount = 0;  //要先宣告在外面，才能一直被加，放在function裡執行完畢資料就會消失
function degChange(e){
  clickCount ++; 
  
  let cube = document.querySelector('.cube');
  if(clickCount == 12){
    clickCount = 0;
  }
  let degNow = 120 + 30 * clickCount;
  cube.style.transform = `rotateX(-30deg) rotateY(${degNow}deg)`;
  // cube.style.transform += `rotateY(30deg)`;  // 使用 += 改變角度
}
//-----------------------------盒子360度旋轉----------------------------------------------------------

window.addEventListener('load',doFirst);
>>>>>>> 2da8c96558c60749e9fe63bbf99a630e393fecb3
