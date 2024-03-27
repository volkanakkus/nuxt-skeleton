import { defineNuxtModule, addComponent, createResolver } from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {
  components?: {
    Skeleton?: string;
    SkeletonBlock?: string;
    SkeletonWrap?: string;
    SkeletonDiv?: string;
  };
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-skeleton",
    configKey: "skeleton",
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  defaults: {
    components: {
      Skeleton: "Skeleton",
      SkeletonBlock: "SkeletonBlock",
      SkeletonWrap: "SkeletonWrap",
      SkeletonDiv: "SkeletonDiv",
    },
  },
  setup(options) {
    const { resolve } = createResolver(import.meta.url);

    addComponent({
      name: "SkeletonBase",
      global: true,
      filePath: resolve("./runtime/SkeletonBase.vue"),
    });

    addComponent({
      name: `${options.components?.Skeleton || "Skeleton"}`,
      global: true,
      filePath: resolve("./runtime/Skeleton.vue"),
    });

    addComponent({
      name: `${options.components?.SkeletonBlock || "SkeletonBlock"}`,
      global: true,
      filePath: resolve("./runtime/SkeletonBlock.vue"),
    });

    addComponent({
      name: `${options.components?.SkeletonWrap || "SkeletonWrap"}`,
      global: true,
      filePath: resolve("./runtime/SkeletonWrap.vue"),
    });

    addComponent({
      name: `${options.components?.SkeletonDiv || "SkeletonDiv"}`,
      global: true,
      filePath: resolve("./runtime/SkeletonDiv.vue"),
    });
  },
});
