export class Producto {
    id_producto:number;
    nombre:String;
    precio:number;
    cantidad:number;
    estado:String;

    constructor(id_producto:number,nombre:String,cantidad:number,estado:String){
        this.id_producto=0;
        this.nombre='';
        this.precio=0;
        this.cantidad=0;
        this.estado='';
    }
}
