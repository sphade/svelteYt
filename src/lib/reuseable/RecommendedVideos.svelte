<aside class="  flex-shrink-0 w-full mx-auto sm:w-[350px]  ">
  <div class="w-full h-[280px] mb-[28px]" />
  <div class="rounded-2xl bg-secondary-500 px-[16px] py-[11px]">
    {#each { length: 10 } as item}
      <a
        href="/ssss"
        class="flex gap-[10px] relative hover:bg-[#1A2A37] h-[111px] py-[11px]"
      >
        <div class="relative">
          <img
            src="/images/crowder.jpg"
            class="h-[90px] flex-1 rounded-2xl bg-gray-800"
            alt=""
          />
          <div
            class="py-[3px] bottom-1 text-[11px] font-bold px-[8px] rounded-3xl bg-[#06172699] absolute right-2"
          >
            28:59
          </div>
        </div>

        <div class="flex-1">
          <div class="flex gap-2">
            <img
              src="/images/avatar.jpg"
              class="w-[30px] rounded-full h-[30px]"
              alt=""
            />
            <div class="text-xs truncate text-[#88a0b8]">
              <p>geometricianscians</p>
              <p>2 months ago</p>
            </div>
          </div>
          <p class="text-[13px] truncate font-semibold capitalize my-[7px]">
            Vision
          </p>
          <div class="text-xs flex items-center gap-5">
            <div class="flex gap-2 items-center">
              <img
                src="/icons/viewIcon.svg"
                class=" h-[14px] w-[14px]"
                alt=""
              />
              <span>578</span>
            </div>
            <div class="flex gap-2 items-center">
              <img
                src="/icons/commentIcon.svg"
                class=" h-[14px] w-[14px]"
                alt=""
              />
              <span>578</span>
            </div>
          </div>
        </div>
      </a>
    {/each}
  </div>
</aside>
