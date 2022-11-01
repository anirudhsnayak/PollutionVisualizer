<script>
    import Button from "./Button.svelte";
    import Router from "../../scripts/app/router/Router";
</script>

<body>
    <div id = "bg">
        <div id = "nav-bar">
            <button id = "education-button" on:click={()=>{Router.navigate("education-overview")}}>
                Learn More
            </button>
        </div>
        <div id = "main">
            <img src = "images/background-img.png" alt = "bg" id = "bg-image">
            <h1 id = "title">Pollution3D</h1>
            <h1 id = "desc">Visualizing <br> pollution around <br> the world.</h1>
            <div id = "button"><Button/></div>
        </div>
    </div>

</body>


<style type="text/scss">
    body {
        width: 100%;
        height: 100%;
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

    #bg-image {
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 882px;
        border: 0px;
        padding: 0px;
    }
    #title {
        font-family: "Arvo";
        font-size: 175px;
        color: #042009;
        padding-left: 80px;
        position:relative;
        opacity: 100%;
        left: 50px;
        top: 60px;
    }
    #desc {
        font-family: "Arvo";
        font-size: 60px;
        color: #FFDFC6;
        padding-left: 80px;
        position:relative;
        left: 1200px;
        opacity: 100%;
        bottom: 120px;
    }
    #button {
        width: 850px;
        margin: auto;
        position: relative;
        top: 75px;
    }
    #education-button {
        float: left;
        font-size: 16px;
        color: #042009;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        background-color: transparent;
        border: 0px;
        position: relative;
        top: 5px;
        font-family: "Arvo";
        font-size: 20px;
        cursor: pointer;
    }

    #education-button:hover {
        background-color: #76a900;
        color: white;
    }

    
</style>
