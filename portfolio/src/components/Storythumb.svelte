<script>
    export let story;
    
    let thumbimg = story.content.thumb_img;
    let title = story.content.title;
    let slug = story.full_slug;
</script>

<style lang="scss">
@import "./static/variables.scss";
a {
    display: block;
    width: 287px; 
    height: 287px;
    text-decoration: none;
    border: solid 1px $line-gray;
    background-size: contain!important;
    background-position: center center;
}

.storytitle {
    opacity: 0;
}

</style>

<a rel="prefetch" href={slug} style="background: url('{thumbimg}')">
    <span class="storytitle">{title}</span>
</a>