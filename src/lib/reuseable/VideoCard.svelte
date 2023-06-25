

<script >
  export let title =''
  export let thumbnail =''
  export let rating =''
  export let brand =''
</script>
<a href="/card" >
  <div class="relative" >

    <img
      src={thumbnail}
      class=" h-[230px] md:h-[168px] w-full object-cover rounded-lg"
      alt=""
    />
    <p
      class="text-[11px] bg-secondary-100 font-bold absolute right-2  top-[200px] md:top-[140px] rounded-2xl px-[8px] py-[3px]"
    >
      4:31
    </p>
  </div>

  <p class="text-[15px] font-semibold truncate">
   {title}
  </p>
  <div class="flex gap-2 items-center mt-[5px]">
    <img
      src="/images/avatar.jpg"
      class=" w-[30px] h-[30px] rounded-full"
      alt=""
    />
    <div class="text-[13px]">
      <div class="flex gap-1 items-center">
        <p>{brand}</p>
        <img src="/icons/verifiedIcon.svg" class="w-[9px] h-[10px]" alt="" />
      </div>
      <div class="flex gap-1 items-center">
        <p>2 days ago .</p>
        <p>{rating}k views</p>
      </div>
    </div>
  </div>
</a>
