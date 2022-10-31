import SurfaceData from "./surface/SurfaceData";
export default class GlobeDataManager{
    static airPollutionHeatmapPoints = [];
    static oilPollutionHeatmapPoints = [];
    static init(){
        this.loadAirPollution();
        this.loadOilPollution();
    }
    static loadAirPollution(){
        //load air pollution 
        //http://localhost:4000/air?topLat=-90&leftLng=-180&bottomLat=0&rightLng=180
        let northernHemisphereData = [];
        let southernHemisphereData = [];
        fetch("http://localhost:4000/air?topLat=-90&leftLng=-180&bottomLat=0&rightLng=180")
            .then(response => response.json())
            .then(data => {
                northernHemisphereData = data;
                fetch("http://localhost:4000/air?topLat=0&leftLng=-180&bottomLat=90&rightLng=180")
                    .then(response => response.json())
                    .then(data => {
                        southernHemisphereData = data;
                        GlobeDataManager.parseAirPollutionData(northernHemisphereData.concat(southernHemisphereData));
                    });
            });
    }
    static loadOilPollution(){
        //load oil pollution data from http://localhost:4000/oil
        fetch("http://localhost:4000/oil")
            .then(response => response.json())
            .then(data => {
                GlobeDataManager.parseOilPollutionData(data);
            }
        );
    }
    static parseAirPollutionData(airPollutionData: any){
        for(let i = 0; i < airPollutionData.length; i++){
            let airPollutionPoint = airPollutionData[i];
            //convert lat/long to x/y
            let X = airPollutionPoint.loc.long/360*SurfaceData.CANVAS_TEXTURE_WIDTH;
            X+=SurfaceData.CANVAS_TEXTURE_WIDTH/2;
            let Y = airPollutionPoint.loc.lat/180*SurfaceData.CANVAS_TEXTURE_HEIGHT;  
            Y+=SurfaceData.CANVAS_TEXTURE_HEIGHT/2;
            this.airPollutionHeatmapPoints.push({x: X, y: Y});
        }
    }
    static parseOilPollutionData(oilPollutionData: any){
        for(let i = 0; i < oilPollutionData.length; i++){
            if(oilPollutionData[i].threat != "oil"){
                continue;
            }
            let oilPollutionPoint = oilPollutionData[i];
            //convert lat/long to x/y
            let x = oilPollutionPoint.lon/360*SurfaceData.CANVAS_TEXTURE_WIDTH;
            x+=SurfaceData.CANVAS_TEXTURE_WIDTH/2;
            let y = oilPollutionPoint.lat/180*SurfaceData.CANVAS_TEXTURE_HEIGHT;
            y+=SurfaceData.CANVAS_TEXTURE_HEIGHT/2;  
            this.oilPollutionHeatmapPoints.push({x: x, y: y});
        }
    }
}