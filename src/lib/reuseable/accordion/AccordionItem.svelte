<script lang="ts">
  import { slide,fly } from "svelte/transition";

  export let open = false;
  function toggleOpen() {
    open=!open
  }
</script>

<div class="text-white text-lg">
  <button on:click={toggleOpen}  class="w-full p-4 text-inherit font-semibold bg-none cursor-pointer rounded flex hover:bg-red-300 transition-colors justify-between" >
    <div>
      <slot name="title" />
    </div>
    <div>open</div>
  </button>
  {#if open}
<div  transition:fly class="p-4">
      <slot name="content" />
    </div>
  {/if}
</div>


