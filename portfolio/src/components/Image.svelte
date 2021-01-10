<script>
    import Lightbox from './Lightbox.svelte';

    export let imgAsset;
    export let altText;
    export let caption;

    let lightBoxView = false;
</script>

<img src="{imgAsset}" alt="{altText}" />

<!--{#if lightBoxView}
    <Lightbox/>
{/if}-->