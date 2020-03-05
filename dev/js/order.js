$(document).ready(function () {
    // console.log(123);
    //展開訂單明細
    $('.orderList_btn').on('click', function () {
        // console.log(321);
        if ($(this).text() == "訂單明細 v") {
            // console.log('oop');
            $('.orderLis_content').removeClass('show');
            let tar = $(this).next().next(); //吃結構
            tar.addClass('show');
            $(this).text("訂單明細 ^");
        } else {
            $('.orderLis_content').removeClass('show');
            $(this).text("訂單明細 v");
        }
    });

});


//========================評價燈箱=========================== 
function showBox() {
    var evaBox = document.querySelectorAll('button.orderList_eva');
    // console.log(evaBox.length);
    for (var i = 0; i < evaBox.length; i++) {
        evaBox[i].addEventListener("click", function (e) {
            let lightBox = e.target.parentNode.parentNode.nextElementSibling;
            // console.log(e.target);
            // console.log(e.target.parentNode);
            // console.log(lightBox);
            lightBox.classList.add("appear");

        });
    }
}
window.addEventListener('load', showBox, false);

//========================評價燈箱離開=========================== 
function closeBox() {
    var leavEva = document.getElementsByClassName('eva_lightBox_leave');
    // console.log(leavEva.length);
    for (var i = 0; i < leavEva.length; i++) {
        leavEva[i].addEventListener('click', function (e) {
            
            let lightEvaBox = e.target.parentNode.parentNode;
            // console.log(e.target);
            lightEvaBox.classList.remove('appear');

        });

    }

}
window.addEventListener('load', closeBox, false);

//========================評價燈箱結束===========================