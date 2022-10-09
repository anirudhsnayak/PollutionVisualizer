<script>
import Globe from '../../scripts/app/globe/Globe';
import { onMount } from 'svelte';
onMount(()=>{
    let sideLength = Math.min(window.innerWidth, window.innerHeight);
    let globe = document.getElementById('globe');
    Globe.init(globe, sideLength, sideLength);
});
</script>
<div id="globe"></div>
<style>
</style>