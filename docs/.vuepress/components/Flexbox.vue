<script setup>
import { computed } from "vue";
const props = defineProps({
  justify: {
    type: String,
    default: "center",
  },
  align: {
    type: String,
    default: "center",
  },
  wrap: {
    type: String,
    default: "no-wrap",
  },
  gap: {
    type: String,
    default: "5px",
  },
});

const styleComputed = computed(() => {
  return {
    "justify-content": props.justify,
    "align-items": props.align,
    "flex-wrap": props.wrap,
    gap: props.gap,
  };
});
</script>

<template>
  <div class="flexbox" :style="styleComputed" @click.stop="() => {}">
    <slot />
  </div>
</template>

<style>
.flexbox {
  display: flex;
  padding: 0rem 0;
}

.flexbox p {
  margin: 0;
}

.flexbox img {
  max-height: 30vh;
}
</style>
