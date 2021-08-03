//CODIGO DEL CUADRADO.
console.group('Cuadrado')
const input = document.getElementById("InputCuadrado");

let perimetroCuadrado = (lado) => {
    return lado * 4;
}

let areaCuadrado = (lado) => {
    return lado * lado
}

let calcularPerimetroCuadrado = () => {
    const value = input.value;
    let perimetro = perimetroCuadrado(value);
    alert(`El perimetro de su cuadrado es de ${perimetro} cm.`)
}

let calcularAreaCuadrado = () => {
    const value = input.value;
    let area = areaCuadrado(value);
    alert(`El Area de su cuadrado es de ${area} cm2.`)
}
console.groupEnd();

console.group('Triangulo')

//CONDIGO DE TRIANGULO
const inputA = document.getElementById("InputTrianguloA");
const inputB = document.getElementById("InputTrianguloB");
const inputC = document.getElementById("InputTrianguloC");
const inputH = document.getElementById("InputTrianguloH");

let perimetroTriangulo = (ladoA, ladoB, base) => {
    return ladoA + ladoB + base;
}
let areaTriangulo = (base, altura) => {
    return (base * altura) / 2;
}
let calcularPerimetroTriangulo = () => {
    const valueA = parseInt(inputA.value);
    const valueB = parseInt(inputB.value);
    const valueC = parseInt(inputC.value);

    let perimetro = perimetroTriangulo(valueA, valueB, valueC);
    alert(`El perimetro de su triangulo es de ${perimetro} cm.`)
}
let calcularAreaTriangulo = () => {
    const valueC = parseInt(inputC.value);
    const altura = parseInt(inputH.value);

    let area = areaTriangulo(valueC, altura);
    alert(`El area de su triangulo es de ${area} cm2.`)
}
console.groupEnd();

console.group('Circulo');

const pi = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

function areaCirculo(radio) {
    return (radio * radio) * pi;
}
// console.log(`Radio del circulo: ${radioCirculo} cm`);

// console.log(`El diametro del circulo: ${diametroCirculo} cm`);

// console.log(`El perimetro del Circulo es : ${perimetroCirculo}cm`);

// console.log(`El area del circulo es: ${areaCirculo} cm2`);

console.groupEnd();



// Triangulo Isoceles: Posee dos lados iguales y uno diferente. 