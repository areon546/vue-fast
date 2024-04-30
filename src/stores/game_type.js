import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import {gameTypeConfig, gameTypes} from '@/domain/game_types'
import { computed } from "vue";


export const useGameTypeStore = defineStore('gameType', () => {
  const type = useLocalStorage('game', gameTypes[0])

  function setGameType(value) {
    type.value = value
  }

  const currentRound = computed(() => {
    return gameTypeConfig[type.value]
  })

  return {
    type,
    setGameType,
    currentRound
  }
})
