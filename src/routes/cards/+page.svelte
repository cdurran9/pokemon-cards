<script>
	import Card from './Card.svelte';

	const cards = [
		{ name: 'Bulbasaur', types: ['grass', 'poison'] },
		{ name: 'Charmander', types: ['fire'] },
		{ name: 'Squirtle', types: ['water'] },
		{ name: 'Pikachu', types: ['electric'] },
		{ name: 'Abra', types: ['psychic'] }
	];
</script>

<div class="card-container">
	{#each cards as card}
		<Card {...card} />
	{/each}
</div>

<style>
	.card-container {
		display: flex;
		gap: 10px;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>
