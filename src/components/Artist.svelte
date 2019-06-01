<script>
  export let rapperInfos;
  export let songs;
</script>

<article>
  <section>
    <h1>Names:</h1>
    <ul>
      {#each rapperInfos.alternate_names as name}
        <li>{name}</li>
      {/each}
    </ul>
  </section>
  <section>
    <h1>Songs:</h1>
    <ul>
      {#each songs as song}
        <li>{song.full_title}</li>
      {/each}
    </ul>
  </section>
</article>
