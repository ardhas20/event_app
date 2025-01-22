<script>
	import { enhance } from '$app/forms';
	import Warning from '$lib/components/Warning.svelte';
	import { slide } from 'svelte/transition';
	const { data, form } = $props();
</script>


<h1>Admin dashboard</h1>

<a href="/admin/locations/new">Create a new location</a>

{#if form && !form.success}
<Warning message = {form.message}/>
{/if}

<div class="container">
	{#each data.locations as location (location.id)}
		<div class="box" transition:slide>
			<p>{location.id} - {location.name} - {location.street}</p>
			<form action="?/deleteLocation" method="POST" use:enhance>
				<input type="hidden" name="id" value={location.id} />
				<button type="submit">Delete</button>
			</form>
		</div>
	{/each}
</div>

<style>
	h1 {
		text-align: center;
		font-weight: 800;
		font-size: 50px;
		color: rgb(73, 41, 73);
	}
	.box {
		padding: 1rem;
		margin: 1rem 0;
	}

	.container {
		border: 1px solid;
		padding: 1rem;
		margin-bottom: 20px;
		background-color: rgb(255, 255, 255);
		border-radius: 20px;
		font-family: 'Roboto' serif;
		color: black;
		text-align: center;
		

	}
</style>
