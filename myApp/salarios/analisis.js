//Primero creamos un array en donde solo se colocan los salarios.
const salariosArg = argentina.map(
    (persona) => {
        return persona.salary;
    }
);

const salariosArgSorted = salariosArg.sort(
    (salarioA, salarioB) => {
        return salarioA - salarioB
    }
);

//Helpers
function esPar(numero) {
    return (numero % 2 === 0)
    //Puede obviarse el If else true false ya que son valores intrinsecos al resultyado del return el ya devuelev true y flse. 
};
let mediaAritmetica = (lista) => {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    let promedio = sumaLista / lista.length;
    return promedio
};

//Mediana General.
let medianaSalarios = (lista) => {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = mediaAritmetica([
            personaMitad1,
            personaMitad2,
        ]);
        return mediana

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
};

//Ejecucion. 
console.log(medianaSalarios(salariosArg));

const medianaGralSalariosARg = medianaSalarios(salariosArg);


//Ejemplo.
// const arrayEj = [0,1,2,3,4,5,6,7,8,9,10,11]
// const ej = arrayEj.splice(5,2); // el primer numero marca desde donde cortar y el segundo cuanto cortar luego del inicio.
// console.log(ej);

//Mediana en Top10%.

const SpliceStart = (salariosArgSorted.length * 0.90);
const spliceCount = (salariosArgSorted.length - SpliceStart);


const salariosArgTop10 = salariosArgSorted.splice(SpliceStart, SpliceStart);

const medianaTop10Arg = medianaSalarios(salariosArgTop10);

console.log(medianaTop10Arg);


const canastaBasica = 325;

let nPobres = (datos) => {
    let pobres = 0
    datos.map((i) => {
        if (i.salary < canastaBasica) {
            pobres++;
            console.log(`${i.name} tiene potencial`)
        }
    })
    if (pobres === 0) {
        console.log('Terrible pais no hay pobreza');
    } else {
        console.log(`Hay ${pobres} pobre/s`);
    }

};

nPobres(argentina);

//CODIGO DEL FORMULARIO.
console.group('Formulario')
const inputName = document.getElementById("inputName");
const inputSalary = document.getElementById("inputSalary");

//Esta funcion envia los datos ingresados en el formulario al Array.
let enviarDatos = () => {
    console.log(inputSalary.value);
    argentina.push({
        name: inputName.value,
        salary:inputSalary.value
    });
};

// let calcularPerimetroCuadrado = () => {
//     const value = input.value;
//     let perimetro = perimetroCuadrado(value);
//     alert(`El perimetro de su cuadrado es de ${perimetro} cm.`)
// }

// let calcularAreaCuadrado = () => {
//     const value = input.value;
//     let area = areaCuadrado(value);
//     alert(`El Area de su cuadrado es de ${area} cm2.`)
// }
console.groupEnd();
