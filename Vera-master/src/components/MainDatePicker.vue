<template>
  <div class="main-date-picker">
    <div class="block">
      <span class="demonstration">Data</span>
      <el-date-picker 
        v-model="selectedDate"         
        type="date" 
        placeholder="Pick a day" 
        :size="size" 
        @change = "onSelectedDateChanged"/>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';

const size = ref<'default' | 'large' | 'small'>('large')
const selectedDate = ref(null)

const emit = defineEmits(['change-date'])

function onSelectedDateChanged() {
  emit('change-date', selectedDate.value)
}


</script>
  
<style scoped>
.date-button {
  width: 100px;
  border-color: aquamarine;
}

.main-date-picker {
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
  display: flex;
}

.main-date-picker .block {
  padding-bottom: 150px;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.main-date-picker .block:last-child {
  border-right: none;
}

.main-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>