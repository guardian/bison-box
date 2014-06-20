var paragraphsVisible = false;

$(function(){
	//Collapse and expand box-out
	$('.boxout-readmore').on('click', function(){
		if(!paragraphsVisible){
			$(this).parent().find('.boxout-secondary-content').toggleClass('invisible');
			$(this).html('<p><img src="images/assets/arrowUp.svg" /> Close</p>');
			paragraphsVisible = true;
		}else{
			$(this).parent().find('.boxout-secondary-content').toggleClass('invisible');
			$(this).html('<p><img src="images/assets/arrowDown.svg" /> Read more</p>');
			paragraphsVisible = false;
		}	
	});
	
	//Get width of parent page
	function handleWidthInfo(positionInfo){
		var pageWidth = positionInfo.innerWidth;
		if(pageWidth<1060){
			if($('.boxout-secondary-content').length > 0){
				if(!$('.boxout-secondary-content').is(':empty')){
					$('.boxout-secondary-content').addClass('invisible');
					$('.boxout-readmore').removeClass('invisible');
				}
			}
		}
	}
	
	iframeMessenger.getPositionInformation(handleWidthInfo);

	// function debugResize(){
	// 	if($('.boxout-secondary-content').length > 0){
	// 		if(!$('.boxout-secondary-content').is(':empty')){
	// 			$('.boxout-secondary-content').addClass('invisible');
	// 			$('.boxout-readmore').removeClass('invisible');
	// 		}
	// 	}
	// }
	// debugResize();
});