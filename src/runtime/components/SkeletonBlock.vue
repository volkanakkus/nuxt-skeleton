<template>
  <SkeletonBase direction="vertical" :align="align" v-bind="$attrs">
    <slot />
  </SkeletonBase>
</template>

<script setup lang="ts">
import type { PropType } from "#imports";
import type { Align } from "../types";

defineProps({
  align: {
    type: String as PropType<Align>,
    default: "start",
  },
});
</script>
