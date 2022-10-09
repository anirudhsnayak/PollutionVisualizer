export default class VectorField{
    vectors = [];
    addVector(theta: number, phi: number, directionTheta: number, directionPhi: number){
        this.vectors.push({theta: theta, phi: phi, directionTheta: directionTheta, directionPhi: directionPhi});
    }
}