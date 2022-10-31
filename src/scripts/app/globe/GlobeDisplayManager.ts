import GlobeDataManager from "./GlobeDataManager";
import GlobeHeatmapRenderer from "./surface/GlobeHeatmapRenderer";

export default class GlobeDisplayManager{
    static toggleAirPollution(airPollutionActive: boolean){
        console.log(GlobeDataManager.airPollutionHeatmapPoints);
        if(airPollutionActive){
            GlobeHeatmapRenderer.addHeatmapPoints(GlobeDataManager.airPollutionHeatmapPoints);
        }else{
            //GlobeHeatmapRenderer.clearHeatmap();
        }
    }
    static toggleOilPollution(oilPollutionActive: boolean){
    
    }
}