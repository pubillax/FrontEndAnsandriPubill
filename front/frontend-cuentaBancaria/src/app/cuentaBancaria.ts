export class cuentaBancaria {
    id: number;
    nombre: string;
    saldo: number;
    activo: boolean;

    constructor(id: number, nombre: string, saldo: number, activo: boolean){
        this.id = id;
        this.nombre = nombre;
        this.saldo = saldo;
        this.activo = activo;
    }
}