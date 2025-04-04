export interface Usuario {
    //formato de atributos nombre: "tipo de variable;"
    /*
        tipos de datos:
        number: Representa números enteros y de punto flotante
        bigint: Representa números enteros grandes
        string: Representa cadenas de texto
        boolean: Representa valores lógicos: true o false
    
    */
    id :number; //rut sin digito verificador
    nombre:string;
    casado: boolean;
    edad: number;
    rango: string; //usuario o admin

}
