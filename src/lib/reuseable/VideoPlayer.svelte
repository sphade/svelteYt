<script lang="ts">
  import { onMount } from "svelte";

  let videoElement: HTMLVideoElement;
  let progress: HTMLProgressElement;
  $: paused = true;

  //   onMount
  // videoElement.controls = false;
  const playPause = () => {
     
    console.log(paused);
    console.log(videoElement.paused)
    if (videoElement.paused || videoElement.ended) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };
  const toggleMuted = () => {
    videoElement.muted = !videoElement.muted;
  };
  function alterVolume(dir: string) {
    const currentVolume = Math.floor(videoElement.volume * 10) / 10;
    if (dir === "+" && currentVolume < 1) {
      videoElement.volume += 0.1;
    } else if (dir === "-" && currentVolume > 0) {
      videoElement.volume -= 0.1;
    }
  }
</script>

<figure>
  <video
    class="h-[545px] w-full"
    bind:this={videoElement}
    controls={false}
    src="/images/hood.mp4"
    preload="metadata"
    on:loadedmetadata={() => {
      // progress.setAttribute("max", videoElement.duration);
    }}
    bind:paused
  >
    <track kind="captions" src="" label="english" srclang="en" default />
  </video>
  <ul class="controls">
    <li>
      <button type="button" on:click={playPause}>Play/Pause</button>
    </li>
    <li><button type="button">Stop</button></li>
    <li class="progress">
      <progress id="file" max="100" value="70"> 70% </progress>
      lawal
      <input type="range" />
    </li>
    <li><button type="button">Mute/Unmute</button></li>
    <li>
      <button on:click={() => alterVolume("+")} type="button">Vol+</button>
    </li>
    <li>
      <button on:click={() => alterVolume("-")} type="button">Vol-</button>
    </li>
    <li><button type="button">Fullscreen</button></li>
  </ul>
</figure>
