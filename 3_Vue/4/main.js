const router = new VueRouter({
    routes: [
        { path: '/', component: httpVueLoader('./index.vue')},
        { path: '/next', component: httpVueLoader('./next.vue')},
    ]
});

const app = new Vue({
    el: '#app',
    router
});
