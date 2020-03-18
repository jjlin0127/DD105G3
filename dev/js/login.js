//此段處理登入框互動效果及頁籤切換
$(document).ready(function() {
    $(".signup").css("display", "none");
    $('#signup').click(function() {
        let width = $(window).width();
        if (width < 768) {
            $(".whiteform").css("transform", "translateX(50%)");
        } else if (width >= 768) {
            $(".whiteform").css("transform", "translateX(80%)");
        }
        $(".signin").css("display", "none");
        $(".signup").css("display", "");
    });
    $('#signin').click(function() {
        $(".whiteform").css("transform", "translateX(0%)");
        $(".signup").css("display", "none");
        $(".signin").css("display", "");
    });
    $("#mobilelogintab").tabs();
});

//此段處理登入登出
function $id(id) {
    return document.getElementById(id);
}

let member;

function showLoginForm() {
    if ($id('spanLogin').innerHTML == "登入" || $id("mobilespanLogin").innerHTML == "登入") {
        $id('spanLogin').location = location.href = "login.html";
        $id('mobileloginLink').location = location.href = "login.html";
    } else { //登出
        $id('spanLogin').location = window.location.href;
        $id('mobileloginLink').location = window.location.href;
        //-----------回server登出session
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if (xhr.status == 200) { //自server正確的登出
                $id("memNo").value = '&nbsp';
                $id('memNickname').innerHTML = '&nbsp';
                $id('spanLogin').innerHTML = '登入';
                //以下漢堡內的變化
                $id("mobilememNickname").innerHTML = '&nbsp';
                $id("mobilespanLogin").innerHTML = "登入";
            } else {
                alert(xhr.status);
            }
        }
        xhr.open("get", "dest/../php/logout.php", true);
        xhr.send(null);
    }
} //showLoginForm

function getLoginInfo() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        member = JSON.parse(xhr.responseText);

        if (member.memId) {
            $id("memNo").value = member.memNo;
            $id("memNickname").innerText = member.memNickname;
            $id("spanLogin").innerText = "登出";
            //以下漢堡內的變化
            $id("mobilememNickname").innerText = `${member.memNickname}，您好`;
            $id("mobilespanLogin").innerText = "登出";
        }
    }
    xhr.open("get", "dest/../php/getLoginInfo.php", true);
    xhr.send(null);

};

window.addEventListener("load", function() {
    //檢查是否已登入
    getLoginInfo();

    //轉跳登入頁
    $id('spanLogin').onclick = showLoginForm;
    $id('mobilespanLogin').onclick = showLoginForm;
}, false);