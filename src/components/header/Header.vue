<!--
 * Header with title and buttons
-->
<template>
    <header class="app-header">
        <h1><a :href="link">{{ $props.title }}</a></h1>
        <styles-combo v-show="this.$route.path==='/'"/>
        <colors-combo v-show="this.$route.path==='/'"/>
        <ul class="nav nav-pills justify-content-end">
            <li class="nav-item"><router-link class="nav-link" active-class="active" to="/" exact>Home</router-link></li>
            <li class="nav-item"><router-link class="nav-link" active-class="active" to="/tasks">Tasks</router-link></li>
        </ul>
        <!-- <locale-button /> -->
        <fullscreen-button></fullscreen-button>
    </header>
</template>

<script>
    import FullscreenButton from 'bryntum-vue-shared/src/FullscreenButton.vue';
    import ColorsCombo from './ColorsCombo.vue';
    import StylesCombo from './StylesCombo.vue';

    export default {
        name  : 'app-header',
        props : {
            link  : { type : String, default : '..' },
            title : { type : String, default : 'Example Header' }
        },
        components : {
            FullscreenButton,
            ColorsCombo,
            StylesCombo
        }
    } // exports the header components
</script>

<style lang="scss">
    .app-header {
        padding             : 2.1em .5em 2.1em 5em;
        background          : url(~bryntum-resources/images/logo_bryntum_bw.png) #2667c8;
        background-repeat   : no-repeat;
        background-size     : 40px;
        background-position : center left 1.5em;
        display             : flex;
        align-items         : center;

        .b-textfield {
            margin-right : 0.5em;

            input {
                padding: 0.55em;
            }

            label {
                margin-bottom : 0;
            }
        }
    }

    .app-header h1 {
        margin      : 0;
        font-size   : 1.8em;
        color       : #fff;
        font-weight : normal;
        flex        : 1;
        align-self  : center;
    }

    .app-header a {
        color           : inherit;
        text-decoration : none;
    }

    .app-header button {
        /* background    : #8BC34A; */
        border        : none;
        color         : #fff;
        cursor        : pointer;
        font-size     : 1em;
        font-family   : "Source Sans Pro", "Helvetica Neue", Helvetica, sans-serif;
        border-radius : 2px;
        margin-right  : .5em;
    }
    .nav-item {
        margin-right : 0.5em;
        color : #a0a0a0;;
    }
    .nav-pills .nav-link {
        padding-top : 0.59rem;
        padding-bottom : 0.59rem;
        border-radius : 2px;
    }
    .nav-link.active {
        color : white;
    }

    .color-box {
        width: 1em;
        height: 1em;
        margin-right: .5em;
    }

    .style-list .b-list-item {
        height: 3em;

        .b-sch-event-wrap {
            height: 2em;
            width: calc(100% - 1.5em);
        }

        .b-sch-event:not(.b-sch-style-colored) {
            color : #fff !important;
        }
    }

</style>

<!-- eof -->
