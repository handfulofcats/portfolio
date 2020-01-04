<script>
  export let segment
</script>

<style>
  /* nothing changes here */
</style>

<nav>
  <ul>
    <li class={segment === undefined ? 'selected' : ''}>
      <a href='.'> Index </a>
    </li>
    {#each stories as story}
      <li class={story.full_slug === segment ? 'selected' : ''}>
        <a href={story.full_slug}> {story.name} </a>
      </li>
    {/each}
  </ul>
</nav>