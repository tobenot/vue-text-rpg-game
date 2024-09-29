import { createStore } from 'vuex'
import Vue from 'vue'
import { ITEMS } from './items'

const gameScenes = {
  start: {
    text: '你醒来发现自己在一个神秘的森林里。四周都是高大的树木，你不知道自己是如何来到这里的。',
    choices: [
      { text: '向北走', nextScene: 'north' },
      { text: '向南走', nextScene: 'south' },
      { text: '仔细观察周围', nextScene: 'observe' }
    ]
  },
  observe: {
    text: '仔细观察后，你注意到树上有一些奇怪的标记，似乎指向东方。',
    choices: [
      { text: '跟随标记向东走', nextScene: 'east' },
      { text: '忽略标记，向北走', nextScene: 'north' },
      { text: '忽略标记，向南走', nextScene: 'south' }
    ]
  },
  north: {
    text: '你向北走，发现了一个古老的石头祭坛。祭坛上刻着奇怪的符号。',
    choices: [
      { text: '研究符号', nextScene: 'studySymbols' },
      { text: '触摸祭坛', nextScene: 'touchAltar' },
      { text: '返回', nextScene: 'start' }
    ]
  },
  studySymbols: {
    text: '你仔细研究符号，发现它们描述了一个古老的仪式，需要一把神秘钥匙才能激活祭坛。',
    choices: [
      { text: '记住信息并离开', nextScene: 'start' },
      { text: '尝试在没有钥匙的情况下激活祭坛', nextScene: 'failedRitual' }
    ]
  },
  touchAltar: {
    text: '你触摸祭坛，但什么也没有发生。也许需要某种特殊的物品来激活它。',
    choices: [
      { text: '使用神秘钥匙', nextScene: 'activateAltar', requiredItem: ITEMS.MYSTERY_KEY },
      { text: '离开祭坛', nextScene: 'north' }
    ]
  },
  failedRitual: {
    text: '你尝试激活祭坛，但没有成功。看来确实需要那把神秘钥匙。',
    choices: [
      { text: '离开祭坛', nextScene: 'north' }
    ]
  },
  south: {
    text: '你向南走，来到了一条湍急的小溪边。溪水清澈见底，你看到水中有什么东西在闪光。',
    choices: [
      { text: '尝试捞取闪光物', nextScene: 'reachShinyObject' },
      { text: '顺着溪流走', nextScene: 'followStream' },
      { text: '返回', nextScene: 'start' }
    ]
  },
  reachShinyObject: {
    text: '你小心翼翼地伸手入水，捞起了一个闪闪发光的物体。这是一把造型奇特的钥匙！',
    choices: [
      { text: '收起钥匙并返回', nextScene: 'south' }
    ]
  },
  followStream: {
    text: '你顺着溪流走，发现了一个隐蔽的山洞入口。',
    choices: [
      { text: '进入山洞', nextScene: 'cave' },
      { text: '返回溪边', nextScene: 'south' }
    ]
  },
  cave: {
    text: '山洞内漆黑一片，你需要光源才能继续探索。',
    choices: [
      { text: '摸黑前进', nextScene: 'darkCave' },
      { text: '使用油灯', nextScene: 'litCave', requiredItem: ITEMS.LAMP },
      { text: '返回洞口', nextScene: 'followStream' }
    ]
  },
  darkCave: {
    text: '你在黑暗中跌跌撞撞，不小心摔倒了。你决定这太危险了，应该先找到光源。',
    choices: [
      { text: '离开山洞', nextScene: 'followStream' }
    ]
  },
  litCave: {
    text: '你点亮了油灯，山洞内部逐渐变得清晰可见。你发现洞壁上有一些古老的壁画，似乎在讲述一个神秘的故事。',
    choices: [
      { text: '仔细观察壁画', nextScene: 'examinePaintings' },
      { text: '继续深入洞穴', nextScene: 'deeperCave' },
      { text: '离开山洞', nextScene: 'followStream' }
    ]
  },
  examinePaintings: {
    text: '壁画描绘了一个古老的仪式，似乎与森林中的某个神秘祭坛有关。你觉得这可能是解开森林之谜的关键。',
    choices: [
      { text: '记住信息并继续探索', nextScene: 'deeperCave' },
      { text: '离开山洞', nextScene: 'followStream' }
    ]
  },
  deeperCave: {
    text: '你深入洞穴，发现了一个地下湖。湖水清澈见底，你似乎看到湖底有什么东西在闪光。',
    choices: [
      { text: '尝试潜水', nextScene: 'diveLake' },
      { text: '沿着湖边继续探索', nextScene: 'lakeSide' },
      { text: '返回洞口', nextScene: 'cave' }
    ]
  },
  east: {
    text: '你向东走，来到一片空地。这里有一棵巨大的古树，树干上有一个洞。',
    choices: [
      { text: '查看树洞', nextScene: 'treeHole' },
      { text: '爬上古树', nextScene: 'climbTree' },
      { text: '返回森林', nextScene: 'start' }
    ]
  },
  treeHole: {
    text: '你查看树洞，发现里面有一个古老的油灯。',
    choices: [
      { text: '拿取油灯', nextScene: 'getLamp' },
      { text: '离开树洞', nextScene: 'east' }
    ]
  },
  getLamp: {
    text: '你拿到了油灯。这可能会在黑暗的地方派上用场。',
    choices: [
      { text: '返回空地', nextScene: 'east' }
    ]
  },
  climbTree: {
    text: '你爬上古树，从高处俯瞰整个森林。你注意到北边有一个石头建筑，南边有一条溪流，东边树林更加茂密。',
    choices: [
      { text: '下树', nextScene: 'east' }
    ]
  },
  // 假设玩家已经获得了钥匙和油灯
  activateAltar: {
    text: '你用神秘钥匙激活了祭坛。一道光芒闪过，祭坛移开，露出一个地下通道。',
    choices: [
      { text: '进入通道', nextScene: 'undergroundPassage' },
      { text: '离开祭坛', nextScene: 'north' }
    ]
  },
  undergroundPassage: {
    text: '你进入黑暗的地下通道。幸好你有油灯照明。通道尽头有一扇巨大的石门。',
    choices: [
      { text: '推开石门', nextScene: 'finalChamber' },
      { text: '返回地面', nextScene: 'north' }
    ]
  },
  finalChamber: {
    text: '你进入一个宏伟的地下宫殿。在中央的台座上，放着一颗闪耀的宝石。这就是传说中的森林之心！',
    choices: [
      { text: '拿起森林之心', nextScene: 'ending' }
    ]
  },
  ending: {
    text: '当你拿起森林之心时，整个宫殿开始震动。一道光柱笼罩着你，你感觉自己正在被传送。眨眼间，你发现自己回到了森林边缘，手中紧握着森林之心。你成功完成了冒险！',
    choices: [
      { text: '重新开始', nextScene: 'start' }
    ]
  },
  diveLake: {
    text: '你深吸一口气，潜入湖中。在湖底，你发现了一个古老的宝箱，但它被锁住了。',
    choices: [
      { text: '使用神秘钥匙开启宝箱', nextScene: 'openTreasure', requiredItem: ITEMS.MYSTERY_KEY },
      { text: '浮出水面', nextScene: 'deeperCave' }
    ]
  },
  openTreasure: {
    text: '你用神秘钥匙打开了宝箱，里面有一张古老的地图，指向森林深处的一个神秘地点。',
    choices: [
      { text: '收起地图并返回', nextScene: 'deeperCave' }
    ]
  },
  lakeSide: {
    text: '你沿着湖边走，发现了一个隐蔽的通道，似乎通向地面。',
    choices: [
      { text: '进入通道', nextScene: 'hiddenExit' },
      { text: '返回深洞', nextScene: 'deeperCave' }
    ]
  },
  hiddenExit: {
    text: '通道将你带到了森林的另一端，你发现自己站在一座小山丘上，可以俯瞰整个森林。',
    choices: [
      { text: '下山返回森林', nextScene: 'start' },
      { text: '仔细观察周围', nextScene: 'observeFromHill' }
    ]
  },
  observeFromHill: {
    text: '从山丘上，你注意到森林中央有一个奇怪的图案。这似乎与你在山洞中看到的壁画有关。',
    choices: [
      { text: '下山调查中央图案', nextScene: 'centralPattern' },
      { text: '返回森林', nextScene: 'start' }
    ]
  },
  centralPattern: {
    text: '你来到森林中央，发现地面上有一个巨大的石制图案。图案中心有一个凹槽，似乎可以放入什么东西。',
    choices: [
      { text: '放入森林之心', nextScene: 'activatePattern', requiredItem: ITEMS.FOREST_HEART },
      { text: '继续探索森林', nextScene: 'start' }
    ]
  },
  activatePattern: {
    text: '你将森林之心放入凹槽，整个图案开始发光。一道光柱冲天而起，森林开始焕发出新的生机。你成功地唤醒了沉睡的森林之灵！',
    choices: [
      { text: '与森林之灵交流', nextScene: 'talkToSpirit' },
      { text: '离开森林', nextScene: 'leaveForest' }
    ]
  },
  talkToSpirit: {
    text: '森林之灵感谢你的帮助，并赐予你守护森林的能力。你现在可以选择留下来保护森林，或带着新获得的智慧离开。',
    choices: [
      { text: '留下守护森林', nextScene: 'stayInForest' },
      { text: '带着智慧离开', nextScene: 'leaveWithWisdom' }
    ]
  },
  stayInForest: {
    text: '你决定留下来守护森林。多年后，你成为了一位受人尊敬的森林贤者，继续守护着这片神奇的土地。',
    choices: [
      { text: '重新开始冒险', nextScene: 'start' }
    ]
  },
  leaveWithWisdom: {
    text: '你带着从森林中获得的智慧离开。你的经历让你对世界有了新的认识，你决定将这些知识分享给他人。',
    choices: [
      { text: '重新开始冒险', nextScene: 'start' }
    ]
  },
  leaveForest: {
    text: '你决定离开森林，带着这次奇妙冒险的回忆。你知道，无论何时你都可以回到这片神奇的土地。',
    choices: [
      { text: '重新开始冒险', nextScene: 'start' }
    ]
  }
}

