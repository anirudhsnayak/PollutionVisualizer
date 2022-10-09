export default class VectorField{
    vectors = [];
    addVector(x: number, y: number, magnitude: number, direction: number){
        this.vectors.push({x: x, y: y, magnitude: magnitude, direction: direction});
    }
}