<script setup>
import { computed } from "vue";
import { useScreenOrientation } from "@vueuse/core";
import { gameTypeConfig } from "@/domain/scoring/game_types";
import RoundScoresLandscape from "@/components/RoundScoresLandscape.vue";
import RoundScoresPortrait from "@/components/RoundScoresPortrait.vue";
import { X } from "@/domain/scoring/game_type_config";

const props = defineProps({
  scores: {
    required: true
  },
  gameType: {
    required: true
  },
  endSize: {
    required: true
  },
  hasX: {
    default: false
  },
  forceLandscape: {
    default: false
  },
  userProfile: {
    type: Object,
    default: null
  }
});
const {
  orientation
} = useScreenOrientation();
const validScores = computed(() => gameTypeConfig[props.gameType].scores);

</script>
<template>
  <RoundScoresLandscape
    v-if="forceLandscape || orientation==='landscape-primary'"
    :scores="scores"
    :end-size="endSize"
    :hasX="validScores.includes(X)"
    :game-type="gameType" :user-profile="userProfile"
  />
  <RoundScoresPortrait
    v-else
    :scores="scores"
    :game-type="gameType"
    :endSize="endSize"
    :hasX="validScores.includes(X)"
    :user-profile="userProfile"
  />
</template>
