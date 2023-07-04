<script lang="ts">
  let videoElement: HTMLVideoElement;
  let currentTime = 0;
  let paused = true;
  let duration: number;
  let muted: boolean;
  let ended: boolean;
  let videoContainer: HTMLDivElement;
  let progressWidth = 0;
  let volume = 1;

  function format(seconds: number): string {
    if (isNaN(seconds)) return "...";

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds / 60);
    const formattedSeconds = Math.floor(seconds % 60);

    if (hours >= 1) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${formattedSeconds
        .toString()
        .padStart(2, "0")}`;
    } else if (minutes >= 1) {
      return `${minutes}:${formattedSeconds.toString().padStart(2, "0")}`;
    } else {
      return `${Math.floor(minutes)}:${formattedSeconds
        .toString()
        .padStart(2, "0")}`;
    }
  }

  const playPause = () => {
    if (paused || ended) {
      paused = false;
    } else {
      paused = true;
    }
  };
  const toggleMute = () => {
    muted = !muted;
  };
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      videoContainer.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  function handleProgress(this: HTMLProgressElement, e: MouseEvent) {
    const rect = this.getBoundingClientRect();
    const pos = (e.pageX - rect.left) / this.offsetWidth;
    currentTime = pos * duration;
  }
</script>

<div class="relative w-[900px] shadow-lg h-[545px]" bind:this={videoContainer}>
  <video
    class=" w-full h-full relative object-contain"
    bind:ended
    bind:this={videoElement}
    bind:volume
    bind:currentTime
    controls={false}
    src="/images/nam.mkv"
    poster="images/poster.jpeg"
    preload="metadata"
    bind:paused
    bind:muted
    bind:duration
    on:click={playPause}
  >
    <track kind="captions" src="" label="english" srclang="en" default />
  </video>
  <div
    class="flex px-3 py-2 justify-between gap-3 items-center w-full bg-[#1818188c] backdrop-blur-sm absolute bottom-0 left-0"
  >
    <button type="button" on:click={playPause}>
      {#if paused}
        <img src="/icons/play.svg" alt="" />
      {:else}
        <img src="/icons/pause.svg" alt="" />
      {/if}
    </button>

    <button
      class="flex-1"
      on:click={handleProgress}
      bind:clientWidth={progressWidth}
    >
      <div
        class="border-b border-white overflow-hidden border-opacity-35 h-[10px] rounded-lg bg-[#0000004d] w-auto"
      >
        <div
          style="width: {(currentTime / duration) * progressWidth || 0}px"
          class="bg-brand transition h-full rounded-lg"
        />
      </div>
    </button>
    <div class="text-xs flex items-center">
      <p>
        {format(currentTime)}
      </p>
      /
      <p>
        {format(duration)}
      </p>
    </div>
    <div class="w-fit relative group">
      <div
        class=" hidden absolute pl-1 -top-20 -left-[55px] -rotate-90 group-hover:block"
      >
        <input
          type="range"
          class="accent-brand"
          bind:value={volume}
          step="0.1"
          min={"0"}
          max={"1"}
        />
        <!-- <h1 class='text-orange-700 text-2xl  ' >lawal</h1> -->
      </div>
      <button on:click={toggleMute} class="">
        {#if muted}
          <img src="/icons/mute.svg" alt="" />
        {:else}
          <img src="/icons/volume.svg" alt="" />
        {/if}
      </button>
    </div>
    <img src="/icons/v-settings.svg" alt="" />

    <button
      type="button"
      on:click={() => videoElement.requestPictureInPicture()}
      ><img src="/icons/pip-mode.svg" alt="" /></button
    >
    <img src="/icons/t-mode.svg" alt="" />
    <button type="button" on:click={toggleFullScreen}
      ><img src="/icons/fullscreen.svg" alt="" /></button
    >
    <img src="/icons/rumble-v.svg" alt="" />
  </div>
</div>
