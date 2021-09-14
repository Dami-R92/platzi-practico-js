let lista1 = [];

let moda = () => {

    let lista1Count = {};

    lista1.map(
        (elemento) => {
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    );
    // console.log(lista1Count);
    const lista1Array = Object.entries(lista1Count).sort(
        function comparar(a, b) {
            return a[1] - b[1]
        }
    );

    return lista1Array[lista1Array.length - 1]
}


console.log(moda());