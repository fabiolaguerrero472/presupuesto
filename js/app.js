//Autor: Fabiola Medina Guerrero

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
        currency: "MXN",
        currencyDisplay: "symbol"
    }) + " MXN";
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

    const porcentajeEgreso = ingresosTotal > 0 ? egresosTotal / ingresosTotal : 0;

    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML= formatoPorcentaje(porcentajeEgreso);
    document.getElementById("ingresos").innerHTML= formatoMoneda(ingresosTotal);
    document.getElementById("egresos").innerHTML= formatoMoneda(egresosTotal);
};

const cargarIngresos = () => {
    let ingresosHTML = '';

    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }

    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
};

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">
                ${ingreso.descripcion}
            </div>

            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">
                    ${formatoMoneda(ingreso.valor)}
                </div>

                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn"
                            onclick="eliminarIngreso(${ingreso.id})">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;

    return ingresoHTML;
};

const cargarEgresos = () => {
    let egresosHTML = '';
    const ingresosTotal = totalIngresos();
    for (let egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso, ingresosTotal);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
};

const crearEgresoHTML = (egreso, ingresosTotal) => {
    const porcentaje = ingresosTotal > 0 ? egreso.valor / ingresosTotal : 0;

    let egresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">
                ${egreso.descripcion}
            </div>

            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">
                    ${formatoMoneda(egreso.valor)}
                </div>

                <div class="elemento_porcentaje">
                    ${formatoPorcentaje(porcentaje)}
                </div>

                <div class="elemento_eliminar">
                    <button
                        class="elemento_eliminar--btn"
                        onclick="eliminarEgreso(${egreso.id})">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;

    return egresoHTML;
};

const eliminarEgreso = (id) => {
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);

    egresos.splice(indiceEliminar, 1);

    cargarCabecero();
    cargarEgresos();
};

const eliminarIngreso = (id) => {
    let indiceEliminar = ingresos.findIndex(
        ingreso => ingreso.id === id
    );

    ingresos.splice(indiceEliminar, 1);

    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
};

const agregarDato = () => {
    const forma = document.forms['forma'];

    const tipo = forma['tipo'].value;
    const descripcion = forma['descripcion'].value;
    const valor = forma['valor'].value;

    if (descripcion !== '' && valor !== '') {

        if (tipo === 'ingreso') {

            ingresos.push(
                new Ingreso(descripcion, Number(valor))
            );

            cargarCabecero();
            cargarIngresos();
            cargarEgresos();
        } else {

            egresos.push(
                new Egreso(descripcion, Number(valor))
            );

            cargarCabecero();
            cargarEgresos();
        }
        forma['descripcion'].value = '';
        forma['valor'].value = '';
    }
};

const cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
};