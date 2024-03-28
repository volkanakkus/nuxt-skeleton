<template>
  <div
    class="skeleton"
    :class="[
      {
        'skeleton--animated': animated,
        'skeleton--rounded': rounded,
        'skeleton--circle': circle,
      },
      `skeleton--${theme}`,
      animated ? `skeleton--${animation}` : '',
    ]"
    :style="{
      width,
      margin: `${top} ${right} ${bottom} ${left}`,
      animationDuration: animated ? animationDuration : 'inherit',
      borderRadius: rounded ? radius : 'inherit',
    }"
  >
    <div
      v-for="i in Number(repeat)"
      :key="i"
      :style="{
        width: !width.includes('%') ? width : '100%',
        height,
        marginBottom: gap,
        background: color,
      }"
      class="skeleton__item"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "#imports";
import type { Theme, Animation } from "../types";

defineProps({
  color: {
    type: String,
    default: "currentColor",
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
  position: relative;
  overflow: hidden;
  animation-duration: inherit;
}

.skeleton--animated .skeleton__item::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  animation-iteration-count: infinite;
  animation-duration: inherit;
  opacity: 0.8;
}

.skeleton--light .skeleton--animated .skeleton__item::before,
.skeleton--light.skeleton--animated .skeleton__item::before {
  background: linear-gradient(
    90deg,
    #f0f0f05c 25%,
    #ffffffa6 50%,
    #f0f0f05c 75%
  );
  background-size: 200% 100%;
}

.skeleton--dark .skeleton--animated .skeleton__item::before,
.skeleton--dark.skeleton--animated .skeleton__item::before {
  background: linear-gradient(
    90deg,
    #1717175c 25%,
    #0000005e 50%,
    #1717175c 75%
  );
  background-size: 200% 100%;
}

.skeleton--linear .skeleton__item::before {
  animation-name: skeleton-linear;
}

.skeleton--boomerang .skeleton__item::before {
  animation-name: skeleton-boomerang;
}

.skeleton--light .skeleton--pulse .skeleton__item::before,
.skeleton--light.skeleton--pulse .skeleton__item::before {
  background: #ffffffa6;
}

.skeleton--dark .skeleton--pulse .skeleton__item::before,
.skeleton--dark.skeleton--pulse .skeleton__item::before {
  background: #00000059;
}

.skeleton--pulse .skeleton__item::before {
  animation-name: skeleton-pulse;
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
