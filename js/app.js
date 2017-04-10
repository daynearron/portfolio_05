$(document).foundation();
$(function(){
	//Animsition
	$(".row").animsition({
		inClass: 'fade-in-up-sm',
		outClass: 'fade-out-down-sm',
		inDuration: 500,
		outDuration: 500,
		linkElement: '.animsition-link',
		// e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
		loading: true,
		loadingParentElement: 'body', //animsition wrapper element
		loadingClass: 'animsition-loading',
		unSupportCss: [
		  'animation-duration',
		  '-webkit-animation-duration',
		  '-o-animation-duration'
		]
	});
	$(".hero").animsition({
		inClass: 'fade-in-down-sm',
		outClass: 'fade-out-up-sm',
		inDuration: 500,
		outDuration: 500,
		linkElement: '.animsition-link',
		// e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
		loading: true,
		loadingParentElement: 'body', //animsition wrapper element
		loadingClass: 'animsition-loading',
		unSupportCss: [
		  'animation-duration',
		  '-webkit-animation-duration',
		  '-o-animation-duration'
		]
	});
});