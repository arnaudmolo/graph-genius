<script>
  import startSpider from "../services/spider";

  function onClick(value) {
    startSpider(15427);
  }
</script>

<style>
  p {
    margin: 1em auto;
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<section>
  Look for a rapper ?
  <button on:click={onClick}>Search Alkpote</button>
</section>

<p />
