//Escribe aquí tú código
var x=1
var y=1
var z
var cifras=prompt("Cuantas cifras quieres?")

alert("La Sucesion Fibonacci es:")
alert(0)
alert(1)

for(i=3 ; i<=parseInt(cifras) ; i++){
	z=x+y
	x=y
	y=z
	alert(z)	
}