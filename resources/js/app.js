import { createApp } from 'vue/dist/vue.esm-bundler.js';

import SomeComponent from './components/SomeComponent.vue'

const app = createApp({});

app
    .component('SomeComponent', SomeComponent)

app.mount("#app");
