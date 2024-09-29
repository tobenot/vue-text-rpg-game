<template>
  <div class="game-container">
    <StoryText :text="currentStory" />
    <ChoiceList :choices="currentChoices" @select="handleChoice" />
    <Inventory />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import StoryText from './StoryText.vue'
import ChoiceList from './ChoiceList.vue'
import Inventory from './Inventory.vue'

export default {
  name: 'GameContainer',
  components: {
    StoryText,
    ChoiceList,
    Inventory
  },
  computed: {
    ...mapGetters(['currentStory', 'currentChoices'])
  },
  methods: {
    ...mapActions(['makeChoice']),
    handleChoice(choiceIndex) {
      this.makeChoice(choiceIndex)
    }
  }
}
</script>

<style scoped>
.game-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>