const store = createStore({
  state: {
    currentScene: 'start',
    inventory: {},
    gameState: {
      playerHealth: 100
    }
  },
  mutations: {
    SET_SCENE(state, sceneName) {
      state.currentScene = sceneName
    },
    ADD_TO_INVENTORY(state, item) {
      state.inventory[item] = true
    },
    REMOVE_FROM_INVENTORY(state, item) {
      Vue.delete(state.inventory, item)
    },
    UPDATE_GAME_STATE(state, newState) {
      state.gameState = { ...state.gameState, ...newState }
    }
  },
  actions: {
    makeChoice({ commit, state, getters }, choiceIndex) {
      const currentScene = gameScenes[state.currentScene]
      const choice = currentScene.choices[choiceIndex]
      
      // 检查是否需要特定物品
      if (choice.requiredItem && !state.inventory[choice.requiredItem]) {
        // 如果需要物品但玩家没有，不执行选择
        return
      }
      
      // 处理特殊情况
      if (choice.nextScene === 'reachShinyObject') {
        commit('ADD_TO_INVENTORY', ITEMS.MYSTERY_KEY)
      } else if (choice.nextScene === 'getLamp') {
        commit('ADD_TO_INVENTORY', ITEMS.LAMP)
      }
      
      // 设置下一个场景
      commit('SET_SCENE', choice.nextScene)
    }
  },
  getters: {
    currentStory(state) {
      return gameScenes[state.currentScene].text
    },
    currentChoices(state) {
      return gameScenes[state.currentScene].choices
        .filter(choice => !choice.requiredItem || state.inventory[choice.requiredItem])
        .map(choice => choice.text)
    },
    hasItem: (state) => (item) => {
      return !!state.inventory[item]
    },
    inventoryItems(state) {
      return Object.keys(state.inventory).filter(item => state.inventory[item])
    }
  }
})

export default store