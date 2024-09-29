<template>
  <div class="inventory">
    <h3>物品栏</h3>
    <ul>
      <li v-for="item in inventoryItems" :key="item">{{ getItemName(item) }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ITEMS } from '@/store/items'

export default {
  name: 'Inventory',
  computed: {
    ...mapGetters(['inventoryItems'])
  },
  methods: {
    getItemName(item) {
      const itemNames = {
        [ITEMS.MYSTERY_KEY]: '神秘钥匙',
        [ITEMS.LAMP]: '油灯'
      }
      return itemNames[item] || item
    }
  }
}
</script>

<style scoped>
.inventory {
  margin-top: 20px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}
</style>