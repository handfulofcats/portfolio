<script>
    import marked from 'marked';
    export let content;
</script>
<div class="markdownText">
    {@html marked(content.content)}
</div>