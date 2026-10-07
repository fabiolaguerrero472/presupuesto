//Autor: Fabiola Medina Guerrero
class  Dato {constructor(descripción, valor)
    {
        this._descripcion = descripción;
        this._valor= valor ;
    }
    get descripcion() {
        return this._descripcion;
    }

    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }

    get valor() {
        return this._valor;
    }

    set valor(valor) {
        this._valor = valor;
    }
}

const dato = new Dato("Sueldo", 15000);

console.log(dato.descripcion); 
console.log(dato.valor);       

dato.descripcion = "Salario"; 
dato.valor = 20000;            

console.log(dato.descripcion); 
console.log(dato.valor);       