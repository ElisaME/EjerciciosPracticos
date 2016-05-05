//Escribe aquí tú código
var numeros=prompt("Cuantos numeros vas a ingresar?")
var i=1
var positivos=0
var negativos=0

while(i<=parseInt(numeros)){
	var numero=prompt("Ingresa cifra")
	i++
	if(parseInt(numero) > 0){
		positivos+=1
	}else{
		negativos+=1
	}
}

alert("Numeros positivos: " + positivos + "\nNumeros negativos: " + negativos)