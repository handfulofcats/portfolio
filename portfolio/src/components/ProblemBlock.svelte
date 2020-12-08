<script>
    import marked from 'marked';
    export let content;
</script>
<style lang="scss">
@import '../../static/variables.scss';

.problemBlock {
    margin: 72px 0;
    position: relative;
}
.enumeration {
    position: absolute;
    top: 0;
    left: -80px;
    background: $pure-black;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    font-family: $lemonde;
    @include u3;
    color: #FFF;
    font-weight: 600;
    text-align: center;
    line-height: 48px;

    @include sm {
        position: static;
        display: block;
    }

    @include xs {
        width: 32px;
        height: 32px;
        line-height: 32px;
    }
}
</style>
<div class="problemBlock">
    {#if content.numeral}
        <span class="enumeration">{content.numeral}</span>
    {/if}
    {@html marked(content.content)}
</div>