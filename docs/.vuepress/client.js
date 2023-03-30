import { defineClientConfig } from '@vuepress/client';
import { onMounted } from 'vue';
import docsearch from '@docsearch/js';

export default defineClientConfig({
    setup() {
        onMounted(() => {
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
    },
});
