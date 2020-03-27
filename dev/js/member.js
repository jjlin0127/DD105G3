var tl = new TimelineMax({
    // repeat: -1,
    yoyo: true,
});

tl.to('.island', 5, {
    x: 400,
}).to('.island', 5, {
    x: 550,
    scale: 1.5
});


// -----------------------------------
$(function(){
    
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
});

// -----------------------------------
// $(document).ready(function () {
//     // console.log(123);
//     //展開訂單明細
//     $('.orderList_btn').on('click', function () {
//         // console.log(321);
//         if ($(this).text() == "訂單明細 v") {
//             // console.log('oop');
//             $('.orderLis_content').removeClass('show');
//             let tar = $(this).next().next(); //吃結構
//             tar.addClass('show');
//             $(this).text("訂單明細 ^");
//         } else {
//             $('.orderLis_content').removeClass('show');
//             $(this).text("訂單明細 v");
//         }
//     });
// });

