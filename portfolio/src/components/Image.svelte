<script>
    export let content;
</script>

<img src="{content.image}" style="{content.maxwidth > 0 ? "max-width: " + content.maxwidth + "px" : ''}" alt="" />