<template>
  <div class="full-width full-height flex-col">
    <div class="full-width flex-col">
      <div class="full-width logo-text">Web Magnat</div>      
      <div class="full-width" style="text-align: center;">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/statistics">Statistics</router-link>
      </div>
    </div>
    <div class="full-height container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
.container { 
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-text {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-weight: bold;
  font-size: 24pt;
}
</style>
