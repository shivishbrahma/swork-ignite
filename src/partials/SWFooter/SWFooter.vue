<style lang="scss">
footer {
    .copyright {
        text-align: center;
        padding: $pad;
    }
}

// Dark Mode
.dark footer {
    background-color: $gray;
    .copyright {
        color: lighten($gray, 50%);
    }
}

// Light Mode
.light footer {
    background-color: $white;
    .copyright {
        color: darken($gray-light, 50%);
    }
}
</style>

<template>
    <footer>
        <div class="copyright">
            Copyright <mdicon name="copyright" width="20" height="20" />
            {{ fullYear }}
            | Developed by
        </div>
    </footer>
</template>

<script>
export default {
    name: 'sw-footer',
    computed: {
        fullYear() {
            return new Date().getFullYear();
        },
    },
};
</script>
