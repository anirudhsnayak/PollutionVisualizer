<script>
    import Router from "../../scripts/app/router/Router";
</script>

<button on:click={Router.navigate("globe")}>3D Visualizer</button>

<style type="text/scss">
    button {
        background-color: #EEEEEE;
        color: #76A900;
        font-family: "Arvo";
        font-size: 110px;
        border-radius: 50px;
        opacity: 75%;
        padding: 50px;
        border: none;
    }
    button:hover {
        opacity: 100%;
        cursor: pointer;
    }
</style>