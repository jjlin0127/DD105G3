var storage = sessionStorage;

function $id(id){
    return document.getElementById(id);
}

function loadRecommendation(){

    let cusFruitsNo = storage.getItem('recommend');
    let data_info = `cusFruitsNo=${cusFruitsNo}`;
     
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
      if(xhr.status==200){
        recommendation = xhr.responseText;
        if (recommendation == "error") {
            alert("沒有傳回建議組合")
        } else {
            success = JSON.parse(xhr.responseText);
            switch(success.prodNo1){
                case "1": prodNo1 = "楊桃";break;
                case "2": prodNo1 = "鳳梨";break;
                case "3": prodNo1 = "火龍果";break;
                case "4": prodNo1 = "香蕉";break;
                case "5": prodNo1 = "草莓";break;
                case "6": prodNo1 = "芭樂";break;
                case "7": prodNo1 = "芒果";break;
                case "8": prodNo1 = "蘋果";break;
                case "9": prodNo1 = "藍莓";break;
            }
            switch(success.prodNo2){
                case "1": prodNo2 = "楊桃";break;
                case "2": prodNo2 = "鳳梨";break;
                case "3": prodNo2 = "火龍果";break;
                case "4": prodNo2 = "香蕉";break;
                case "5": prodNo2 = "草莓";break;
                case "6": prodNo2 = "芭樂";break;
                case "7": prodNo2 = "芒果";break;
                case "8": prodNo2 = "蘋果";break;
                case "9": prodNo2 = "藍莓";break;
            }
            switch(success.prodNo3){
                case "1": prodNo3 = "楊桃";break;
                case "2": prodNo3 = "鳳梨";break;
                case "3": prodNo3 = "火龍果";break;
                case "4": prodNo3 = "香蕉";break;
                case "5": prodNo3 = "草莓";break;
                case "6": prodNo3 = "芭樂";break;
                case "7": prodNo3 = "芒果";break;
                case "8": prodNo3 = "蘋果";break;
                case "9": prodNo3 = "藍莓";break;
            }
            switch(success.prodNo4){
                case "1": prodNo4 = "楊桃";break;
                case "2": prodNo4 = "鳳梨";break;
                case "3": prodNo4 = "火龍果";break;
                case "4": prodNo4 = "香蕉";break;
                case "5": prodNo4 = "草莓";break;
                case "6": prodNo4 = "芭樂";break;
                case "7": prodNo4 = "芒果";break;
                case "8": prodNo4 = "蘋果";break;
                case "9": prodNo4 = "藍莓";break;
            }
            switch(success.prodNo5){
                case "1": prodNo5 = "楊桃";break;
                case "2": prodNo5 = "鳳梨";break;
                case "3": prodNo5 = "火龍果";break;
                case "4": prodNo5 = "香蕉";break;
                case "5": prodNo5 = "草莓";break;
                case "6": prodNo5 = "芭樂";break;
                case "7": prodNo5 = "芒果";break;
                case "8": prodNo5 = "蘋果";break;
                case "9": prodNo5 = "藍莓";break;
            }
            switch(success.prodNo6){
                case "1": prodNo6 = "楊桃";break;
                case "2": prodNo6 = "鳳梨";break;
                case "3": prodNo6 = "火龍果";break;
                case "4": prodNo6 = "香蕉";break;
                case "5": prodNo6 = "草莓";break;
                case "6": prodNo6 = "芭樂";break;
                case "7": prodNo6 = "芒果";break;
                case "8": prodNo6 = "蘋果";break;
                case "9": prodNo6 = "藍莓";break;
            }
            $id("prodNo1").innerText = prodNo1;
            $id("prodNo2").innerText = prodNo2;
            $id("prodNo3").innerText = prodNo3;
            $id("prodNo4").innerText = prodNo4;
            $id("prodNo5").innerText = prodNo5;
            $id("prodNo6").innerText = prodNo6;
        }
      } else { alert(xhr.status); }
    }
    xhr.open("POST", "dest/../php/getRecommendation.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send(data_info);

};

$(document).ready(function(){
    loadRecommendation();
})