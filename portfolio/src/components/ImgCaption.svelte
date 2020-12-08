<script>
    import marked from 'marked';
    export let content;

    let filetype = /mp4(?=$)/
    let isVideo = filetype.test(content.image.filename);
</script>

<style lang="scss">
@import "./static/variables.scss";
#imgcaption {

    width: calc(100% - 32px);
    max-width: 1300px;
    margin: 16px auto;
    display: flex;
    flex-wrap: wrap;
    /*justify-content: space-between;*/
    

    & #imgcontainer #asset {
            width: 100%;
            filter: drop-shadow(0 8px 33px rgba(0,0,0,0.1));
    }

    &.right {
        flex-wrap: nowrap;

        @include md {
            flex-wrap: wrap;
        }
    }

    &.right #imgcontainer {
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

    &.bottom #imgcontainer {
        flex: 0 1 100%;
    }

    &.bottom #caption { 
        flex: 0 1 100%;
        margin-top: 24px;

        @include xs {
            margin-top: 16px;
        }
    }
    
}
</style>

<div id="imgcaption" class="{content.captionPlacement}">
    <div id="imgcontainer">
        {#if isVideo}
            <p>video</p>
        {:else}
            <img id="asset" src="{content.image.filename}" alt="{content.image.alt}" style="{content.maxWidth > 0 ? "max-width: " + content.maxWidth + "px" : ''}"/>
        {/if}  
    </div>
    <span id="caption">
        {@html marked(content.caption)}
    </span>
</div>
