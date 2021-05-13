const router = new VueRouter({
    routes: [
        { path: '/', component: httpVueLoader('./index.vue')}
    ]
});

const app = new Vue({
    el: '#app',
    router
});
