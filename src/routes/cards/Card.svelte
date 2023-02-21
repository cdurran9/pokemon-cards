<script lang="ts">
	import { tilt } from './tilt.js';

	export let name: string;
	export let types: string[] = [];
</script>

<div class="card {`${types[0]}Type`}" use:tilt={[{ scale: 1.1 }, { useShadow: true }]}>
	<h4>{name}</h4>
	<div class="picture" />
	<div class="details">Details</div>
</div>

<style>
	h4 {
		margin-inline: 10px;
		margin-bottom: 5px;
		padding: 3px;
		background-color: rgba(255, 255, 255, 0.3);
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
	.picture {
		width: auto;
		margin: 0 10px;
		aspect-ratio: 3.5/2.5;
		background-color: white;
		border-radius: 3px;
		outline: 1px solid black;
		border: 2px solid darkgoldenrod;
	}
	.details {
		flex: 2 1 0;
		color: black;
		height: max-content;
		width: auto;
		margin: 5px 10px 10px;
		background-color: white;
		border-radius: 3px;
		outline: 1px solid black;
		border: 2px solid darkgoldenrod;
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
