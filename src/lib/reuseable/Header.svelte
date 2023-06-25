<script>
</script>

<header
  class=" bg-secondary-500 flex h-[70px] px-7 sticky top-0 left-0 z-50 justify-between items-center"
>
  <div class="flex items-center gap-7">
    <img src="/icons/bugger.svg" loading="eager" alt="bugger icon" />
    <a href="/">
      <img src="/icons/Rumble.svg" loading="eager" alt="rumble logo" />
    </a>
  </div>
  <form
    class="hidden md:flex bg-[#1F2E3C] focus-within:border focus-within:border-[#D6E0EA] w-[40%] text-sm items-center px-3 rounded-xl"
  >
    <input
      type="text"
      placeholder="Search"
      class="  md:block flex-1 bg-transparent outline-none"
    />
    <button class="p-2 w-[35px] h-[35px]">
      <img src="/icons/rumbleSearch.svg" loading="eager" alt="search-icon" />
    </button>
  </form>

  <div class="flex items-center gap-[14px]">
    <button class=" md:hidden p-2 w-[35px] h-[35px]">
      <img src="/icons/rumbleSearch.svg" loading="eager" alt="search-icon" />
    </button>
    <button class="btn"> sign in </button>
    <button class="btn btn__outlined"> sign up </button>
  </div>
</header>
