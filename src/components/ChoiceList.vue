<template>
  <div class="choice-list">
    <button
      v-for="(choice, index) in choices"
      :key="index"
      @click="$emit('select', index)"
      class="choice-button"
    >
      {{ choice }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ChoiceList',
  props: {
    choices: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.choice-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.choice-button {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.choice-button:hover {
  background-color: #45a049;
}
</style>