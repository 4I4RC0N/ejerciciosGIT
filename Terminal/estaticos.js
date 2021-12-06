class Punto{
    constructor( x, y ) {
        this.x = x;
        this.y = y;
    }
}
class Ayudantes{
    static distancia (a,b){
        const dx = b.x - a.x;
        const dy = b.y - a.y;

        return Math.sqrt(dx * dx + dy * dy);
    }

}

class nuevoPunto extends Ayudantes{

}

const p1 = new Punto(5, 5);
const p2 = new Punto(10, 10);
const p3 = new Punto(23,57);
console.log(Ayudantes.distancia(p1,p2));
console.log(nuevoPunto.distancia(p3,p2));


