<script>
  import Featured from "$lib/reuseable/Featured.svelte";
  import LiveCategory from "$lib/reuseable/LiveCategory.svelte";
  import Sidebar from "$lib/reuseable/Sidebar.svelte";
  import SubHeader from "$lib/reuseable/SubHeader.svelte";
  import VideoSection from "$lib/reuseable/VideoSection.svelte";
  export let data
  console.log("🚀 ~ file: +page.svelte:8 ~ data:", data.post)
</script>

<div class="flex max-w-[1700px] mx-auto w-full bg-[#10212f]">
  <Sidebar />
  <div class="flex-1 overflow-clip lg:ml-[80px]">
    <SubHeader />
    <Featured />
    <LiveCategory />
    <VideoSection  videoData={data.post.products} />
    <!-- <VideoSection /> -->
  </div>
</div>


<style>
  
</style>