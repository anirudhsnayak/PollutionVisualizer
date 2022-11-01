<script>
    import Navbar from "./NavBar.svelte";
</script>

<Navbar/>
<div id = "title-image">
    <img id = "background-img" src = "images/water-pollution.jpg" alt = "water pollution">
    <h1 id = "title">Oil Spills</h1>
    <div id = "info">
        <div id = "intro">
            <img src = "images/oil-spill-one.jpg" alt = "oil spill" id = "oil-one">
            <div id = "define">
                <h1>What Are Oil Spills?</h1>
                <p>
                    Oil spills are the release of a liquid petroleum hydrocarbon into the marine ecosystem due to human activity. It is most often caused by accidents involving
                    tankers, drilling rigs, and storage facilities. When oil spills occur, they can have disastrous environmental effects.
                </p>
            </div>
            
                
            

        </div>
        <div id = "impact">
            <div id = "impact-text">
                <h1>Impact</h1>
                <p>
                    Why does it matter to know about oil spills? Oil mess with the structure of the plumage of birds and the fur of mammals, reducing their 
                    insulating ability, and making them less able to deal with colder temperatures and stay floating. Thus, they have a lower chance of surviving. Cleanup and 
                    recovery can take months or years because of many factors including the temperature of water. It is very tedious to remove oil from water.
                    <br>
                    <br>
                    Due to these reasons, oil spills can have disastrous consequences and are important to be aware of.
                </p>
            </div>
            <img src = "images/oil-spill-two.jpg" alt = "another oil spill" id = "impact-img">
        </div>
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
        bottom: 1800px;
        left: 650px;
        z-index: 2;
        font-family: "Arvo";
        font-size: 150px;
        color: black;
    }

    #info {
        background-color: #EEEEEE;
        border: 0px;
        height: 1250px;
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

    #oil-one {
        width: 750px;
        position: relative;
        left: 200px;
    }

    #define {
        position: relative;
        right: 100px;
        inline-size: 800px;
        text-align: left;
    }

    #impact {
        position: relative;
        top: 100px;
        left: 200px;
        display: flex;
        justify-content: space-between;
    }

    #impact-text {
        inline-size: 800px;
        text-align: left;
    }

    #impact-img {
        position: relative;
        right: 300px;
        width: 750px;
    }
</style>