<script>
    import marked from 'marked';
    import VideoPlayer from './VideoPlayer.svelte'
    export let content;

    /* Video playback */
    let videoFiletype = /(mp4|webm)(?=$)/;
</script>



<div id="imgReel">
{#each content.images as content}
<div class="imgReelContainer">
        {#if videoFiletype.test(content.image.filename)}
            <VideoPlayer videoURL={content.image.filename} maxHeight={600} />
        {:else}
        <div class="imgcontainer">
            <img class="asset" src="{content.image.filename}" alt="{content.image.alt}" />
        </div>
        {/if}
    <span class="caption">
        {@html marked(content.caption)}
    </span>
</div>
{/each}
</div>

<style lang="scss">
@import './static/variables.scss';
#imgReel {
    display: flex;
    width: 100%;
    overflow-x: scroll;
    align-items: flex-start;
    scroll-snap-type: x mandatory;
    padding: 48px 0;

    &::-webkit-scrollbar {
        display: none;
    }

}
.imgReelContainer {
    flex: 0 1 auto;
    margin-right: 52px;
    scroll-snap-align: center;
    display: flex;
    flex-flow: column;
    align-items: center;

    @include xs {
        min-width: calc(100vw - 32px);
    }
}
.imgReelContainer:first-child {
    padding-left: 20%;

    @include xs {
        padding-left: 16px;
    }
}
.imgReelContainer:last-child {
    padding-right: 15%;

    @include xs {
        padding-right: 16px;
    }
}
.imgcontainer img, .imgcontainer video {
    max-height: 600px;
    filter: drop-shadow(0 8px 20px rgba(0,0,0,0.1));

    @include xs {
        max-width: calc(100vw - 32px);
        max-height: 350px;
    }
}



</style>