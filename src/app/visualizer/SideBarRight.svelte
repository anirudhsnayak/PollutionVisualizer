<script>
    //this is where the globe page will go
    import GlobeDisplayManager from '../../scripts/app/globe/GlobeDisplayManager';
    let airPollutionActive = false;
    let lightPollutionActive = false;
    $: GlobeDisplayManager.toggleAirPollution(airPollutionActive);
    $: GlobeDisplayManager.toggleLightPollution(lightPollutionActive);
</script>

<div id = "sidebar">
    <div id = "pollutions">
        <input bind:checked={airPollutionActive} type = "checkbox" id = "air-pollution" class = "air-pollution" name = "air-pollution">
        <label for = "air-pollution" class = "air-pollution">Air Pollution</label> <br> <br>
        <input bind:checked={lightPollutionActive} type = "checkbox" id = "light-pollution" class = "light-pollution" name = "light-pollution">
        <label for = "light-pollution" class = "light-pollution">Light Pollution</label>
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

    .light-pollution {
        display: inline-block;
        margin: auto;
        font-family: "Helvetica Light";

    }



</style>