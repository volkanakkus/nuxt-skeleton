<template>
  <div
    class="skeleton"
    :class="[
      {
        'skeleton--animated': animated,
        'skeleton--rounded': rounded,
        'skeleton--circle': circle,
      },
      animated ? `skeleton--${animationName}` : '',
    ]"
    :style="{
      margin: `${top} ${right} ${bottom} ${left}`,
      width: width === '100%' ? width : 'auto',
      animationDuration: animated ? animationDuration : 'inherit',
      borderRadius: rounded ? radius : 'inherit',
    }"
  >
    <div
      v-for="i in Number(repeat)"
      :key="i"
      :style="{
        width,
        height,
        marginBottom: gap,
      }"
      class="skeleton__item"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "#imports";

type animation = "linear" | "boomerang" | "pulse";

defineProps({
  animated: {
    type: Boolean,
    default: false,
  },
  animationName: {
    type: String as PropType<animation>,
    default: "linear",
  },
  animationDuration: {
    type: String,
    default: "3s",
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  circle: {
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
    default: "35px",
  },
  repeat: {
    type: String,
    default: "1",
  },
  gap: {
    type: String,
    default: "10px",
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
});
</script>

<style>
.skeleton {
  width: 100%;
}

.skeleton--animated .skeleton__item {
  animation-iteration-count: infinite;
  animation-duration: inherit;
  background: linear-gradient(90deg, #f0f0f0 25%, #d8d8d8 50%, #f0f0f0 75%);
  background-size: 200% 100%;
}

.skeleton--linear .skeleton__item {
  animation-name: skeleton-linear;
}

.skeleton--boomerang .skeleton__item {
  animation-name: skeleton-boomerang;
}

.skeleton--pulse .skeleton__item {
  animation-name: skeleton-pulse;
  background: #d8d8d8;
}

.skeleton--circle .skeleton__item {
  border-radius: 50% !important;
}

.skeleton__item {
  background-color: #f0f0f0;
  border-radius: inherit;
}

.skeleton__item:last-child {
  margin-bottom: 0 !important;
}

@keyframes skeleton-linear {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@keyframes skeleton-boomerang {
  0% {
    background-position: 200% 0;
  }
  50% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

@keyframes skeleton-pulse {
  0% {
    opacity: 1;
  }
  35% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  85% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
</style>
