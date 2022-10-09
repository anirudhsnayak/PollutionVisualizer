import { compute_slots } from "svelte/internal";
import * as THREE from "./three.js";
export default class MathUtils{
    static getPointOnSphere(theta: number, phi: number, radius: number){
        let point = new THREE.Vector3();
        point.x = radius * Math.cos(-theta)*Math.cos(phi);
        point.y = radius * Math.sin(phi);
        point.z = radius * Math.sin(-theta)*Math.cos(phi);
        return point;
    }
}