<script>
import Globe from '../../scripts/app/globe/Globe';
import { onMount } from 'svelte';
import GlobeRenderer from '../../scripts/app/globe/GlobeRenderer';
import SurfaceData from '../../scripts/app/globe/surface/SurfaceData';
onMount(()=>{
    let globe = document.getElementById('globe');
    let heatmapCanvas = document.getElementById('heatmap');
    GlobeRenderer.linkHeatmapCanvas(heatmapCanvas);
    Globe.init(globe, window.innerWidth, window.innerHeight);
});
</script>
<div id="globe"></div>
<canvas id="heatmap" style="display:none;" width="{SurfaceData.CANVAS_WIDTH}" height="{SurfaceData.CANVAS_HEIGHT}"></canvas>
<style>
</style>