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
    return(numero % 2 === 0)
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

//Mediana en Top10%.
//Ejemplo.
const arrayEj = [0,1,2,3,4,5,6,7,8,9,10,11]
const ej = arrayEj.splice(5);
console.log(ej);


const SpliceStart = 0;
const spliceCount = 0;



const salariosArgTop10 = salariosArgSorted.splice();
