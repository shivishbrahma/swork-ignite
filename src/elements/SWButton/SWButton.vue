<style lang="scss">
.sw-btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    text-decoration: none;
    text-align: center;
    box-shadow: none;

    padding: $pad $pad * 2;
    border-radius: 0;
    margin: 0 $margin;

    &.sw-btn-icon {
        .mdi {
            position: absolute;
            // left: 0;
        }
    }

    // Disable Button
    &.sw-btn-disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    // Background Button
    &.sw-btn-bg {
        @each $name, $color in $colors {
            &.sw-btn-#{$name} {
                transition: background 0.5s ease, color 0.5s ease-in,
                    box-shadow 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
                background-color: $color;
                color: get-text-color($color);
                border: $border solid get-border-color($color);
                box-shadow: 0.05rem 0.05rem 0 0 get-border-color($color), 0.1rem 0.1rem 0 0 get-border-color($color),
                    0.15rem 0.15rem 0 0 get-border-color($color), 0.2rem 0.2rem 0 0 get-border-color($color),
                    $border $border 0 0 get-border-color($color);

                &:hover {
                    background-color: get-text-color($color);
                    color: $color;
                }

                &:active {
                    box-shadow: none;
                }
            }
        }
    }

    // Outline Button
    &.sw-btn-outline {
        @each $name, $color in $colors {
            &.sw-btn-#{$name} {
                transition: background 0.5s ease, color 0.5s ease-in,
                    box-shadow 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
                background-color: get-text-color($color);
                color: $color;
                border: 0.25rem solid get-border-color($color);
                box-shadow: 0.05rem 0.05rem 0 0 get-border-color($color), 0.1rem 0.1rem 0 0 get-border-color($color),
                    0.15rem 0.15rem 0 0 get-border-color($color), 0.2rem 0.2rem 0 0 get-border-color($color),
                    0.25rem 0.25rem 0 0 get-border-color($color);

                &:hover {
                    background-color: $color;
                    color: get-text-color($color);
                }

                &:active {
                    box-shadow: none;
                }
            }
        }
    }
}
</style>

<template>
    <button class="sw-btn" :class="__classname">
        <slot>Button</slot>
    </button>
</template>

<script>
export default {
    name: 'sw-button',
    props: {
        type: {
            type: [String, Array],
            default: 'bg',
            validator(value) {
                const options = ['bg', 'icon', 'disabled', 'outline'];
                return options.includes(value);
            },
        },
        element: {
            type: String,
        },
        color: {
            type: String,
            default: 'blue',
            validator(value) {
                const options = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'primary', 'secondary'];
                return options.includes(value);
            },
        },
    },
    computed: {
        __classname() {
            let classes = [];
            if (Array.isArray(this.$props.type)) this.$props.type.forEach((el) => classes.push(`sw-btn-${el}`));
            else classes.push(`sw-btn-${this.$props.type}`);
            classes.push(`sw-btn-${this.$props.color}`);
            return classes.join(' ');
        },
    },
};
</script>
