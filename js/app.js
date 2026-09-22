let egresos = {Renta: 900,Ropa: 400};
let ingresos = {Quincena: 9000,Venta: 400};

const totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of Object.values(ingresos)) {
        totalIngreso += ingreso;
    }
    return totalIngreso;
};

const totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of Object.values(egresos)) {
        totalEgreso += egreso;
    }
    return totalEgreso;
};

const formatoMoneda = (valor) => {
    return valor.toLocaleString("es-MX", {
        style: "currency",
        currency: "MXN"
    });
};

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString("es-MX", {
        style: "percent",
        minimumFractionDigits: 2
    });
};

console.log(formatoMoneda(9400));  
console.log(formatoMoneda(1300)); 

const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = (totalEgresos() / totalIngresos());
    console.log("Presupuesto:", formatoMoneda(presupuesto));
    console.log("Porcentaje de egreso:", formatoPorcentaje(porcentajeEgreso));
    console.log("Total ingresos:", formatoMoneda(totalIngresos()));
    console.log("Total egresos:", formatoMoneda(totalEgresos()));
};

// Ejecutar función
cargarCabecero();


