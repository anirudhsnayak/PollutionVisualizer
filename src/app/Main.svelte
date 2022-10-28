<script>
    import Globe from "./globe/Globe.svelte";
    import SideBar from "./visualizer/SideBarLeft.svelte";
    import SideBarRight from "./visualizer/SideBarRight.svelte";
    import Home from "./home/Home.svelte";
</script>

<div id = "body">
    <div class = "part">
        <SideBar/>
    </div>
    
    <div class= "part">
        <Globe/>
    </div>

    <div class = "part">
        <SideBarRight/>
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
    }
    #body {
        height: 100%;
    }
    .part {
        display:inline-block;
        height: 100%;
        vertical-align: top;
    }
</style>

