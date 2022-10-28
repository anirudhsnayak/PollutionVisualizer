<script>
import GlobeRenderer from '../../scripts/app/GlobeRenderer';
import { onMount } from 'svelte';

function animate() {
    requestAnimationFrame( animate );
    GlobeRenderer.render();
}

onMount(()=>{
    let sideLength = Math.min(window.innerWidth, window.innerHeight);
    GlobeRenderer.init(document.getElementById('globe'), sideLength, sideLength);
    animate();
});

</script>

<div id="globe"></div>

<style>

</style>