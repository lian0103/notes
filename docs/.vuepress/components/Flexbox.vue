<script setup>
import { computed } from 'vue';
const props = defineProps({
    justify: {
        type: String,
        default: 'center',
    },
    align: {
        type: String,
        default: 'center',
    },
    wrap: {
        type: String,
        default: 'no-wrap',
    },
});

const styleComputed = computed(() => {
    return {
        'justify-content': props.justify,
        'align-items': props.align,
        gap: '5px',
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
    flex-wrap: wrap;
    padding: .5rem 0;
}

</style>
