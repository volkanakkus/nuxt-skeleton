export default defineNuxtConfig({
  modules: ["../src/module"],
  skeleton: {
    components: {
      SkeletonDiv: "SDiv",
      SkeletonBlock: "SBlock",
      SkeletonWrap: "SWrap",
      Skeleton: "S",
    },
  },
  devtools: { enabled: true },
});
