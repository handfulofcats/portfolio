<script>
export let caption;
export let focusedView = true;
export let imgSrc;

import { onMount, onDestroy} from 'svelte';
import { fade } from 'svelte/transition';
import { fadeSlide, send, receive } from '../transitions.js';

import marked from 'marked';

</script>

<!--Workaround for blocking <body> scroll-->
<svelte:head>
    {#if focusedView}
        <style>
            body {
                overflow: hidden;
            }
        </style>
    {/if}
</svelte:head>

<div id="lightbox-bg" transition:fade="{{duration:200}}">
    <div id="lightbox-imgcontainer">
        <img id="lightbox-img" on:click={() => focusedView = !focusedView} src="{imgSrc}" out:send="{{key: imgSrc}}" in:receive="{{key: imgSrc}}">
    </div>

    <div id="lightbox-caption-area" transition:fadeSlide="{{duration: 400, impulse:100}}">
        <button id="close-btn" on:click={() => focusedView = !focusedView}>Go back</button>
        {@html marked(caption)}
    </div>
</div>


<style lang="scss">
@import "./static/variables.scss";

#lightbox-bg {
    position: fixed;
    display: flex;
    background: rgba(255,255,255,0.7);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 11;
    backdrop-filter: blur(3px);

    @include sm {
        flex-flow: column;
    }

}

#lightbox-imgcontainer {
    display: flex;
    align-content: center;
    justify-content: center;
    z-index: 14;
    flex: 0 1 70%;

    & img {
        max-width: 95%;
        max-height: 95%;
        align-self: center;
    }

    @include sm {
        flex: 0 1 80%;
        max-height: 80%;
    }

    @include xs {
        flex: 0 1 70%;
        max-height: 70%;
    }
}

#lightbox-caption-area {
    height: 100%;
    box-sizing: border-box;
    flex: 0 1 30%;
    background: #fff;
    border-left: solid 1px #ccc;
    z-index: 14;
    padding: 40px 24px;

    @include sm {
        flex: 0 1 20%;
        width: 100%;
        padding: 24px;
        border-left: none;
        border-top: solid 1px #ccc;
        overflow-y: scroll;
    }

    @include xs {
        flex: 0 1 30%;
    }

    & #close-btn {
        border:0;
        border-radius: 32px;
        padding: 16px;
        padding-left: 32px;
        background-color: rgba(0,0,0,0.65);
        background-image: url(../UIelements/arrowLeft.svg);
        background-position: 15% center;
        background-size: 12px;
        background-repeat: no-repeat;

        font-family: aktiv-grotesk-extended;
        font-weight: 600;
        line-height: 0;
        font-size: 12px;
        color: #FFFFFF;
        cursor: pointer;
    }

}



</style>