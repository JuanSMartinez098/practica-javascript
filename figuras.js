// Codigo del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lasdos del cuadrado miden: "+ladoCuadrado+"cm");

function PerimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4;
}
// console.log("El perimetro del cuadrado es: "+perimetroCuadrado+"cm");

function AreaCuadrado(ladoCuadrado){
    return ladoCuadrado*ladoCuadrado;
} 
// console.log("El perimetro del cuadrado es: "+areaCuadrado+"cm^2");
console.groupEnd();

// Codigo del triangulo
console.group("Triangulo");
// const ladounoTriangulo = 6;
// const ladodosTriangulo = 6;
// const baseTriangulo = 4;
// console.log("El lado uno del triangulo mide: "+ladounoTriangulo+"cm");
// console.log("El lado dos del triangulo mide: "+ladodosTriangulo+"cm");
// console.log("El lado tres del triangulo mide: "+baseTriangulo+"cm");

function PerimetroTriangulo(ladodosTriangulo,ladounoTriangulo,baseTriangulo) {
    return ladodosTriangulo+ladounoTriangulo+baseTriangulo;
}  
// console.log("El perimetro del triangulo es: "+perimetroTriangulo+"cm");


// console.log("alto: "+alto+"cm");
function AreaTriangulo(ladounoTriangulo,baseTriangulo){

    const alto = Math.sqrt((Math.pow(ladounoTriangulo, 2) - Math.pow((baseTriangulo/2),2)));
    return ((baseTriangulo * alto)/2).toFixed(3);
}

    
// console.log("El perimetro del trianfgulo es: "+areaTriangulo+"cm^2");
console.groupEnd();

// Codigo del Circulo
console.group("Circulo");

// const radio = 4;
// const diametro = radio * 2;

function PerimetroCirculo(radio){
    const diametro = radio * 2;
    return (diametro * Math.PI).toFixed(3);
} 
function AreaCirculo(radio){
    return ((radio**2)*Math.PI).toFixed(3);
} 

// console.log("El perimetro del circulo es: "+perimetroCirculo+"cm");
// console.log("El area del circulo es: "+areaCirculo+"cm^2");

console.groupEnd();

function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = PerimetroCuadrado(value);
    alert(perimetro);
}
function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = AreaCuadrado(value);
    alert(area);
}
function CalcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = PerimetroCirculo(value);
    alert(perimetro);
}
function CalcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = AreaCirculo(value);
    alert(area);
}
function CalcularPerimetroTriangulo(){
    const input1 = document.getElementById("Lado1");
    const input2 = document.getElementById("Lado2");
    const input3 = document.getElementById("Base");
    const Lado1 = input1.value;
    const Lado2 = input2.value;
    const Base = input3.value;
    const perimetro = PerimetroTriangulo(Lado1*1, Lado2*1, Base*1);
    alert(perimetro);
}
function CalcularAreaTriangulo(){
    const input1 = document.getElementById("Lado1");
    const input2 = document.getElementById("Lado2");
    const input3 = document.getElementById("Base");
    const Lado1 = input1.value;
    const Lado2 = input2.value;
    const Base = input3.value;
    if (Lado1 != Lado2) {
        alert("Lado1 y Lado 2  deben ser iguales en este caso");
    }else if((Base/2) >= Lado1){
        alert("Los lados deben de ser al menos la mitad mas 0.1 de la base");
    }else{
        const area = AreaTriangulo(Lado1, Base);
        alert(area);
    }
    
}

