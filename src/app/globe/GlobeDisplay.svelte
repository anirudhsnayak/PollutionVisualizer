<script>
import Globe from '../../scripts/app/globe/Globe';
import { onMount } from 'svelte';
    import GlobeSurfaceRenderer from '../../scripts/app/globe/surface/GlobeSurfaceRenderer';
onMount(()=>{
    let globe = document.getElementById('globe');
    Globe.init(globe, window.innerWidth, window.innerHeight);
    let heatmapCanvas = document.getElementById('heatmap');
    GlobeRenderer.linkHeatmapCanvas(heatmapCanvas);
});
</script>
<div id="globe"></div>
<canvas id="heatmap" style="display:none;"></canvas>
<style>
</style>