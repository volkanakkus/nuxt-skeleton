<template>
  <div
    class="skeleton-wrapper"
    :class="{
      'skeleton--keep': keep,
    }"
    :style="{
      gap,
      borderRadius: rounded ? radius : 'inherit',
      animationDuration: animated ? speed : 'inherit',
      flexDirection: direction === 'vertical' ? 'column' : 'row',
      alignItems: alignItems[align],
    }"
  >
    <div
      v-for="i in Number(repeat)"
      :key="i"
      class="skeleton-wrapper-item"
      :class="[
        {
          'skeleton--animated': animated,
          'skeleton--rounded': rounded,
          'skeleton--keep': keep,
        },
        `skeleton--${theme}`,
        animated ? `skeleton--${animation}` : '',
      ]"
      :style="{
        width,
        height,
        gap,
        margin: `${top} ${right} ${bottom} ${left}`,
        borderRadius: rounded ? radius : 'inherit',
        animationDuration: animated ? speed : 'inherit',
        flexDirection: direction === 'vertical' ? 'column' : 'row',
        alignItems: alignItems[align],
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "#imports";

type Animation = "linear" | "boomerang" | "pulse";
type Align = "start" | "center" | "end";
type Direction = "vertical" | "horizontal";
type Theme = "dark" | "light";

const alignItems = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
};

defineProps({
  keep: {
    type: Boolean,
    default: false,
  },
  align: {
    type: String as PropType<Align>,
    default: "center",
  },
  direction: {
    type: String as PropType<Direction>,
    default: "horizontal",
  },
  repeat: {
    type: String,
    default: "1",
  },
  theme: {
    type: String as PropType<Theme>,
    default: "light",
  },
  animated: {
    type: Boolean,
    default: false,
  },
  animation: {
    type: String as PropType<Animation>,
    default: "linear",
  },
  speed: {
    type: String,
    default: "3s",
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  radius: {
    type: String,
    default: "4px",
  },
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "100%",
  },
  top: {
    type: String,
    default: "0",
  },
  left: {
    type: String,
    default: "0",
  },
  bottom: {
    type: String,
    default: "0",
  },
  right: {
    type: String,
    default: "0",
  },
  gap: {
    type: String,
    default: "20px",
  },
});
</script>

<style>
.skeleton-wrapper,
.skeleton-wrapper-item {
  display: flex;
  width: 100%;
}

.skeleton-wrapper.skeleton--keep,
.skeleton-wrapper-item.skeleton--keep {
  display: block !important;
}
</style>
