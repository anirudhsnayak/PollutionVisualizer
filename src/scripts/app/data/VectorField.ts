export default class VectorField{
    vectors = [];
    addVector(theta: number, phi: number, magnitude: number, directionTheta: number, directionPhi: number){
        this.vectors.push({theta: theta, phi: phi, magnitude: magnitude, directionTheta: directionTheta, directionPhi: directionPhi});
    }
}