<template>
    <ul class="f-social-media-links no-markers">
        <li>
            <a href="https://twitter.com/DrepOfficial" target="_blank" rel="nofollow" title="Fantom on Twitter">
                <icon data="@/assets/svg/social-media/twitter.svg" width="24" height="24"></icon>
            </a>
        </li>
        <li>
            <a href="https://discord.com/invite/lookfor" target="_blank" rel="nofollow" title="Fantom on Discord">
                <icon data="@/assets/svg/social-media/discord.svg" width="24" height="24"></icon>
            </a>
        </li>
        <li>
            <a href="https://t.me/drep_foundation" target="_blank" rel="nofollow" title="Fantom on Reddit">
                <icon data="@/assets/svg/social-media2/telegram.svg" width="24" height="24"></icon>
            </a>
        </li>
        <li>
            <a href="https://drep-foundation.medium.com/" target="_blank" rel="nofollow" title="Fantom on Medium">
                <icon data="@/assets/svg/social-media/medium2.svg" width="24" height="24"></icon>
            </a>
        </li>
        <li>
            <a href="https://github.com/drep-project/DREP2.0-PWA-Explorer" target="_blank" rel="nofollow" title="Fantom on Github">
                <icon data="@/assets/svg/social-media/github.svg" width="24" height="24"></icon>
            </a>
        </li>
        <!-- <li>
            <a href="https://www.linkedin.com/company/fantom-foundation/" target="_blank" rel="nofollow" title="Fantom on Linkedin" class="linkedin">
                <icon data="@/assets/svg/social-media/linkedin.svg" width="24" height="24"></icon>
            </a>
        </li> -->
    </ul>
</template>

<script>
    export default {
    }
</script>

<style lang="scss">
    .f-social-media-links {
        --f-social-media-links-color: #{$secondary-color-lighter};

        color: var(--f-social-media-links-color);

        li {
            display: inline-block;
            vertical-align: middle;

            &:not(:last-child) {
                padding-inline-end: 24px;
            }

            @include links() {
                color: inherit;
                transition: color $transition-length ease;
            }

            a:not(.btn):hover {
                color: #fff;
            }
        }

        .linkedin {
            position: relative;
            top: -3px;
        }
    }
</style>
