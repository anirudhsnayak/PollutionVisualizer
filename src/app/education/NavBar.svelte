<script>
    import Router from "../../scripts/app/router/Router";

</script>

<div class="navbar">
    <button on:click={()=>{Router.navigate("home")}}>Home</button>
    <button on:click={()=>{Router.navigate("education-overview")}}>Overview</button>
    <div class="dropdown">
      <button class="dropbtn">Types of Pollution
      </button>
      <div class="dropdown-content">
        <button on:click={()=>{Router.navigate("education-air")}}>Air Pollution</button>
        <button on:click={()=>{Router.navigate("education-water")}}>Water Pollution</button>
      </div>
    </div>
    <button on:click={()=>{Router.navigate("education-gallery")}}>Gallery</button>
  </div>

<style type="text/scss">
    .navbar {
        overflow: hidden;
        background-color: #ffdfc6;
        font-family: Arial;
    }

    .navbar button {
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

    .dropdown {
        float: left;
        overflow: hidden;
        
    }

    .dropdown .dropbtn {
        font-size: 16px;
        border: none;
        outline: none;
        color: #042009;
        padding: 14px 16px;
        background-color: inherit;
        margin: 0;
        font-family: "Arvo";
        font-size: 20px;
        cursor: pointer;
    }


    .navbar button:hover, .dropdown:hover .dropbtn {
        background-color: #76a900;
        color: white;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        top: 53px;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    .dropdown-content button {
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        width: 100%;
        text-align: left;
    }

    .dropdown-content button:hover {
        background-color: #696969;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }
</style>