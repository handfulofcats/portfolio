<script>
	import MarkdownText from './MarkdownText.svelte';
	import Image from './Image.svelte';
    export let content;

    const components = {
        "markdown_text" : MarkdownText,
        "Image" : Image
    };
</script>

<style lang="scss">
.gridContainer {
    display:flex;
    flex-wrap: wrap;
    max-width: 1200px;
	margin: 48px auto;
}
.gridColumn {
    display:flex;
    flex: 1 1 47%;
    min-width: 300px;
    justify-content: space-between;
    align-items: center;
}
.gridColumn:first-child {
    margin-right: 24px;
}
</style>

<div class="gridContainer">
    {#each content.columns as column}
        <div class="gridColumn">
            <svelte:component this={components[column.component]} content={column} />
        </div>
    {/each}
</div>

