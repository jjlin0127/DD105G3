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

function sendForm(e) {
    e.preventDefault();
    //=====使用Ajax 回server端,取回登入者的相關資訊, 放到頁面上  
    let memId = $id("memId").value;
    let memPsw = $id("memPsw").value;
    let data_info = `memId=${memId}&memPsw=${memPsw}`;

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
            member = xhr.responseText;
            console.log(member);
            $id("memNickname").innerText = member.memNickname;
            $id("spanLogin").innerText = "登出";
            window.history.back();
        }
        // else {alert(xhr.status);}

    }
    xhr.open("Post", "dest/../php/ajaxLogin.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send(data_info);
}

function mobilesendForm(e) {
    e.preventDefault();
    //=====使用Ajax 回server端,取回登入者的相關資訊, 放到頁面上  
    let memId = $id("mobilememId").value;
    let memPsw = $id("mobilememPsw").value;
    let data_info = `memId=${memId}&memPsw=${memPsw}`;

    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status == 200) {
            member = JSON.parse(xhr.responseText);
            $id("memNickname").innerText = member.memNickname;
            $id("spanLogin").innerText = "登出";
            window.history.back();
        } else {
            alert(xhr.status);
        }

    }
    xhr.open("Post", "dest/../php/ajaxLogin.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send(data_info);
}

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

// 此段處理註冊
function registerfun(e) {
    e.preventDefault();
    if ($('.firsttimepsw').val() != "" &&
        $('.confirmpsw').val() != "" &&
        $('.registerinput').val() != "" &&
        $('.regisnickname').val() != "") {
        if ($('.whiteform .firsttimepsw').val() === $('.whiteform .confirmpsw').val()) {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.responseText == 'success') { //success
                        alert('Registration success!');
                        $("#memNickname").innerText = member.memNickname;
                        $("#spanLogin").innerText = "登出";
                        window.history.back();
                    } else {
                        alert(xhr.responseText);
                    }
                }
            }
            let regismemId = $('#regismemId').val();
            let regispsw = document.getElementsByClassName('registerinput1')[0].value;
            let regisnickname = $('.regisnickname').val();
            let member_data = `memId=${regismemId}&memPsw=${regispsw}&memNickname=${regisnickname}`;
            let url = "dest/../php/register.php";
            xhr.open("post", url, true);
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.send(member_data);
        } else {
            alert('請檢查兩次密碼輸入是否一致');
            $('.whiteform .firsttimepsw').val('').focus();
            $('.whiteform .confirmpsw').val('');
        }
    } else {
        alert('請輸入完整訊息再送出!');
    }
}

window.addEventListener("load", function() {
    //檢查是否已登入
    getLoginInfo();

    //轉跳登入頁
    $id('spanLogin').onclick = showLoginForm;
    $id('mobilespanLogin').onclick = showLoginForm;

    //送出登入表單
    if (window.location.href.indexOf("login") > -1) { //沒有這個if在login.html以外的分頁會報錯
        $id('btnLogin').onclick = sendForm;
        $id('mobilebtnLogin').onclick = mobilesendForm;
        //送出註冊表單
        $id('btnRegis').onclick = registerfun;
    }


}, false);