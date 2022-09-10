<script lang='ts'>

import Textfield from './lib/textfield.svelte';
import Buttons from './lib/buttons.svelte';
import OtherStopwatchTandb from './lib/OtherStopwatchTANDB.svelte';

</script>

<title>Yifan's Stopwatch</title>

<div class="body">
  <!-- <Textfield/>
  <Buttons/> -->
  <OtherStopwatchTandb/>
</div>


<style>



.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  width: 100vw;
  background-color: #33292956;
  border-radius: 5px;

}

</style>