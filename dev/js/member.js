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
		this.blur()
	});
});

// ----------------------------------------------------

