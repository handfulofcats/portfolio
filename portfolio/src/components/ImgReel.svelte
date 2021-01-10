<script>
    import marked from 'marked';
    import VideoPlayer from './VideoPlayer.svelte'
    export let content;

    /* Video playback */
    let videoFiletype = /(mp4|webm)(?=$)/;
    let imgReelElement;
    let swipeBtn;
    let swipeBtnState = "";

    function handleTouch() {
        swipeBtnState = "compact";
    }

    function handleScroll(e) {
        if (imgReelElement.offsetWidth + imgReelElement.scrollLeft >= imgReelElement.scrollWidth) {
            swipeBtnState = "compact hidden";
            console.log("yea");
        }
        else {
            swipeBtnState = "compact";
        }
    }

</script>

<div id="reelWrapper" 
    on:touchend={handleTouch}>
    <button id="reelNavBtn" class="{swipeBtnState}" bind:this={swipeBtn}><span>Swipe</span></button>
    <div id="imgReel" on:scroll={handleScroll} bind:this={imgReelElement}>
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
</div>

<style lang="scss">
@import './static/variables.scss';

#reelWrapper {
    position: relative;
    border-bottom: solid 1px $vlight-gray;

    & #reelNavBtn {
        z-index: 1;
        display: none;
        position: absolute;
        transition: opacity 200ms ease, padding 200ms ease, background-position 200ms ease;
        opacity: 1;
        border:0;
        right: 16px;
        border-radius: 32px;
        top: 30%;
        transform: translateY(-50%);
        padding: 16px;
        padding-right: 32px;
        background-color: rgba(0,0,0,0.65);
        background-image: url(../UIelements/arrowRight.svg);
        background-position: 85% center;
        background-size: 12px;
        background-repeat: no-repeat;

        font-family: aktiv-grotesk-extended;
        font-weight: 600;
        line-height: 0;
        font-size: 12px;
        color: #FFFFFF;

        &.compact {
            opacity: 0.4;
            padding: 16px;
            background-position: center;

            &>span {
                display: none;
            }
        }

        &.hidden {
            opacity: 0;
            color: red;
        }

        @include xs {
            display: block;
        }
    }


}

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
#ReelUI {


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