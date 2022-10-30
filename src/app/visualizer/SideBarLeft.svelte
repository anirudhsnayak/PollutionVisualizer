<script>
   import Router from "../../scripts/app/router/Router";
</script>

<div id = "sidebar">
    <button on:click={Router.navigate("home")}>
        
    </button>
    <img src = "images/home-icon.png" alt = "yes" id = "home">
</div>

<style type="text/scss">
    #sidebar {
        height: 100%;
        width: 75px;
        background-color: gray;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    #home {
        width: 55px;
        height: 55px;
        border: none;
        position: relative;
        left: 9px;
        top: 10px;
    }
</style>