<template>
  <div class="root">
    <div class="content">
      <HeaderComponent />
      <router-view></router-view>
      <FooterComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>
<style scoped>
.root {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.content {
  margin: 0 auto;
  width: 80vw;
  display: flex;
  flex-direction: column;
}
</style>
