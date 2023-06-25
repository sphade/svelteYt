<script lang="ts">
  import Button from "$lib/reuseable/Button.svelte";

  let value = "";
</script>

<h1>
  {value}
</h1>
<Button bind:value={value} />
<button on:click={() => (value = "")}>empty value</button>
