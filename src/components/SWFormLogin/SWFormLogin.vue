<style lang="scss">
.sw-frm-login {
    display: flex;
    justify-content: center;
}
</style>

<template>
    <div class="sw-frm-login">
        <sw-form
            title="Login Form"
            is-yes-btn="Login"
            @fn-submit="onSubmit"
        >
            <template #header> </template>

            <sw-input label="Email / Username" name="lgn-usr" v-model="usr" />
            <sw-input type="password" label="Password" name="lgn-pwd" v-model="pwd" />

            <template #footer> </template>
        </sw-form>
    </div>
</template>

<script>
import SWForm from '../../elements/SWForm/SWForm.vue';
import SWInput from '../../elements/SWInput/SWInput.vue';

export default {
    name: 'sw-form-login',
    components: {
        'sw-form': SWForm,
        'sw-input': SWInput,
    },
    created() {},
    data() {
        return {
            usr: '',
            pwd: '',
        };
    },
    props: {},
    methods: {
        onSubmit() {
            console.log('Data: ', this.usr, this.pwd);
        },
    },
};
</script>

<style lang="scss" scoped></style>
