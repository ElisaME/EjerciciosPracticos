//Escribe aquí tú código
var tiendas=0
var empleados=0
var ventas=0
var i=1
var j=1
var k=1

var ciudades=prompt("Cuantas ciudades son?")
while(i<=ciudades){
	var CT=prompt("Cuantas tiendas son en la ciudad " + i + "?")
	i++
	tiendas+=parseInt(CT)
	// alert("Son" + parseInt(CT) + tiendas)
	while(j<=tiendas){
		var CE=prompt("Cuantos empleados son en la tienda " + j + "?")
		j++
		empleados+=parseInt(CE)
		// alert("Son" + CE + empleados)
		while(k<=empleados){
			var CV=prompt("Cuantas ventas tuvo el empleado " + k + "?")
			k++
			ventas+=parseInt(CV)
			// alert("Son" + CV + ventas)
		}
	}
}

alert("Son " + parseInt(ciudades) + "ciudades")
alert("Son " + parseInt(tiendas) + "tiendas")
alert("Son " + parseInt(empleados) + "empleados")
alert("Son " + parseInt(ventas) + "ventas")