import type VectorField from "../data/VectorField";
import * as THREE from "../../utils/three.js";
export default class GlobeSurfaceRender{
    static INTERPOLATION_POINTS: number = 50;
    static vectorField: VectorField;
    static radius: number;
    static color: THREE.Color;
    static initialize(radius, color){
        this.radius = radius;
    }
    static renderCurves(){
        for(let vector of this.vectorField.vectors){
            //create a THREE point
            let startPoint = new THREE.Vector3();
            startPoint.x = this.radius * Math.sin(vector.theta) * Math.cos(vector.phi);
            startPoint.y = this.radius * Math.sin(vector.theta) * Math.sin(vector.phi);
            startPoint.z = this.radius * Math.cos(vector.theta);
            let curveArcLength =  this.radius = vector.magnitude;
            let endPoint = new THREE.Vector3();
            endPoint.x = startPoint.x + curveArcLength * Math.sin(vector.directionTheta) * Math.cos(vector.directionPhi);
            endPoint.y = startPoint.y + curveArcLength * Math.sin(vector.directionTheta) * Math.sin(vector.directionPhi);
            endPoint.z = startPoint.z + curveArcLength * Math.cos(vector.directionTheta);
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
            let curveMaterial = new THREE.LineBasicMaterial({color: this.color});
            //finish
        }
    }
}