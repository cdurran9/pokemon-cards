<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let start = 1;
  export let end = 20;
  export let page = 1;
  export let maxPages = 20;
  const dispatch = createEventDispatcher();

  const handleBack = () => {
    dispatch('back');
  }
  const handleForward = () => {
    dispatch('forward');
  }
  const handleChangePage = (e: Event) => {
    dispatch('pageChange', { value: (e?.target as HTMLInputElement)?.value})
  }
</script>

<div class="controls">
  <button on:click={handleBack}>←</button>
  <span>Showing page</span>
    <select on:change={handleChangePage} value={page}>
      {#each [...Array(maxPages)].map((_, i) => i + 1) as page}
        <option value="{page}">{page}</option>
        {/each}
    </select>
    <span>({start} to {end})</span>
  <button on:click={handleForward}>→</button>
</div>

<style>
  .controls {
    margin: 10px auto;
  }
  /* button {
    background: cornflowerblue;
    color: inherit;
    border: none;
    padding: 5px;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  } */
</style>