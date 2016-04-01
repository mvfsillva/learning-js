(function (win, doc) {
	'use strict';

	var counter = 0;
	var $button = doc.querySelector('[data-js="button"]');
	var temporizador;

	function timer() {
		if (counter > 20)
			return;
		temporizador = setTimeout(timer, 1000);
	}

	timer();

	$button.addEventListener('click', function(){
		clearTimeout(temporizador);
	}, false);

})(window, document);
