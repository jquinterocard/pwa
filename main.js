// Service Worker
//Verificar si el navegador tiene la funcionalidad de service worker
if('serviceWorker' in navigator) {
	console.log('Puedes usar los service worker en tu navegador');

	// Configuracion service worker
	navigator.serviceWorker.register('./sw.js')
	.then(res => console.log('Service worker cargado correctamente', res))
	.catch(err => console.log('Service worker no se ha podido registrar', err));

}else {
	console.log('No puedes usar los service worker en tu navegador');
}


// Scroll suavizado
$(document).ready(function(){

	$("#menu a").click(function(e) {
		e.preventDefault();

		console.log($("#services").offset().top);

		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top
		});


		return false;
	});

});