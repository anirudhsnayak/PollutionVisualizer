import VectorField from "../data/VectorField";
import * as THREE from "../../utils/three.js";
import MathUtils from "../../utils/MathUtils";
export default class GlobeSurfaceRenderer{
    static get INTERPOLATION_POINTS(){return 50;}
    static get VECTOR_FIELD_COLOR(){return 0xff0000;}
    static vectorField: VectorField;
    static radius: number;
    static init(radius){
        this.radius = radius;
        this.vectorField = new VectorField();
    }
    static renderCurves(){
        let renderedCurves = [];
        for(let vector of this.vectorField.vectors){
            //create a THREE point
            let startPoint = MathUtils.getPointOnSphere(vector.theta, vector.phi, this.radius);
            let endPoint = MathUtils.getPointOnSphere(vector.theta+vector.directionTheta, vector.phi+vector.directionPhi, this.radius);
            let curve = new THREE.Curve();
            curve.getPoint = function(t){
                let point = new THREE.Vector3();
                point.x = startPoint.x + t * (endPoint.x - startPoint.x);
                point.y = startPoint.y + t * (endPoint.y - startPoint.y);
                point.z = startPoint.z + t * (endPoint.z - startPoint.z);
                return point;
            }
            let curveGeometry = new THREE.Geometry();
            curveGeometry.vertices = curve.getPoints(this.INTERPOLATION_POINTS);
            let curveMaterial = new THREE.LineBasicMaterial({color: this.VECTOR_FIELD_COLOR});
            let curveObject = new THREE.Line(curveGeometry, curveMaterial);
            renderedCurves.push(curveObject);
        }
        return renderedCurves;
    }
}