<script>
    import Globe from "./visualizer/Globe.svelte";
    import Home from "./home/Home.svelte";
    import Router from "../scripts/app/router/Router";
    import Overview from "./education/Overview.svelte";
    import AirPollution from "./education/AirPollution.svelte";
    import WaterPollution from "./education/WaterPollution.svelte";
    import Gallery from "./education/Gallery.svelte";
    let page = "home";
    function updatePage(){
        page = Router.page;
    }
    Router.link(updatePage);
</script>

{#if page == "home"}
    <Home/>
{/if}
{#if page == "globe"}
    <Globe/>
{/if}
{#if page == "education-overview"}
    <Overview/>
{/if}
{#if page == "education-air"}
    <AirPollution/>
{/if}
{#if page == "education-water"}
    <WaterPollution/>
{/if}
{#if page == "education-gallery"}
    <Gallery/>
{/if}

<style type="text/scss">    
</style>

