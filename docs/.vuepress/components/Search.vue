<script setup>
import { onMounted } from 'vue';
import docsearch from '@docsearch/js';

onMounted(() => {
    console.log('in Search Mounted', document.querySelector('#docsearch'));
    if (!document.querySelector('#docsearch')) {
        const div = document.createElement('div');
        div.setAttribute('id', 'docsearch');
        document.querySelector('.navbar-items-wrapper').appendChild(div);
        console.log('docsearch', docsearch);
        docsearch({
            appId: 'D2C64YEBJG',
            apiKey: 'afd0c697502993ff7dc830428cb1169e',
            indexName: 'jason-lian',
            container: '#docsearch',
            debug: false,
        });
    }
});
</script>

<template></template>

<style>
@import url('https://cdn.jsdelivr.net/npm/@docsearch/css@3');
</style>
