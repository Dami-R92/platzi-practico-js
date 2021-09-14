const lista1 = [
    100,
    400,
    200,
    300,
    500,
    120,
    15000,
];
//Mediana


let listaOrdenada = lista1.sort(
    function comparar(a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        if (a === b) {
            return 0;
        }
    })

const mitadLista1 = parseInt(listaOrdenada.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
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

let mediana;

if (esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadLista1 - 1];
    const elemento2 = listaOrdenada[mitadLista1];

    const promedioElemento1y2 = mediaAritmetica([
        elemento1,
        elemento2,
    ]);

} else {
    mediana = listaOrdenada[mitadLista1]
}

console.log(listaOrdenada);


//Promedio
// let sumaLista1 = 0;

// for (let i = 0; i < lista1.length; ++i) {
//     sumaLista1 = sumaLista1 + lista1[i];
// }

// let promedio = (sumaLista1 / lista1.length);

// let mediaAritmetica = (lista) => {
//     // let sumaLista = 0;
//     // for (let i = 0; i < lista.length; ++i) {
//     //     sumaLista = sumaLista + lista[i];
//     // }
//     const sumaLista = lista.reduce(
//         function (valorAcumulado = 0, nuevoElemento) {
//             return valorAcumulado + nuevoElemento;
//         }
//     );
//     let promedio = sumaLista / lista.length;
//     return promedio
// }

// const localidades = [
//     'panama', 
//     'locura',
//     'descontrol'
// ]

// // const sumaLocalidades = localidades.reduce(
// //     function (valorAcumulado = '', nuevoElemento) {
// //         return valorAcumulado + nuevoElemento;
// //     }
// // );
// const sumaLocalidades = localidades.reduce(valorAcumulado = '', nuevoElemento)=> {return valorAcumulado + nuevoElemento;}

// console.log(sumaLocalidades);