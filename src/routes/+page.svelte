<script>
  import {enhance} from "$app/forms"

  export let data

  let loading = false
</script>

<h1>
  Form action
</h1>

<form action="/" method=post use:enhance={() => {
  loading = true
	return async ({update, result}) => {
		await update();
		loading = false
	}
}}>
  <button type="submit">Submit</button>
</form>

<p>
  {#if loading}
    Loading...
  {:else}
    Time on the server: {data.time}
  {/if}
</p>
