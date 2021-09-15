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

let medianaSalarios = (lista) => {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const promedioPersonaMitad1y2 = mediaAritmetica([
            personaMitad1,
            personaMitad2,
        ]);
        return promedioPersonaMitad1y2

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

console.log(medianaSalarios(salariosArg));
// let papa = [];
// papa.push("Criolla");
// papa.push("Sabanera");
// let decada;

// let impresiónCompuesta = (arreglo) => {
//     decada = arreglo.forEach((u) => console.log(u))
// }
// impresiónCompuesta(papa);