//Escribe aquí tú código
var numPersonas= prompt("Cuantas personas son?")
var suma=0

for(i=1 ; i<=numPersonas ; i++){
	var estatura=prompt("Cual es la estatura?")
	suma+= parseFloat(estatura)
	var promedio=suma/numPersonas
}
alert("El promedio de estaturas es de: " + promedio)