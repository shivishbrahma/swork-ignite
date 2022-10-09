<style lang="scss">
.container {
    padding: 0;
    flex-direction: column;
    display: flex;
    height: 100vh;
    width: 100%;
}
</style>

<template>
    <div class="container" :class="darkMode ? 'dark' : 'light'">
        <sw-header />
        <sw-main>
            <sw-form-login></sw-form-login>
        </sw-main>
        <sw-footer />
    </div>
</template>

<script>
import { mapState } from 'vuex';

import SWHeader from './partials/SWHeader/SWHeader';
import SWFooter from './partials/SWFooter/SWFooter';
import SWMain from './partials/SWMain/SWMain';
import SWFormLogin from './components/SWFormLogin/SWFormLogin';

export default {
    components: {
        'sw-header': SWHeader,
        'sw-footer': SWFooter,
        'sw-main': SWMain,
        'sw-form-login': SWFormLogin,
    },
    computed: { ...mapState({ darkMode: (state) => state.isDark }) },
    mounted() {
        // console.log(app_env);
    },
};
</script>
