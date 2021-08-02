//CODIGO DEL CUADRADO.

console.group('Cuadrado')

const ladoCuadrado = 5;

console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

const perimetroCuadrado = ladoCuadrado * 4;

console.log(`El perimetro de un cuadrado es igual a: ${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log(`El Area de un cuadrado es igual a: ${areaCuadrado} cm2`);

console.groupEnd();

//CODIGO DEL TRIANGULO

console.group('Triangulo')

const ladoTrianguloA = 6;
const ladoTrianguloB = 6;
const BaseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTrianguloA + ladoTrianguloB + BaseTriangulo;
const areaTriangulo = (BaseTriangulo * alturaTriangulo) / 2;

console.log(`Los lados del triangulo miden: Lado A ${ladoTrianguloA} cm, Lado B ${ladoTrianguloB} cm, Base ${BaseTriangulo} cm`);

console.log(`La altura de un triangulo es igual a: ${alturaTriangulo} cm`);

console.log(`El perimetro de un triangulo es : ${perimetroTriangulo} cm`);

console.log(`El area de un triangulo es : ${areaTriangulo} cm2`);

console.groupEnd();

console.group('Circulo');

const pi = Math.PI;
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const perimetroCirculo = diametroCirculo*pi
const areaCirculo = (pi*radioCirculo*radioCirculo)/2;

console.log(`Radio del circulo: ${radioCirculo} cm`);

console.log(`El diametro del circulo: ${diametroCirculo} cm`);

console.log(`El perimetro del Circulo es : ${perimetroCirculo}cm`);

console.log(`El area del circulo es: ${areaCirculo} cm2`);









console.groupEnd();