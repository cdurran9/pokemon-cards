<script lang="ts">
	import type { PokemonType } from '../../types.js';
	import { tilt } from './tilt.js';
	import TypeIcon from './TypeIcon.svelte';

	export let name: string;
	export let url: string;
	let types: PokemonType[] = [];
	let flavorText = '';

	const getDetails = async () => {
		const res = await fetch(url);
		const json = await res.json();
		const speciesRes = await fetch(json?.species?.url);
		const speciesJson = await speciesRes.json();

		if (res.ok) {
			types = json?.types?.map((t: { type: Record<string, string>}) => t?.type?.name);
			flavorText = speciesJson.flavor_text_entries?.find((ft: {flavor_text: string, language: { name: string, url: string }}) => ft.language?.name === 'en')?.flavor_text;
			return {...json, ...speciesJson};
		} else {
			throw new Error(json);
		}
	}
	let details = getDetails();
</script>

{#await details}
	<div class="card skeleton" />
{:then pokemon} 
	<div class="card {`${types[0]}Type`}" use:tilt={[{ scale: 1.1 }, { useShadow: true }]}>
		<h4><span>{name}</span><span>
			{#each types as type}
				<TypeIcon type={type} />
			{/each}
		</span></h4>
		<div class="picture"><img src={pokemon?.sprites?.versions?.['generation-v']?.['black-white']?.animated?.front_default} alt={name} /></div>
		<div class="details">
			<!-- <p style="font-size: 10px;">#{pokemon.id}</p> -->
			<p class="flavor-text" title={flavorText}>{flavorText}</p>
		</div>
	</div>
{/await}

<style>
	h4 {
		margin-inline: 10px;
		margin-bottom: 5px;
		padding: 3px;
		background-color: rgba(255, 255, 255, 0.3);
		text-transform: capitalize;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.card {
		display: flex;
		flex-direction: column;
		height: 280px;
		width: 200px;
		border-radius: 5px;
		color: white;
		border: 3px solid darkgoldenrod;
		outline: 1px solid black;
	}
	.skeleton {
		border: none;
		outline: none;
		display: inline-block;
		position: relative;
		overflow: hidden;
		background-color: #DDDBDD;
	}
	.skeleton::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: -moz-linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 80%);
    animation: shimmer 1.5s infinite;
    content: '';
	}
	@keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
	.picture {
		width: 180px;
		height: 130px;
		margin: 0 10px;
		/* aspect-ratio: 3.5/2.5; */
		background-color: white;
		border-radius: 3px;
		outline: 1px solid black;
		border: 2px solid darkgoldenrod;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.picture img {
		min-height: 50%;
	}
	.details {
		flex: 2 1 0;
		color: black;
		height: 77.5px;
		width: auto;
		margin: 5px 10px 10px;
		background-color: rgba(255, 255, 255, 0.4);
		border-radius: 3px;
		outline: 1px solid black;
		border: 2px solid darkgoldenrod;
		overflow: hidden;
	}
	.details p {
		margin: 0;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
	.flavor-text {
		font-size: 10px;
	}
	.normalType {
		background-color: #a8a878;
	}
	.fireType {
		background-color: #f08030;
	}
	.waterType {
		background-color: #6890f0;
	}
	.grassType {
		background-color: #78c850;
	}
	.electricType {
		background-color: #f8d030;
	}
	.iceType {
		background-color: #98d8d8;
	}
	.fightingType {
		background-color: #c03028;
	}
	.poisonType {
		background-color: #a040a0;
	}
	.groundType {
		background-color: #e0c068;
	}
	.flyingType {
		background-color: #a890f0;
	}
	.psychicType {
		background-color: #f85888;
	}
	.bugType {
		background-color: #a8b820;
	}
	.rockType {
		background-color: #b8a038;
	}
	.ghostType {
		background-color: #705898;
	}
	.darkType {
		background-color: #705848;
	}
	.dragonType {
		background-color: #7038f8;
	}
	.steelType {
		background-color: #b8b8d0;
	}
	.fairyType {
		background-color: #f0b6bc;
	}
</style>
