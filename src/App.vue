<template>
  <VirtualList
    :items="items" 
    :item-size="50" 
    class="virtual-list"  
  >
    <template #default="{ item }">
      <div class="item">{{ item }}123</div>
    </template>
  </VirtualList>
</template>

<script setup>
import { ref } from 'vue';

const items = ref(Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`));
</script>

<style>
.virtual-list {
  height: 500px;
  overflow-y: auto;
}

.item {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ddd;
}
</style>
