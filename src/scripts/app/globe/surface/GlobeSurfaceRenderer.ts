import type * as THREE from "../../../utils/three.js";
import MathUtils from "../../../utils/MathUtils";
import type DirectionVector from "../../data/DirectionVector";
import GlobeHeatmapRenderer from "./GlobeHeatmapRenderer";
import GlobeVectorRenderer from "./GlobeVectorRenderer";
import SurfaceData from "./SurfaceData.js";
export default class GlobeSurfaceRenderer{
    static init(globeRadius: number, scene: THREE.Scene){
        SurfaceData.init(globeRadius, scene);
        GlobeVectorRenderer.init();
        GlobeHeatmapRenderer.init();
    }
    static linkHeatmapCanvas(canvas: HTMLCanvasElement){
        GlobeHeatmapRenderer.linkHeatmapCanvas(canvas);
    }
}