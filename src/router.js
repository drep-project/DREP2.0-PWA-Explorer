import Vue from 'vue';
import VueRouter from "vue-router";
import Home from './views/Home.vue';
import NotFound from "./views/NotFound.vue";
import DataTablePlayground from "./views/DataTablePlayground.vue";
import Transactions from "./views/Transactions.vue";
import TransactionDetail from "./views/TransactionDetail.vue";

Vue.use(VueRouter);

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'transactions',
        path: '/transactions',
        component: Transactions
    },
    {
        name: 'transaction-detail',
        path: '/tx/:id',
        component: TransactionDetail
    },
    {
        name: 'data-table-playground',
        path: '/data-table-playground',
        component: DataTablePlayground
    },
    {
        name: 'not-found',
        path: '*',
        component: NotFound
    }
];

export const router = new VueRouter({
    routes
    // mode: 'history'
});
