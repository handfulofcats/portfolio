<script>
	import MarkdownText from './MarkdownText.svelte';
	import Image from './Image.svelte';
    export let content;

    const components = {
        "markdown_text" : MarkdownText,
        "Image" : Image
    };

    const numOfCols = content.columns.length;
    const colWidth = (100 / numOfCols);

</script>

<div class="gridContainer" style="--colWidth:{colWidth}px;">
    {#each content.columns as column}
        <div class="gridColumn {column.contentClass ? column.contentClass : ""}">
            <svelte:component this={components[column.component]} content={column} />
        </div>
    {/each}
</div>

<style lang="scss">
    .gridContainer {
        display:flex;
        flex-wrap: wrap;
        max-width: 1200px;
        margin: 48px auto; 
    }
    .gridColumn {
        display:flex;
        flex: 1 1 calc(var(--colWidth) - 24px);
        justify-content: space-between;
        align-items: center;
        margin-right: 24px;
    }
    .gridColumn:last-child {
        margin-right: 0;
    }
</style>
