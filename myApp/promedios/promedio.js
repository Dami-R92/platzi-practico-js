const lista1 = [
    100,
    200,
    300,
    500,
    15000,
];
//Mediana
const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1[mitadLista1 + 1];
    console.log('perrito')

} else {
    mediana = lista1[mitadLista1]
}





//Promedio
// let sumaLista1 = 0;

// for (let i = 0; i < lista1.length; ++i) {
//     sumaLista1 = sumaLista1 + lista1[i];
// }

// let promedio = (sumaLista1 / lista1.length);

let mediaAritmetica = (lista) => {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; ++i) {
    //     sumaLista = sumaLista + lista[i];
    // }
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    let promedio = sumaLista / lista.length;
    return promedio
}

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