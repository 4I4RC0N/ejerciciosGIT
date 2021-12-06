

    //Declaracion de clase
    class Animal{

    //En este caso tenemos metodos
    ruido = "Algún ruido"
    constructor(n= "pato"){ //asignacion automatica si no defino nada despues.
    this.nombre = n; //Funcion le damos el valor de n
}
    quienSoy(){
    return "Hola, soy " + this.nombre;
}
    meEscucho(){

    return "Yo hago " + this.ruido;
}
}

    class Gato extends Animal{
    meEscucho(){
    return super.quienSoy()+'Miiaauuu.';
}
}

    console.log(new Animal().meEscucho());
    console.log(new Gato("un gato ").meEscucho());