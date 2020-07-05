<script>
    import marked from 'marked';
    export let content;
</script>

<style lang="scss">
@import "./static/variables.scss";
#imgcaption {
    width: calc(100% - 32px);
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & #imgcontainer {
        flex: 0 1 75%;

        & img {
            width: 100%;
            filter: drop-shadow(0 8px 33px rgba(0,0,0,0.1));
        }
    }


    & #caption { 
        flex: 0 1 21%;
        margin-top: 32px;
    }

    
}
</style>

<div id="imgcaption">
    <div id="imgcontainer">
        <img src="{content.image.filename}" alt="{content.image.alt}" />
    </div>
    <span id="caption">
        {@html marked(content.caption)}
    </span>
</div>
