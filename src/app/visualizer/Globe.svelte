<script>
    import SideBar from "./SideBarLeft.svelte";
    import SideBarRight from "./SideBarRight.svelte";
    import GlobeDisplay from "../globe/GlobeDisplay.svelte";
</script>

<div class = "ui">
    <div class = "part sidebar-left">
        <SideBar/>
    </div>
    
    <div class="globe">
        <GlobeDisplay></GlobeDisplay>
    </div>

    <div class = "part sidebar-right">
        <SideBarRight/>
    </div>
    
</div>


<style type="text/scss">    
    .ui {
        height: 100%;
        width: 100%;
    }
    .part {
        display: inline-block;
        position: absolute;
        height: 100%;
        vertical-align: top;
        top: 0;
    }
    .sidebar-left {
        width: 75px;
        left: 0;
    }
    .globe{
        height: 100%;
        //overflow-y: hidden;
    }
    .sidebar-right {
        width: 300px;
        right: 0;
    }
</style>

