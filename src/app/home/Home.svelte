<script>
    import Button from "./Button.svelte";
</script>


<div id = "bg">
    <div id = "nav-bar">
        <h2 id = "nav-bar-text">Learn More</h2>
    </div>
    <div id = "main">
        <img src = "images/mountains-1412683.png" alt = "bg image" id = "bg-image">
        <h1 id = "title">Title</h1>
        <h1 id = "desc">Visualizing <br> pollution around <br> the world.</h1>
        <div id = "button"><Button/></div>
    </div>
</div>

<style type="text/scss">
    .body {
        display: flex;
        flex-direction: column;
        background-color: white;
        min-height: 100%;
        width: 100%;
        top: 0; left: 0;
        margin: 0px;
        border: 0px;
        padding: 0px;
    }
    #bg {
        background-color: rgba(118, 169, 0, 0.54);
        height: 100%;
        width: 100%;
        position: absolute;

    }
    #nav-bar {
        display: flex;
        background-color: #ffdfc6;
        font-family: "Arvo";
    }
    #nav-bar-text {
        color: black;
        padding-left: 35px;
    }
    #bg-image {
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
    }
    #title {
        font-family: "Arvo";
        font-size: 450px;
        color: #042009;
        padding-left: 80px;
        position:relative;
        opacity: 100%;
        left: 50px;
        top: 40px;
    }
    #desc {
        font-family: "Arvo";
        font-size: 80px;
        color: #FFDFC6;
        padding-left: 80px;
        position:relative;
        left: 1650px;
        opacity: 100%;
        bottom: 450px;
    }
    #button {
        width: 865px;
        margin: auto;
    }

    
</style>
