import registrarVenta from "./cinemas";

let data = [{nombre: "Hola", costo: 100}, {nombre: "Refresco", costo: 10}, {nombre: "Nachos", costo: 60}]
const {montoTotal, hayPalomitas} = registrarVenta(data)

test("Venta mayor a 100", () => {
    expect(montoTotal).toBeGreaterThan(100);
});

test("Hay Palomitas", () => {
    expect(hayPalomitas).toBeTruthy();
});
