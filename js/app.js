const ingresos = [
    new Ingreso("Salario", 20000),
    new Ingreso("Venta auto", 50000)
];

const egresos = [
    new Egreso("Renta", 4000),
    new Egreso("Ropa", 800)
];

const totalIngresos = () => {
    let totalIngreso = 0;

    for (let ingreso of ingresos) {
        totalIngreso += ingreso.valor;
    }

    return totalIngreso;
};

const totalEgresos = () => {
    let totalEgreso = 0;

    for (let egreso of egresos) {
        totalEgreso += egreso.valor;
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

    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML= formatoPorcentaje(porcentajeEgreso);
    document.getElementById("ingresos").innerHTML= formatoMoneda(ingresosTotal);
    document.getElementById("egresos").innerHTML= formatoMoneda(egresosTotal);
};

const cargarApp = () => {
    cargarCabecero();
};









