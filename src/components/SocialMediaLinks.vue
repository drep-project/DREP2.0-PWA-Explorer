<template>
    <ul class="socialmedialinks no-markers">
        <li>
            <a href="https://twitter.com/DrepOfficial" target="_blank" rel="nofollow" title="Fantom on Twitter">
                <icon data="@/assets/svg/social-media2/x.svg" width="32" height="32"></icon>
                <span class="socialmedialinks_label">Twitter</span>
            </a>
        </li>
        <li>
            <a href="https://discord.com/invite/lookfor" target="_blank" rel="nofollow" title="Fantom on Discord">
                <icon data="@/assets/svg/social-media2/discord.svg" width="32" height="32"></icon>
                <span class="socialmedialinks_label">Discord</span>
            </a>
        </li>
        <li>
            <a href="https://t.me/drep_foundation" target="_blank" rel="nofollow" title="Fantom on Telegram">
                <icon data="@/assets/svg/social-media2/telegram.svg" width="32" height="32"></icon>
                <span class="socialmedialinks_label">Telegram</span>
            </a>
        </li>
        <li>
            <a href="https://drep-foundation.medium.com/" target="_blank" rel="nofollow" title="Fantom on Reddit">
                <icon data="@/assets/svg/social-media/medium2.svg" width="32" height="32"></icon>
                <span class="socialmedialinks_label">Medium</span>
            </a>
        </li>
        <li>
            <a href="https://github.com/drep-project/DREP2.0-PWA-Explorer" target="_blank" rel="nofollow" title="Fantom on Github">
                <icon data="@/assets/svg/social-media/github.svg" width="32" height="32"></icon>
                <span class="socialmedialinks_label">Github</span>
            </a>
        </li>
    </ul>
</template>

<style lang="scss">
.socialmedialinks {
    display: flex;
    justify-content: space-between;

    margin-top: 20px;
    padding: 40px 20px 60px !important;
    border-top: 1px solid var(--f-darker-color-3);

    &_label {
        padding-left: 10px;
    }
}

@include media-max($bp-medium) {
    .socialmedialinks {
        &_label {
            display: none;
        }
    }
}
</style>
