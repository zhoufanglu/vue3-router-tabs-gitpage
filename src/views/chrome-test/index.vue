<script setup lang="ts">
  const handleClick = () => {
    console.log('handle click')
  }
</script>
<template>
  <div class="chrome-test">
    <iframe src="https://www.baidu.com/"></iframe>
    <div class="click-panel" @click="handleClick">
      click me <br />
      look at console
    </div>
  </div>
</template>

<style scoped lang="scss">
  .chrome-test {
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    border: solid 1px red;
    iframe {
      position: relative;
      top: 0;
      width: 100%;
      height: 100%;
    }
    .click-panel {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 200px;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      font-size: 40px;
      padding: 20px;
    }
  }
</style>
