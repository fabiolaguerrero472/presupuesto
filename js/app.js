let egresos = [900, 400];
let ingresos = [9000, 400];


const totalIngresos = () => {
    let totalIngreso = 0;

    for (let ingreso of ingresos) {
        totalIngreso += ingreso;
    }

    return totalIngreso;
};

const totalEgresos = () => {
    let totalEgreso = 0;

    for (let egreso of egresos) {
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
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
};


const cargarCabecero = () => {

    const ingresosTotal = totalIngresos();
    const egresosTotal = totalEgresos();

    const presupuesto = ingresosTotal - egresosTotal;

    const porcentajeEgreso = egresosTotal / ingresosTotal;

    console.log("Presupuesto:", formatoMoneda(presupuesto));
    console.log("Porcentaje de egreso:", formatoPorcentaje(porcentajeEgreso));
    console.log("Total ingresos:", formatoMoneda(ingresosTotal));
    console.log("Total egresos:", formatoMoneda(egresosTotal));
};

cargarCabecero();









