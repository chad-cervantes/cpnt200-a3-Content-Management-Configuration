<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<script>
  export let data;
  // let { travel } = data;
</script>

<ul>
  {#each data.travel as {title,author,date,tags,summary,body}}
    <p>{title}</p>
    <p>{author}</p>
    <p>{date}</p>
    <p>{tags}</p>
    <p>{summary}</p>
    <p>{body}</p>
  {/each}
</ul>