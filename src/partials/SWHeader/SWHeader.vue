<style lang="scss">
header {
    .navbar {
        display: flex;
    }

    .area-breadcrumb {
        padding: 1rem;
        font-size: 1.25rem;
        transition: transform ease 200ms;
        width: calc(99% - 300px);
        position: relative;
        top: 0.25rem;
        span {
            display: inline-block;
            &::after {
                content: '>';
                display: inline-block;
                font-weight: 600;
                font-family: serif;
                padding: 0 0.125rem;
            }
            &:last-child {
                font-weight: bold;
                &::after {
                    display: none;
                }
            }
        }
        &:hover {
            transition: scale(1.2);
        }
    }

    .area-search {
        display: flex;
        align-items: center;
        padding-right: 0.5rem;
        .box-input {
            position: relative;
        }
        .input {
            padding: calc($pad * 0.5) $pad;
            border: none;
            outline: none;
            &:active,
            &:focus {
                outline: $border solid get-border-color($blue);
            }
        }
        .btn-search {
            position: absolute;
            margin: 0px;
            background-color: transparent;
            border: 0px;
            height: 100%;
            right: 0.5rem;
        }
    }

    .userprofile {
        text-align: center;
        padding: 0.5rem;
        cursor: pointer;
        width: 200px;
        .name {
            display: inline-block;
            line-height: 40px;
            position: relative;
            // top: -0.5rem;
            font-size: 0.9rem;
        }
        .avatar {
            position: relative;
            top: 0.25rem;
            margin-left: 0.5rem;
            display: inline-block;
            border-radius: 50%;
            overflow: hidden;
            width: 40px;
            height: 40px;
            img {
                max-width: 100%;
                max-height: 100%;
            }
        }
    }

    .rightmenu {
        text-align: center;
        padding: 0.5rem;
        font-size: 1.25rem;
        width: 50px;
    }

    .leftmenu {
        padding: 0.5rem;
        border-right: 3px solid rgb(233, 236, 236);
        color: gray;
        position: relative;
        display: inline-block;
        &:hover {
            .dropdown-content {
                display: block;
            }
        }
    }
}

// Dark Mode
.dark header {
    background-color: $gray;
    .rightmenu,
    .area-breadcrumb,
    .userprofile,
    .btn-search {
        color: lighten($gray, 50%);
    }
    .input {
        background-color: $gray-matte;
        color: $white;
    }
    .area-search {
        border-right: 5px solid $gray-matte;
    }
}

// Light Mode
.light header {
    background-color: $white;
    .rightmenu,
    .area-breadcrumb,
    .userprofile,
    .btn-search {
        color: darken($gray-light, 50%);
    }
    .input {
        background-color: $gray-light;
        color: $black;
    }
    .area-search {
        border-right: 2px solid $gray-light;
    }
}
</style>

<template>
    <header>
        <!-- Navbar -->
        <div class="navbar">
            <!-- Breadcrumb Area -->
            <div class="area area-breadcrumb"></div>
            <!-- /Breadcrumb Area -->

            <!-- Search Area -->
            <div class="area area-search">
                <div class="box-input box-input-append">
                    <input class="input" type="text" placeholder="Search..." name="search" v-model="search" />
                    <button class="btn btn-icon btn-search" type="submit">
                        <mdicon name="magnify" />
                    </button>
                </div>
            </div>
            <!-- /Search Area -->

            <div class="area userprofile">
                <div class="btn btn-dropdown"></div>
                <!-- Right Menu -->
                <div class="rightmenu">
                    <div class="btn btn-icon" @click="toggleDark">
                        <mdicon name="moon-waning-crescent" v-if="darkMode" />
                        <mdicon name="white-balance-sunny" v-else />
                    </div>
                </div>
                <!-- /Right Menu -->
            </div>
        </div>
        <!-- /Navbar -->
    </header>
</template>

<script>
import SearchIcon from 'vue-ionicons/dist/ios-search';
import LightIcon from 'vue-ionicons/dist/ios-sunny';
import DarkIcon from 'vue-ionicons/dist/ios-moon';
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'sw-header',
    components: {
        SearchIcon,
        LightIcon,
        DarkIcon,
    },
    computed: { ...mapState({ darkMode: (state) => state.isDark }) },
    methods: {
        ...mapMutations(['toggleDark']),
    },
};
</script>
