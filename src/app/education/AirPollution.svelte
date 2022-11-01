<script>
    import Navbar from "./NavBar.svelte";

    let currentType = "co2";

    export function changeInfo(type) {
        currentType = type;
    }
</script>
<Navbar/>
<div id = "title-image">
    <img id = "background-img" src = "images/air-pollution.jpg" alt = "air pollution">
    <h1 id = "title">Air Pollution</h1>
</div>
<div id = "stuff">
    <h2 class = "intro">Introduction</h2>
    <p class = "intro">
        One of the most prevalent types of pollution on earth today is air pollution. Anywhere you are, there is likely air pollution affecting you. There are many different types of
        air pollution, including carbon oxides, lead, nitrogen oxides, ozone, and various others.
    </p>
    <br>
    <p class = "intro">
        It is important to be educated about air pollution in order to better prevent its negative impact on the environment. Air pollution is chemicals or particles in 
        the air that harm the health of humans, animals, and plants. Air pollutants can be gases, solid particles, or liquid droplets.
    </p>

    <div id = "types">
        <h2>Types</h2>
        <button class = "options" id = "co" on:click = {() => {changeInfo("co2")}}>Carbon Dioxide</button>
        <button class = "options" id = "methane" on:click = {() => {changeInfo("methane")}}>Methane</button>
        <button class = "options" id = "chloro" on:click = {() => {changeInfo("chloro")}}>Chlorofluorocarbons</button>

        {#if currentType == "co2"}
            <p>
                Carbon dioxide pollution is the most well-known air pollution. It is the most directly controlled by humans. When we burn fossil fuels, this deadly greenhouse gas is 
                released. It warms the planet due to the absorption of radiation. The most common sources of carbon dioxide are  cement production, deforestation, and the burning of fossil fuels 
                like coal, oil and natural gas.
            </p>
        {/if}
        {#if currentType == "methane"}
            <p>
                Methane is like carbon dioxide in that it is a greenhouse gas released due to human activity. However, it has 80 times the heating-trapping capacity as carbon dioxide
                in the near term. Methane is released due to the breakdown of organic material, so having many livestock contributes to the release of methane gas. In addition, snow
                traps methane under. Therefore, as temperatures rise and more snow melts, more methane gas is released and the global warming is intensified.
            </p>
        {/if}
        {#if currentType == "chloro"}
            <p>
                Chlorofluorocarbons are chemicals containing chlorine, fluorine, and carbon that are released into the air by various applications like refrigerators and A/C units.
                They are harmful because they result in the depletion of the ozone layer in the atmosphere. The ozone layer is important because it provides protection against UV
                radiation. Without it, the rate of cancer among the population would significantly increase. However, there is a positive in that the depletion of the ozone layer
                has largely stopped.
            </p>
        {/if}

    </div>
</div>


<style>
    #title-image {
        position: relative;
        text-align: center;
    }
    #background-img {
        opacity: 65%;
        z-index: 1;
    }
    #title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        font-family: "Arvo";
        font-size: 150px;
        color: black;
    }
    #stuff {
        width: 100%;
        background-color: #EEEEEE;
        height: 1000px;
        font-family: "Arvo";
    }

    #stuff h2 {
        font-size: 50px;
    }

    .intro {
        position: relative;
        top: 50px;
        width: 1000px;
        font-size: 25px;
        margin: auto;
    }

    #types {
        position: relative;
        margin: auto;
        text-align: center;
        top: 75px;
        background-color: #a6a6a6;
        height: 450px;
        width: 100%;
    }

    button {
        font-size: 16px;
        color: #042009;
        text-align: center;
        padding: 14px 16px;
        margin-top: 0px;
        text-decoration: none;
        border: 0px;
        position: relative;
        top: 5px;
        font-family: "Arvo";
        font-size: 20px;
        cursor: pointer;
    }

    #co {
        background-color: rgba(0, 0, 255, 30%);
    }

    #co:hover {
        background-color: rgba(0, 0, 255, 70%);
    }

    #methane {
        background-color: rgba(255, 0, 0, 30%);
    }

    #methane:hover {
        background-color: rgba(255, 0, 0, 70%);
    }

    #chloro {
        background-color: rgba(0, 255, 0, 30%);
    }

    #chloro:hover {
        background-color: rgba(0, 255, 0, 70%);
    }

    #types h2 {
        font-size: 55px;
        padding-top: 15px;
        padding-bottom: 0px;
    }

    #types p {
        font-size: 25px;
        inline-size: 1000px;
        top: 20px;
        margin: auto;
        text-align: left;
    }

    
</style>