<template>
  <div>
    <button @click="isDarkMode = !isDarkMode">
      {{ isDarkMode ? "Dark" : "Light" }} Mode
    </button>

    <SDiv animated rounded :theme="isDarkMode ? 'dark' : 'light'" top="10px">
      <SWrap repeat="3">
        <SBlock repeat="4">
          <S height="200px" />
          <SWrap>
            <S height="75px" width="75px" circle />
            <SBlock gap="10px">
              <S height="25px" width="40%" />
              <S height="25px" width="60%" />
            </SBlock>
          </SWrap>
        </SBlock>
      </SWrap>

      <SDiv top="50px" repeat="3">
        <S repeat="4" />
        <S repeat="4" top="10px" width="50%" />
      </SDiv>
    </SDiv>
  </div>
</template>

<script setup lang="ts">
const isDarkMode = ref(true);

const head = computed(() => {
  return {
    title: "Skeleton",
    meta: [
      {
        name: "description",
        content: "Skeleton loading animation.",
      },
    ],
    bodyAttrs: {
      class: isDarkMode.value ? "dark" : "light",
    },
  };
});

useHead(head);
</script>

<style>
body.dark {
  background-color: #0b151e;
  color: #162c40;
}

body.light {
  background-color: #f0f0f0;
  color: #c1c1c1;
}
</style>
