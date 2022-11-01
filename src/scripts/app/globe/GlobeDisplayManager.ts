import GlobeDataManager from "./GlobeDataManager";
import GlobeHeatmapRenderer from "./surface/GlobeHeatmapRenderer";

export default class GlobeDisplayManager{
    static togglePollution(airPollutionActive: boolean, oilPollutionActive){
        let renderedPoints = [];
        GlobeHeatmapRenderer.clearHeatmap();
        //todo: bad time complexity, fix
        if(airPollutionActive){ 
            renderedPoints = renderedPoints.concat(GlobeDataManager.airPollutionHeatmapPoints);
        }
        if(oilPollutionActive){
            renderedPoints = renderedPoints.concat(GlobeDataManager.oilPollutionHeatmapPoints);
        }
        if(airPollutionActive || oilPollutionActive){
            GlobeHeatmapRenderer.addHeatmapPoints(renderedPoints, "red");
        }
    }
}