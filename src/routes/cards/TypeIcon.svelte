<script lang="ts">
  import type { PokemonType } from '../../types';
  import bug from '$lib/images/icons/bug.svg';
  import dark from '$lib/images/icons/dark.svg';
  import dragon from '$lib/images/icons/dragon.svg';
  import electric from '$lib/images/icons/electric.svg';
  import fairy from '$lib/images/icons/fairy.svg';
  import fighting from '$lib/images/icons/fighting.svg';
  import fire from '$lib/images/icons/fire.svg';
  import flying from '$lib/images/icons/flying.svg';
  import ghost from '$lib/images/icons/ghost.svg';
  import grass from '$lib/images/icons/grass.svg';
  import ground from '$lib/images/icons/ground.svg';
  import ice from '$lib/images/icons/ice.svg';
  import normal from '$lib/images/icons/normal.svg';
  import poison from '$lib/images/icons/poison.svg';
  import psychic from '$lib/images/icons/psychic.svg';
  import rock from '$lib/images/icons/rock.svg';
  import steel from '$lib/images/icons/steel.svg';
  import water from '$lib/images/icons/water.svg';

  export let type: PokemonType;

  const typeDict = {
    bug,
    dark,
    dragon,
    electric,
    fairy,
    fighting,
    fire,
    flying,
    ghost,
    grass,
    ground,
    ice,
    normal,
    poison,
    psychic,
    rock,
    steel,
    water,
  };
</script>

<img class={type} src={typeDict[type]} width=16 height=16 alt={type} title="{type}" />

<style>
  img {
    margin-inline: 2px;
    padding: 2px;
    border: 1px solid black;
    border-radius: 50%;
  }
  .normal {
		background-color: #a8a878dd;
	}
	.fire {
		background-color: #f08030dd;
	}
	.water {
		background-color: #6890f0dd;
	}
	.grass {
		background-color: #78c850dd;
	}
	.electric {
		background-color: #f8d030dd;
	}
	.ice {
		background-color: #98d8d8dd;
	}
	.fighting {
		background-color: #c03028dd;
	}
	.poison {
		background-color: #a040a0dd;
	}
	.ground {
		background-color: #e0c068dd;
	}
	.flying {
		background-color: #a890f0dd;
	}
	.psychic {
		background-color: #f85888dd;
	}
	.bug {
		background-color: #a8b820dd;
	}
	.rock {
		background-color: #b8a038dd;
	}
	.ghost {
		background-color: #705898dd;
	}
	.dark {
		background-color: #705848dd;
	}
	.dragon {
		background-color: #7038f8dd;
	}
	.steel {
		background-color: #b8b8d0dd;
	}
	.fairy {
		background-color: #f0b6bcdd;
	}
</style>