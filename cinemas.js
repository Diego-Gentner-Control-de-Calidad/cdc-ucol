// Función que registre el dinero ganado por una ducleria de cine.
// Debe registrar el nombre de producto, su costo y sumar el monto total.
function registrarVenta(arrayDeProductos) {
    let montoTotal = 0;
    let hayPalomitas = false;
    arrayDeProductos.forEach(element => {
        montoTotal += element.costo;
        if (element.nombre == "Palomitas") {
            hayPalomitas = true;
        }
    });
    return {montoTotal, hayPalomitas};
}

export default registrarVenta;

console.log(registrarVenta([{nombre: "Hokla", costo: 50}, {nombre: "Refresco", costo: 30}, {nombre: "Nachos", costo: 60}]));
