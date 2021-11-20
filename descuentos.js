let precioOriginal = 100;
let descuento = 15;

function calcularPrecioConDescuento(precio, descuento, codigo){
    let porcentajeConDescuento = 100 - descuento - codigo;
    let PrecioConDescuento = (precio * porcentajeConDescuento)/100;
    return PrecioConDescuento;
}

function onClickButtonPriceDiscount(){
    let inputPrice = document.getElementById("InputPrice");
    let PriceValue = inputPrice.value;
    let inputDiscount = document.getElementById("InputDiscount");
    let DiscountValue = inputDiscount.value;
    let inputCodigo = document.getElementById("InputCodigo");
    let Codigo = inputCodigo.value;
    let resultP = document.getElementById("ResultP");
    let descuentoCodigo = 0;

    if (Codigo == "Cupon10") {
        descuentoCodigo = 10;
    }else if (Codigo == "Cupon20") {
        descuentoCodigo = 20;
    }else{
        alert("Cupon invalido");
    };

    let precioConDescuento = calcularPrecioConDescuento(PriceValue, DiscountValue, descuentoCodigo);
    resultP.innerText = "EL precio con descuento es de: $"+precioConDescuento;
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeConDescuento,
//     PrecioConDescuento,
// });