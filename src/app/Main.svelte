<script>
    import Globe from "./globe/Globe.svelte";
    import SideBar from "./visualizer/SideBarLeft.svelte";
    import SideBarRight from "./visualizer/SideBarRight.svelte";
    import Home from "./home/Home.svelte";
    import GlobeDisplay from "./globe/GlobeDisplay.svelte";
</script>

<div id = "body">
    <div class = "part">
        <SideBar/>
    </div>
    
    <div class= "part">
        <GlobeDisplay></GlobeDisplay>
    </div>

    <div class = "part">
        <SideBarRight/>
    </div>
    
</div>


<style type="text/scss">    #body {
        height: 100%;
    }
    .part {
        display:inline-block;
        height: 100%;
        vertical-align: top;
    }
</style>

