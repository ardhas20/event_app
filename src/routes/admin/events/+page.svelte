<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	const { data } = $props();
</script>

<h1>Admin dashboard</h1>

<a href="/admin/events/new">create a new event</a>

{#each data.events as event (event.id)}
	<div class="box" transition:slide>
		<p>{event.id} - {event.title} - {event.location_name}</p>

		<form action="?/deleteEvent" method="POST" use:enhance>
			<input type="hidden" name="id" value={event.id} />
			<button type="submit">Delete</button>
		</form>
	</div>
{/each}

<style>
	.box {
		border: 1px solid black;
		padding: 1rem;
		margin: 1rem 0;
		background-color:rgb(206, 172, 206);
		border-radius: 10px;
	}

	h1 {
		display: flex;
		justify-content: center;
		align-items: center;
		color: rgb(73, 41, 73);
		
	}

	a{
		text-align: center;
		text-decoration: none;

	}
	p{
		text-align: center;
		color: rgb(110, 79, 122);
	}

</style>
