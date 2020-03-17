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
    if ($id('spanLogin').innerHTML == "登入" || $id('spanLogin li').innerHTML == "登入") {
        $id('spanLogin').location = location.href = "login.html";
    } else { //登出
        $id('spanLogin').location = window.location.href;
        //-----------回server登出session
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if (xhr.status == 200) { //自server正確的登出
                $id('memNickname').innerHTML = '&nbsp';
                $id('spanLogin').innerHTML = '登入';
            } else {
                alert(xhr.status);
            }
        }
        xhr.open("get", "dest/../php/logout.php", true);
        xhr.send(null);
    }
} //showLoginForm

function sendForm() {
    //=====使用Ajax 回server端,取回登入者的相關資訊, 放到頁面上  
    let memId = $id("memId").value;
    let memPsw = $id("memPsw").value;
    let data_info = `memId=${memId}&memPsw=${memPsw}`;

    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status == 200) {
            member = JSON.parse(xhr.responseText);
            $id("memNickname").innerText = member.memNickname;
            $id("spanLogin").innerText = "登出";
        } else {
            alert(xhr.status);
        }

    }
    xhr.open("Post", "ajaxLogin.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send(data_info);

    //將登入表單上的資料清空，並隱藏起來
    $id('lightBox').style.display = 'none';
    $id('memId').value = '';
    $id('memPsw').value = '';

}

function cancelLogin() {
    //將登入表單上的資料清空，並將燈箱隱藏起來
    $id('lightBox').style.display = 'none';
    $id('memId').value = '';
    $id('memPsw').value = '';
}

function getLoginInfo() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        member = JSON.parse(xhr.responseText);

        if (member.memId) {
            $id("memNickname").innerText = member.memNickname;
            $id("spanLogin").innerText = "登出";
        }
    }
    xhr.open("get", "dest/../php/getLoginInfo.php", true);
    xhr.send(null);

};

window.addEventListener("load", function() {
    //.....................................檢查是否已登入
    // getLoginInfo();

    //.....................................註冊所有可執行的事件
    //===設定spanLogin.onclick 事件處理程序是 showLoginForm

    $id('spanLogin').onclick = showLoginForm; //轉跳登入頁

    //===設定btnLogin.onclick 事件處理程序是 sendForm
    // $id('btnLogin').onclick = sendForm; //登入

    //===設定btnLoginCancel.onclick 事件處理程序是 cancelLogin
    // $id('btnLoginCancel').onclick = cancelLogin; //取消
}, false);