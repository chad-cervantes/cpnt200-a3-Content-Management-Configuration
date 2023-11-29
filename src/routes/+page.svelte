<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<script>
  export let data;
  // let { travel } = data;
</script>

<ul>
  {#each data.travel as blog}
    <p>{blog.title}</p>
    <p>{blog.author}</p>
    <p>{blog.date}</p>
    <p>{blog.tags}</p>
    <p>{blog.summary}</p>
    <p>{blog.body}</p>
  {/each}
</ul>