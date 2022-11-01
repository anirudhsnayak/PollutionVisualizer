import SurfaceData from "./surface/SurfaceData";
export default class GlobeDataManager{
    static airPollutionHeatmapPoints = [];
    static oilPollutionHeatmapPoints = [];
    static init(){
        this.loadAirPollution();
        this.loadOilPollution();
    }
    static async loadAirPollution(){
        //load air pollution 
        //http://localhost:4000/air?topLat=-90&leftLng=-180&bottomLat=0&rightLng=180
        let northernHemisphereData = [];
        let southernHemisphereData = [];
        //run 50 fetches in parallel of the northern hemisphere based on longitude
        for(let i = -180; i < 180; i+=180/200){
            let fetchPromise = fetch("http://localhost:4000/air?topLat=-90&leftLng=" + i + "&bottomLat=0&rightLng=" + (i+180/200) + "&limit=10000")
            northernHemisphereData.push(fetchPromise);
        }
        //run 50 fetches in parallel of the southern hemisphere based on longitude
        for(let i = -180; i < 180; i+=180/200){
            let fetchPromise = fetch("http://localhost:4000/air?topLat=0&leftLng=" + i + "&bottomLat=90&rightLng=" + (i+180/200) + "&limit=10000")
             southernHemisphereData.push(fetchPromise);
        }
        //wait for all fetches to complete
        let northernHemisphereDataResolved = await Promise.all(northernHemisphereData);
        let southernHemisphereDataResolved = await Promise.all(southernHemisphereData);
        let hemisphereData = []; //add all data to one array
        for(let i = 0; i < northernHemisphereDataResolved.length; i++){
            hemisphereData.push(northernHemisphereDataResolved[i]);
        }
        for(let i = 0; i < southernHemisphereDataResolved.length; i++){
            hemisphereData.push(southernHemisphereDataResolved[i]);
        }
        //convert all fetch promises to json
        let hemisphereDataJson = [];
        for(let i = 0; i < hemisphereData.length; i++){
            hemisphereDataJson.push(hemisphereData[i].json());
        }
        //wait for all fetches to complete
        let hemisphereDataJsonResolved = await Promise.all(hemisphereDataJson);
        //add all data to one array
        let hemisphereDataJsonResolvedFlat = [];
        for(let i = 0; i < hemisphereDataJsonResolved.length; i++){
            hemisphereDataJsonResolvedFlat = hemisphereDataJsonResolvedFlat.concat(hemisphereDataJsonResolved[i]);
        }
        console.log("Air Pollution Data Points: " + hemisphereDataJsonResolvedFlat.length);
        GlobeDataManager.parseAirPollutionData(hemisphereDataJsonResolvedFlat);
    }
    static loadAirPollutionOld(){
        //load air pollution 
        //http://localhost:4000/air?topLat=-90&leftLng=-180&bottomLat=0&rightLng=180
        let northernHemisphereData = [];
        let southernHemisphereData = [];
        fetch("http://localhost:4000/air?topLat=-90&leftLng=-180&bottomLat=0&rightLng=180&limit=10000")
            .then(response => response.json())
            .then(data => {
                northernHemisphereData = data;
                fetch("http://localhost:4000/air?topLat=0&leftLng=-180&bottomLat=90&rightLng=180&limit=10000")
                    .then(response => response.json())
                    .then(data => {
                        southernHemisphereData = data;
                        console.log("Air Pollution Data Points: " + (southernHemisphereData.length + northernHemisphereData.length));
                        GlobeDataManager.parseAirPollutionData(northernHemisphereData.concat(southernHemisphereData));
                    });
            });
    }
    static loadOilPollution(){
        //load oil pollution data from http://localhost:4000/oil
        fetch("http://localhost:4000/oil")
            .then(response => response.json())
            .then(data => {
                console.log("Oil Pollution Data Points: " + data.length);
                GlobeDataManager.parseOilPollutionData(data);
            }
        );
    }
    static parseAirPollutionData(airPollutionData: any){
        //create a matrix of points for each air particle, canvas texture width by height
        let pointMatrix = [];
        for(let i = 0; i <= SurfaceData.CANVAS_TEXTURE_WIDTH; i++){
            pointMatrix[i] = [];
            for(let j = 0; j <= SurfaceData.CANVAS_TEXTURE_HEIGHT; j++){
                pointMatrix[i][j] = 0;
            }
        }
        //add points to matrix
        for(let i = 0; i < airPollutionData.length; i++){
            let airPollutionPoint = airPollutionData[i];
            //convert lat/long to x/y
            let X = airPollutionPoint.loc.long/360*SurfaceData.CANVAS_TEXTURE_WIDTH;
            X+=SurfaceData.CANVAS_TEXTURE_WIDTH/2;
            let Y = -airPollutionPoint.loc.lat/180*SurfaceData.CANVAS_TEXTURE_HEIGHT;  
            Y+=SurfaceData.CANVAS_TEXTURE_HEIGHT/2;
            //add point to matrix
            //clamp x and y to be within the bounds of the matrix
            X = Math.min(Math.max(X, 0), SurfaceData.CANVAS_TEXTURE_WIDTH);
            Y = Math.min(Math.max(Y, 0), SurfaceData.CANVAS_TEXTURE_HEIGHT);
            pointMatrix[Math.round(X)][Math.round(Y)]++;
        }
        this.airPollutionHeatmapPoints = [];
        //convert matrix to array of points
        for(let i = 0; i < SurfaceData.CANVAS_TEXTURE_WIDTH; i++){
            for(let j = 0; j < SurfaceData.CANVAS_TEXTURE_HEIGHT; j++){
                if(pointMatrix[i][j] > 0){
                    this.airPollutionHeatmapPoints.push({x: i, y: j});
                }
            }
        }
    }
    static parseOilPollutionData(oilPollutionData: any){
        //create a matrix of points for each oil spill, canvas texture width by height
        let pointMatrix = [];
        for(let i = 0; i <= SurfaceData.CANVAS_TEXTURE_WIDTH; i++){
            pointMatrix[i] = [];
            for(let j = 0; j <= SurfaceData.CANVAS_TEXTURE_HEIGHT; j++){
                pointMatrix[i][j] = 0;
            }
        }
        //add points to matrix
        for(let i = 0; i < oilPollutionData.length; i++){
            if(oilPollutionData[i].threat != "Oil"){
                continue;
            }
            let oilPollutionPoint = oilPollutionData[i];
            //convert lat/long to x/y
            
            let x = oilPollutionPoint.lon/360*SurfaceData.CANVAS_TEXTURE_WIDTH;
            x+=SurfaceData.CANVAS_TEXTURE_WIDTH/2;
            let y = -oilPollutionPoint.lat/180*SurfaceData.CANVAS_TEXTURE_HEIGHT;
            y+=SurfaceData.CANVAS_TEXTURE_HEIGHT/2;  
            //add point to matrix
            //clamp x and y to be within the bounds of the matrix
            x = Math.min(Math.max(x, 0), SurfaceData.CANVAS_TEXTURE_WIDTH);
            y = Math.min(Math.max(y, 0), SurfaceData.CANVAS_TEXTURE_HEIGHT);
            pointMatrix[Math.round(x)][Math.round(y)]++;
        }
        this.oilPollutionHeatmapPoints = [];
        //convert matrix to array of points
        for(let i = 0; i < SurfaceData.CANVAS_TEXTURE_WIDTH; i++){
            for(let j = 0; j < SurfaceData.CANVAS_TEXTURE_HEIGHT; j++){
                if(pointMatrix[i][j] > 0){
                    this.oilPollutionHeatmapPoints.push({x: i, y: j});
                }
            }
        }
    }
}