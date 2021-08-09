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

//CODIGO DE TRIANGULO
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
//CIRCULO
const pi = Math.PI;
const InputCirculo = document.getElementById("InputCirculo");

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

let calcularDiametroCirculo = () => {
    const radio = parseInt(InputCirculo.value);
    let diametro = diametroCirculo(radio);
    alert(`El diametro de su circulo es de ${diametro} cm.`)
}

let calcularPerimetroCirculo = () => {
    const radio = parseInt(InputCirculo.value);
    let perimetro = perimetroCirculo(radio);
    alert(`El perimetro de su circulo es de ${perimetro} cm.`)
}

let calcularAreaCirculo = () => {
    const radio = parseInt(InputCirculo.value);
    let area = areaCirculo(radio);
    alert(`El area de su circulo es de ${area} cm2.`)
}

console.groupEnd();

// Triangulo Isoceles: Posee dos lados iguales y uno diferente.

const InputTrianguloIsoA = document.getElementById("InputTrianguloIsoA");
const InputTrianguloIsoB = document.getElementById("InputTrianguloIsoB");


function AlturaTrianguloIso(lados,base) {
    return Math.sqrt((lados*lados)-((base*base)/4)).toFixed(2)
}

let calcularAlturaTrianguloIso = () => {
    const lados = parseInt(InputTrianguloIsoA.value);
    const base = parseInt(InputTrianguloIsoB.value);
    let altura = AlturaTrianguloIso(lados, base);
    alert(`La altura de su circulo es de ${altura} cm.`)
}
