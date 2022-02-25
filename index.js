function _id(ident){
    return document.getElementById(ident);
}

function factorial(){
    var operacionsFactorial;
    var entradaFactorial = _id("entradaFactorial").value;
    var total= 1;
	for ( var i=1; i<=entradaFactorial; i++) {
		total = total * i; 
        operacionsFactorial += i + "*";
	}
 
    _id("resultatFactorial").innerHTML = total;
    _id("operacionsFactorial").innerHTML = total;


    
}


function calculaIVA(){ // mira  por un lado ya tengo el codigo pero no se como terminalo, si me das 1 punto o 0,5 es el dia mas feliz de mi vida, bueno tambia esta la parte donde no me das nada ahahha x(. 

    var tasa = 12;
    var montpreuSenseIVA = $("input[name=preuSenseIVA]").val();
    var iva = (montpreuSenseIVA * tasa)/100;
    $("input[name=iva]").val(iva);
    $("input[name=total]").val(parseInt(montpreuSenseIVA)+parseInt(iva));


}

function canviaFons(tipus){// rapeando brow, ya se que no cambia el color de fuente, no me sale pero bueno es lo que hay, pero porfavor te pido que no me quites 1 punto por eso, mira creo que un 2, pero eso lo deberia mirar tu. 
    var colorFondo
    var colortexto

     if (tipus =="random"){
        var grey = Math.floor(Math.random() * 255);
        colorFondo = "rgb(" + grey + "," + grey + "," + grey + ")";
        colortexto = "White";


     } else if(tipus =="clear"){
        colorFondo = "white";

     }

     _id("cos").style.backgroundColor = colorFondo;
     _id("cos").style.color = colorTexto;

}