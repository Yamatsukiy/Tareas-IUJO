// Obtener el elemento <ul> donde vamos a mostrar los múltiplos
var lista = document.getElementById("multiplos");

// Generar los múltiplos de 8 hasta el valor 500 y agregarlos a la lista
for (var i = 1; i <= 500/8; i++) {
	// Crear un elemento <li> para el múltiplo actual
	var item = document.createElement("li");
	
	// Calcular el múltiplo actual
	var multiplo = i * 8;
	
	// Agregar el múltiplo actual al elemento <li>
	var texto = document.createTextNode(multiplo);
	item.appendChild(texto);
	
	// Agregar el elemento <li> a la lista
	lista.appendChild(item);
}
