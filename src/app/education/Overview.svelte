<script>
    import Navbar from "./NavBar.svelte";
</script>
<body>
    <Navbar/>
    <div id = "title-image">
        <img id = "background-img" src = "images/overview.jpg" alt = "industrial pollution">
        <h1 id = "title">Overview</h1>
    </div>
    <div id = "info">
        <div id = "intro">
            <img src = "images/earth-polluted.jpg" alt = "3D renderer" id = "render-img">
            <div id = "who">
                <h1>Who are We?</h1>
                <p>
                    We are a team of aspiring developers who designed Pollution3D to visualize air pollution and oil spills around the world. We use real-time pollution data from an API to do this.
                    The data is 3D-rendered on a globe to show hotspots of air pollution and oil spills. We believe pollution is a major world issue that must be resolved, which is what inspired us
                    to create this app.
                </p>
            </div>
            

        </div>
    </div>
    
</body>



<style>
    body {
        width: 100%;
    }
    #title-image {
        position: relative;
        text-align: center;
        width: 100%;
    }
    #background-img {
        opacity: 65%;
        z-index: 1;
        border: 0px;
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

    #info {
        background-color: #EEEEEE;
        border: 0px;
        height: 600px;
        font-family: "Arvo";
    }

    #info h1 {
        font-size: 50px;
    }

    #info p {
        position: relative;
        top: 50px;
        font-size: 25px;
    }

    #intro {
        position: relative;
        top: 50px;
        display: flex;
        justify-content: space-between;
    }

    #render-img {
        position: relative;
        left: 200px;
    }

    #who {
        position: relative;
        right: 100px;
        inline-size: 800px;
        
    }

</style>