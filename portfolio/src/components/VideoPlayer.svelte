<script>
export let videoURL;
export let maxHeight = 600;

let videoElement;
let duration;
let paused = true;
let time = 0;

let showOverlay = true;

function handleVideoMouseover(e) {
    videoElement.play();
    showOverlay = false;
}

function handleVideoMouseout(e) {
    videoElement.pause();
    showOverlay = true;
}

function handleVideoClick(e) {
    if (paused) {
        videoElement.play();
        showOverlay = false;
    }
    else {
        videoElement.pause();
        showOverlay = true;
    }
}

function timeFormat(seconds) {
    if (isNaN(seconds)) return '...';

    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    if (seconds < 10) seconds = '0' + seconds;

    return `${minutes}:${seconds}`;
}

console.log(duration);
console.log(time);

</script>

<style lang="scss">
@import './static/variables.scss';

:root {
    --maxHeight: 600px;
}

#videoPlayerContainer {
    position: relative;
}

#videoAsset {
    max-height: var(--maxHeight);
    filter: drop-shadow(0 8px 20px rgba(0,0,0,0.1));

    @include xs {
        max-width: calc(100vw - 32px);
        max-height: 350px;
    }
}

#videoPlayerUI {
    position: absolute;
    display: flex;
    top: 0;
    width: 100%;
    height: 100%;
    transition: background-position-y 500ms ease;
    background: linear-gradient(0deg, rgba(0,0,0,0.7749474789915967) 0%, rgba(0,0,0,0.5648634453781513) 8%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 110%);
    background-repeat: no-repeat;
    background-position-y: 0;

    & #timeSig {
        color: #FFF;
        text-shadow: 1px 1px 2px black;
        align-self: flex-end;
        padding: 16px;
        justify-self: flex-end;
    }

    & #videoPlayBtn {
        position: absolute;
        display: block;
        border: 0;
        opacity: 1;
        width: 100%;
        height: 100%;
        background: url(../UIelements/PlayBtn.svg) no-repeat;
        background-position: center;
        background-size: 48px;
        transition: opacity 200ms ease;
    }

    &.hidden {
        background-position-y: 60px;

        & #videoPlayBtn {
            opacity: 0;
        }
    }
}

</style>

<div id="videoPlayerContainer" style="--maxHeight:{maxHeight}px"
        on:mouseover={handleVideoMouseover}
        on:mouseout={handleVideoMouseout}
        on:click={handleVideoClick}>
    <video id="videoAsset" 
        src="{videoURL}" 
        type="video/mp4" 
        muted preload="auto"
        loop
        bind:paused
        bind:duration
        bind:currentTime={time}
        bind:this={videoElement}/>
    <div id="videoPlayerUI" class="{showOverlay ? '' : 'hidden'}">
        <button id="videoPlayBtn"></button>
        <span id="timeSig">{timeFormat((duration - time))}</span>
    </div>
</div>