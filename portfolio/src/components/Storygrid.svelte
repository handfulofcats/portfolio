<script>
export let stories;
</script>

<style lang="scss">
@import "./static/global.scss";

$spacing: 8px;
$min-card-width: 250px;
$ratio: 100%;

#gridcontainer {
  position: relative;
  width: 100%;
}

#storygrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax($min-card-width, 1fr));
  grid-column-gap: $spacing;
  grid-row-gap: $spacing;
}

.absolute-fill {

}

.aspect-ratio {
  padding-top: $ratio;
}

a {
    position: relative;
    text-decoration: none;
    border: solid 1px $line-gray;
    background-size: contain!important;
    background-position: center center;
}

.storyoverlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    padding: 16px;
    display: flex;
    box-sizing: border-box;
    flex-flow: column;
    align-items: left;
    justify-content: center;
    opacity: 0;
    background: rgba(0, 0, 0, 0.9);
    transition: opacity 0.1s ease;
}

.storyoverlay:hover {
    opacity: 1;
}

#storytitle {
    font-family: "lemonde-journal", serif;
    font-weight: 600;
    font-size: 1.563em;
    line-height: 1.2;
    color: #FFF;
    margin-bottom: 16px;
}

#clientdate {
    color: rgba(255,255,255,0.8);
    font-family: $arimo;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
}

</style>

<div id="gridcontainer">
  <div id="storygrid">
      {#each stories as story}
        <a class="aspect-ratio" rel="prefetch" href={story.full_slug} style="background: url('{story.content.thumb_img}')">
            <span class="storyoverlay absolute-fill">
                <span id="storytitle">{story.content.title}</span>
                <span id="clientdate" class="text_small">{story.content.client} / {story.content.year}</span>
            </span>
        </a>
      {/each}
  </div>
</div>

