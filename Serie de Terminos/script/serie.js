// Obtener el elemento <ul> donde vamos a mostrar la serie
var lista = document.getElementById("serie");

// Definir la serie
var serie = 11;

// Definir un contador para controlar los términos impresos
var contador = 0;

// Generar los primeros 25 términos de la serie y agregarlos a la lista
for (var i = 0; i < 25; i++) {
	// Crear un elemento <li> para el término actual
	var item = document.createElement("li");
	
	// Agregar el término actual al elemento <li>
	var texto = document.createTextNode(serie);
	item.appendChild(texto);
	
	// Agregar el elemento <li> a la lista
	lista.appendChild(item);
	
	// Incrementar el contador de términos impresos
	contador++;
	
	// Generar el siguiente término de la serie
	serie += 11 * contador;
}
