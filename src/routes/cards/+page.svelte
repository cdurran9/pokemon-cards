<script lang="ts">
	import Card from './Card.svelte';
	import PagingControls from './PagingControls.svelte';

	let offset = 0;
	const limit = 20;
	let totalResults = 0;

	async function getPokemon() {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?&limit=${limit}&offset=${offset}`);
		const json = await res.json();

		if (res.ok) {
			totalResults = json.count;
			return json;
		} else {
			throw new Error(json);
		}
	}

	let asyncCards = getPokemon();

	const handleBack = () => {
		let target = offset - limit;
		if (target < 0) return;
		offset = target;
		asyncCards = getPokemon();
	}

	const handleForward = () => {
		let target = offset + limit;
		offset = target;
		asyncCards = getPokemon();
	}

	const handlePageChange = ({detail: {value}}: CustomEvent) => {
		if (!value || isNaN(+value)) return;

		const numPage = +value;
		let target = (numPage - 1) * limit;
		offset = target;
		asyncCards = getPokemon();
	}
</script>

<PagingControls start={offset + 1} end={offset + limit} maxPages={Math.ceil(totalResults / limit)} page={Math.floor(offset / limit) + 1} on:back={handleBack} on:forward={handleForward} on:pageChange={handlePageChange} />
<div class="card-container">
	{#await asyncCards}
		<p>waiting...</p>
	{:then pokemons}
	{#each pokemons.results as card}
		<Card {...card} />
	{/each}
	{:catch error}
		<p>Error! {error.message}</p>
	{/await}
</div>

<style>
	.card-container {
		display: flex;
		gap: 10px;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>
