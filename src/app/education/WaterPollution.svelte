<script>
    import Navbar from "./NavBar.svelte";
</script>

<Navbar/>
<div id = "title-image">
    <img id = "background-img" src = "images/water-pollution.jpg" alt = "water pollution">
    <h1 id = "title">Water Pollution</h1>
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
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        font-family: "Arvo";
        font-size: 150px;
        color: black;
    }
</style>