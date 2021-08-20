// let precioOriginal = 100; 

// let descuento = 15;
// const corcentajePrecioDescuento = 100 - descu;

function calcularPrecioConDescuento(precio, descuento, cupon) {
    const porcentajePrecioConDescuento = (100 - descuento - cupon);
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento
}

let priceDiscount = () => {
    const inputPrice = document.getElementById('inputPrice');
    const priceValue = inputPrice.value


    const inputDiscount = document.getElementById('inputDiscount');
    const discountValue = inputDiscount.value;

    const inputCupon = document.getElementById('inputCupon');
    const cuponValue = inputCupon.value

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue, cuponValue);

    const resultP = document.getElementById("resultP");
    resultP.innerText = `El precio con descuento es $ ${precioConDescuento}`

}