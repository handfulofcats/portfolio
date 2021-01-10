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
</div>
<img id="lightbox-img" src="{imgSrc}">
<div id="lightbox-caption-area" transition:fadeSlide="{{duration: 400, impulse:100}}">
    <button id="close-btn" on:click={() => focusedView = !focusedView}>Go back</button>
    {@html marked(caption)}
</div>

<style lang="scss">
@import "./static/variables.scss";

#lightbox-bg {
    position: absolute;
    background: rgba(255,255,255,0.7);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 11;
    backdrop-filter: blur(3px);
}

#lightbox-img {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 14;
    width: 800px;
}

#lightbox-caption-area {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    box-sizing: border-box;
    width: 30%;
    background: #fff;
    border-left: solid 1px #ccc;
    z-index: 14;
    padding: 40px 24px;

    @include md {
        width: 30%;
    }

    @include sm {
        top: unset;
        bottom: 0;
        height: unset;
        max-height: 20%;
        width: 100vw;
        padding: 24px;
        border-left: none;
        border-top: solid 1px #ccc;
        overflow-y: scroll;
    }

    @include xs {
        max-height: 30%;
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