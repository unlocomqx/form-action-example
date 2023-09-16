<script>
  import {enhance} from "$app/forms"

  export let data

  let state = "idle"
</script>

<h1>
  Form action
</h1>

<form action="/" method=post use:enhance={() => {
  state = "loading"
	return async ({update, result}) => {
    // wait for the data to be reloaded
		await update();
    // then clear the loading state
		state = "idle"
	}
}}>
  <button type="submit">Submit</button>
</form>

<p>
  {#if state == "loading"}
    Loading...
  {:else}
    Time on the server: {data.time}
  {/if}
</p>
