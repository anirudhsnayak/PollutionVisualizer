<script>
import Globe from '../../scripts/app/globe/Globe';
import { onMount } from 'svelte';
onMount(()=>{
    let globe = document.getElementById('globe');
    Globe.init(globe, window.innerWidth, window.innerHeight);
});
</script>
<div id="globe"></div>
<style>
</style>