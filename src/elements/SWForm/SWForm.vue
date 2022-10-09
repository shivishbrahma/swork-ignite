<style lang="scss">
.sw-frm {
    margin: $margin;
    width: 600px;
    max-width: 100%;
    .sw-frm-header {
        padding: $pad;
        h2 {
            text-align: center;
        }
    }
    .sw-frm-body {
        padding: $pad;
    }
    .sw-frm-footer {
        padding: $pad;
        .sw-frm-btn-container {
            display: flex;
            justify-content: flex-end;
        }
    }
    @each $name, $color in $colors {
        &.sw-frm-#{$name} {
            position: relative;
            border: $border solid get-border-color($color);
            box-shadow: $margin $margin 0.06rem get-border-color($color),
                $margin $margin 0.06rem 0.125rem rgba(get-text-color($color), 0.6);
            // box-shadow: 0.05rem 0.05rem 0 0 get-border-color($color), 0.1rem 0.1rem 0 0 get-border-color($color),
            //     0.15rem 0.15rem 0 0 get-border-color($color), 0.2rem 0.2rem 0 0 get-border-color($color),
            //     0.25rem 0.25rem 0 0 transparent;
            // &::before {
            //     content: '';
            //     top: 0.5rem;
            //     left: 0.5rem;
            //     display: inline-block;
            //     position: absolute;
            //     height: 100%;
            //     width: 100%;
            //     border: $border solid get-border-color($color);
            // }
        }
    }
}

// Dark Mode
.dark {
    .sw-frm {
        outline: calc($border * 0.5) solid white;
    }
}

// Light Mode
.light {
    .sw-frm {
        outline: calc($border * 0.5) solid black;
    }
}
</style>

<template>
    <form class="sw-frm" :class="__classname" @submit.prevent="onSubmit()">
        <section class="sw-frm-header">
            <h2 class="sw-frm-title">{{ title }}</h2>
        </section>
        <section class="sw-frm-body">
            <slot>Form Body</slot>
        </section>
        <section class="sw-frm-footer">
            <div class="sw-frm-btn-container">
                <sw-button type="outline" color="red" v-if="isNoBtn">{{ isNoBtn }}</sw-button>
                <sw-button color="green" v-if="isYesBtn">{{ isYesBtn }}</sw-button>
            </div>
        </section>
    </form>
</template>

<script>
import SWButton from '../SWButton/SWButton.vue';

export default {
    components: {
        'sw-button': SWButton,
    },
    name: 'sw-form',
    created() {},
    data() {
        return {};
    },
    props: {
        title: {
            type: String,
            default: 'Form Title',
        },
        color: {
            type: String,
            default: 'blue',
        },
        isYesBtn: {
            default: 'Submit',
        },
        isNoBtn: {
            default: null,
        },
    },
    computed: {
        __classname() {
            let classes = [];
            classes.push(`sw-frm-${this.$props.color}`);
            return classes.join(' ');
        },
    },
    methods: {
        onSubmit() {
            this.$emit('fn-submit');
        },
    },
};
</script>
