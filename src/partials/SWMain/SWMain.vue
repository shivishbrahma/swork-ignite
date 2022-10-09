<style lang="scss">
main {
    flex: 1 0 auto;
}

// Dark Mode
.dark main {
    background-color: $gray-matte;
}

// Light Mode
.light main {
    background-color: $gray-light;
}
</style>

<template>
    <main>
        <slot></slot>
    </main>
</template>

<script>
export default {
    name: 'sw-main',
};
</script>

<style lang="scss" scoped></style>
