<script lang="ts">
  export let value = ''
</script>

<!-- <button
  class="px-[18px] py-[10px] font-semibold capitalize text-lg rounded-lg bg-primary text-white"
  on:click
>
  {children}
</button> -->
<input type="text"   bind:value={value} >
