	<script lang='ts' >

    import { page } from '$app/stores';
  </script>

<div class="h-[520px] grid place-items-center">
  <h1>{$page.status} {$page?.error?.message}</h1>
  <h1 class="text-5xl font-bold capitalize">an error occurred</h1>
</div>
