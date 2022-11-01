<script>
    import Globe from "./visualizer/Globe.svelte";
    import Home from "./home/Home.svelte";
    import Router from "../scripts/app/router/Router";
    import GlobeDataManager from "../scripts/app/globe/GlobeDataManager";
    let page = "home";
    function updatePage(){
        page = Router.page;
    }
    Router.link(updatePage);
    GlobeDataManager.init();
</script>

{#if page == "home"}
    <Home/>
{/if}
{#if page == "globe"}
    <Globe/>
{/if}

<style type="text/scss">    
</style>

