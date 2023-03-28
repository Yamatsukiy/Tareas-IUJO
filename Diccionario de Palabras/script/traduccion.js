function traducir() {
	// Obtener la palabra ingresada por el usuario
	var palabra = document.getElementById("palabra").value.toLowerCase();
	
	// Definir un objeto con las palabras y sus traducciones
	var diccionario = {"casa": "house", "mesa": "table", "perro": "dog", "gato": "cat"};
	
	// Buscar la traducción de la palabra ingresada en el diccionario
	if (palabra in diccionario) {
		var traduccion = diccionario[palabra];
		document.getElementById("resultado").innerHTML = "La traducción de '" + palabra + "' es '" + traduccion + "'.";
	} else {
		document.getElementById("resultado").innerHTML = "La palabra ingresada no está en el diccionario.";
	}
}
