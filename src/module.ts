import { defineNuxtModule, addComponent, createResolver } from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {
  prefix?: string;
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
    prefix: "",
  },
  setup(options) {
    const { resolve } = createResolver(import.meta.url);

    addComponent({
      name: `${options.prefix}Skeleton`,
      global: true,
      filePath: resolve("./runtime/Skeleton.vue"),
    });
  },
});
