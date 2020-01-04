<script>
import Storythumb from './Storythumb.svelte'; 

export let stories;
</script>

<style>
#storygrid {
    display: inline-grid;
    grid-template-columns: repeat(4, 25%);
    grid-column-gap: 8px;
}
</style>

<div id="storygrid">
    {#each stories as story}
      <Storythumb {story}/>
    {/each}
</div>
