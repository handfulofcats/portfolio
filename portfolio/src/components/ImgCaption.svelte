<script>
    import { onMount, afterUpdate, createEventDispatcher } from 'svelte';
    import { breakpoint } from '../stores.js';
    import { send, receive } from '../transitions.js';
    import Lightbox from './Lightbox.svelte';
    import marked from 'marked';
    export let content;

    let filetype = /mp4(?=$)/
    let isVideo = filetype.test(content.image.filename);
    let imgElement;

    let focusedView = false;

    let elementWidth, elementHeight;
    let preservedWidth = 0;
    let preservedHeight = 0;

    function handleFocusedView(e) {
        if (focusedView) {
            focusedView = false;
        }
        else {
            preservedWidth = elementWidth;
            preservedHeight = elementHeight;
            focusedView = true;
        }
    }
</script>

<div  id="imgcaption" class="{content.captionPlacement}" style="--preservedWidth: {preservedWidth}px; --preservedHeight: {preservedHeight}px;">
    <div class="imgcontainer" 
        class:focusedView="{focusedView}" 
        bind:clientWidth={elementWidth}
        bind:clientHeight={elementHeight}
        on:click={handleFocusedView}>
        {#if !focusedView}
            {#if isVideo}
                <p>video</p>
            {:else}
                <img    class="asset" 
                        bind:this={imgElement}
                        out:send="{{key: content.image.filename}}" in:receive="{{key: content.image.filename}}" 
                        src="{content.image.filename}" alt="{content.image.alt}" />
            {/if}  
        {/if}
    </div>
    <span id="caption">
        {@html marked(content.caption)}
    </span>
    {#if focusedView}
        <Lightbox imgSrc={content.image.filename} caption={content.caption} bind:focusedView/>
    {/if}
</div>


<style lang="scss">
@import "./static/variables.scss";

:root {
    --maxImgContainerWidth: 1300px;
    --focusedViewScale: 1;
}

#imgcaption {
    width: calc(100% - 32px);
    max-width: var(--maxImgContainerWidth);
    margin: 16px auto;
    display: flex;
    flex-wrap: wrap;

    & .imgcontainer {
        cursor: pointer;
        z-index: 12;
    }
    
    & .imgcontainer .asset {
            width: 100%;
            filter: drop-shadow(0 8px 33px rgba(0,0,0,0.1));
            transition: transform 0.5s ease;
    }

    & .imgcontainer .asset.shadow {
        visibility: hidden;
        transition: none;
    }

    &.right {
        flex-wrap: nowrap;

        @include md {
            flex-wrap: wrap;
        }
    }

    &.right .imgcontainer {
        flex: 2 1 auto;
        margin-right: 32px;

        @include md {
            flex: 0 1 100%;
            margin-right: 0;
        }
    }

    &.right #caption { 
        flex: 1 1 25%;
        margin-top: 32px;
        min-width: 25%;

        @include md {
            flex-basis: auto;
            margin-top: 16px;
        }
    }

    &.bottom .imgcontainer {
        flex: 0 1 100%;
    }

    &.bottom .imgcontainer img {
        margin: 0 auto;
    }

    &.bottom #caption { 
        flex: 0 1 100%;
        margin-top: 24px;

        @include xs {
            margin-top: 16px;
        }
    }
    
}

.imgcontainer.focusedView {
    z-index: 13;
    width: var(--preservedWidth);
    height: var(--preservedHeight);
}

</style>