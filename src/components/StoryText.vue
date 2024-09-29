<template>
  <div class="story-text">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'StoryText',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.story-text {
  margin-bottom: 20px;
  line-height: 1.6;
  text-align: left;
}
</style>