<script>
    import Navbar from "./NavBar.svelte";
</script>
<body>
    <Navbar/>
    <div id = "title-image">
        <img id = "background-img" src = "images/overview.jpg" alt = "industrial pollution">
        <h1 id = "title">Overview</h1>
    </div>
</body>



<style>
    body {
        width: 100%;
    }
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