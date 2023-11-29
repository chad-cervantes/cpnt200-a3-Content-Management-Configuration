<script>
  export let data;
  // let { travel } = data;
</script>

<ul>
  {#each data.travel as blog}
    <h1>{blog.title}</h1>
    <h2>{blog.author}</h2>
    <p>{blog.date}</p>
    <p>{blog.tags}</p>
    <h3>{blog.summary}</h3>
    <p>{blog.body}</p>
  {/each}
</ul>