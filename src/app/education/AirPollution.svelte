<script>
    import Navbar from "./NavBar.svelte";
</script>
<Navbar/>
<div id = "title-image">
    <img id = "background-img" src = "images/air-pollution.jpg" alt = "air pollution">
    <h1 id = "title">Air Pollution</h1>
</div>
<div id = "stuff">
    <p class = "info">
        One of the most prevalent types of pollution on earth today is air pollution. Anywhere you are, there is likely air pollution affecting you. There are many different types of
        air pollution, including carbon monoxide, lead, nitrogen oxides, ground-level ozone, particle pollution, and sulfur oxides.
    </p>
    <br>
    <p class = "info">
        It is important to be educated about air pollution in order to better prevent its negative impact on the environment.
    </p>
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
    }
    .info {
        width: 1000px;
        font-size: 20px;
        margin: auto;
        font-family: "Helvetica";
    }
</style>