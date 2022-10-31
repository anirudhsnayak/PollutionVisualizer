<script>
    //this is where the globe page will go
    import GlobeDisplayManager from '../../scripts/app/globe/GlobeDisplayManager';
    let airPollutionActive = false;
    let oilPollutionActive = false;
    $: GlobeDisplayManager.toggleAirPollution(airPollutionActive);
    $: GlobeDisplayManager.toggleOilPollution(oilPollutionActive);
</script>

<div id = "sidebar">
    <div id = "pollutions">
        <input bind:checked={airPollutionActive} type = "checkbox" id = "air-pollution" class = "air-pollution" name = "air-pollution">
        <label for = "air-pollution" class = "air-pollution">Air Pollution</label> <br> <br>
        <input bind:checked={oilPollutionActive} type = "checkbox" id = "oil-pollution" class = "oil-pollution" name = "oil-pollution">
        <label for = "oil-pollution" class = "oil-pollution">Oil Pollution</label>
    </div>

</div>

<style type="text/scss">
    #sidebar {
        height: 100%;
        width: 300px;
        background-color: gray;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
    }

    #pollutions {
        background-color: white;
        width: 280px;
        height: 300px;
        position: relative;
        top: 100px;
        font-size: 30px;
        text-align: center;
    }

    .air-pollution {
        display: inline-block;
        margin: auto;
        font-family: "Helvetica Light";

    }

    .oil-pollution {
        display: inline-block;
        margin: auto;
        font-family: "Helvetica Light";

    }



</style>