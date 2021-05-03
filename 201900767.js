function Conversion() {
    var lemp= document.getElementById("lps").value;
    var euro,dolar,peso;
    euro=lemp*0.034;
    dolar=lemp*0.041;
    peso=lemp*0.84;
console.log(lemp +" Lempiras Equivalen a: "+ euro +" Euros");
console.log(lemp +" Lempiras Equivalen a: "+ dolar +" Dolares");
console.log(lemp +" Lempiras Equivalen a: "+ peso +" Pesos");
}

function triangulo() {
var a = document.getElementById("lado1").value;
var b = document.getElementById("lado2").value;
var c = document.getElementById("lado3").value;

if(a==b && b==c) {
    console.log(' El triangulo es equilatero ');
} else if(a==b || b==c || a==c) {
    console.log(' El triangulo es isosceles ');
} else { 
    console.log(' El triangulo es escaleno ');
}
}

function arreglo() {
    let numeros = [5,12,33,45,34,24,65,76,43];
    let count = numeros.length;
    let suma=0;
    let pro;
    numeros.forEach (function(numero)
    {suma += numero;});
    console.log(suma);
    pro=suma/count;
    console.log(' El total de la suma de los valores en el arreglo es: '+suma);
    console.log(' El Promedio de los valores en el arreglo es: '+pro);

}

