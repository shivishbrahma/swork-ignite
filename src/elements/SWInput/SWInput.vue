<style lang="scss">
.sw-field-box {
    display: flex;
    flex-direction: column;
    margin: $margin 0;
    row-gap: calc($margin/2);
    .sw-field-input {
        padding: $pad calc($pad * 1.5);
        outline: none;
        &:active,
        &:focus {
            border: calc($border/2) solid get-border-color($blue);
            outline: $border solid rgba(get-border-color($blue), 0.9);
        }
        &::placeholder {
            font-style: italic;
            font-family: $font-family2;
        }
    }
    .sw-field-errors {
    }
}

// Dark Mode
.dark {
    .sw-field-input {
        background-color: $gray-matte;
        color: $white;
        border: calc($border/2) solid $white;
    }
}

// Light Mode
.light {
    .sw-field-input {
        background-color: $gray-light;
        color: $black;
        border: calc($border/2) solid $black;
    }
}
</style>

<template>
    <div class="sw-field-box">
        <label :for="$attrs.name" class="sw-field-label">{{ label }}</label>
        <input class="sw-field-input" v-model="value" :type="type" :name="$attrs.name" :placeholder="placeholder" />
        <small class="sw-field-errors" :for="$attrs.name"></small>
    </div>
</template>

<script>
export default {
    name: 'sw-input',
    props: {
        label: {
            type: String,
            default: 'Field Label',
        },
        type: {
            type: String,
            default: 'text',
            validator(value) {
                const options = ['text', 'email', 'number', 'password', 'file', 'checkbox', 'radio'];
                return options.includes(value);
            },
        },
        placeholder: {
            type: String,
            default: 'Enter the field',
        },
        validator: {
            type: String,
            default: 'required',
        },
        modelValue: {
            type: String,
            default: '',
        },
    },
    emits: ['update:modelValue'],
    computed: {
        value: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            },
        },
    },
    methods: {},
};
</script>
