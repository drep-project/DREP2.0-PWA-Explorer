const appConfig = {
    // app title
    name: "DREP2.0 Explorer",
    // app description
    description:
        "DREP2.0 Explorer allows you to explore and search the DREP2.0 blockchain for transactions, addresses and blocks",
    // app keywords
    keywords: "drep, explorer, search, blockchain, crypto, currency",
    // apollo client settings
    apollo: {
        // list of providers. if one of them is unavailable, another is randomly picked
        providers: [
            {
                http: 'http://localhost:16761/api',
                // for subscriptions
                ws: '',
            },
            {
                http: 'http://localhost:16761/api',
                // for subscriptions
                ws: '',
            },
            {
                http: 'http://localhost:16761/api',
                // for subscriptions
                ws: '',
            },
            {
                http: 'http://localhost:16761/api',
                // for subscriptions
                ws: '',
            },
            {
                http: 'http://localhost:16761/api',
                // for subscriptions
                ws: '',
            },
            {
                http: 'http://localhost:16761/api',
                // for subscriptions
                ws: '',
            },
            {
                http: 'http://localhost:16761/api',
                // for subscriptions
                ws: '',
            },
            {
                http: 'http://localhost:16761/api',
                // for subscriptions
                ws: '',
            },
            {
                http: 'http://localhost:16761/api',
                // for subscriptions
                ws: '',
            },
            {
                http: 'http://localhost:16761/api',
                // for subscriptions
                ws: '',
            },
            {
                http: 'http://localhost:16761/api',
                // for subscriptions
                ws: '',
            },
            {
                http: 'http://localhost:16761/api',
                // for subscriptions
                ws: '',
            },
            {
                http: 'http://localhost:16761/api',
                // for subscriptions
                ws: '',
            },
            {
                http: 'http://localhost:16761/api',
                // for subscriptions
                ws: '',
            },
        ],
        // index into providers array of default provider or 'random' - takes index randomly
        defaultProviderIndex: "random"
    },
    //
    useTestnet: true,
    // use 'hash' mode in vue router
    routerHashMode: false,
    // testnet config
    testnet: {
        // list of providers. if one of them is unavailable, another is randomly picked
        providers: [
            {
                http: 'http://localhost:16761/api',
                // for subscriptions
                ws: '',
            },
        ],
    },
    // progressive web application
    usePWA: true,
    // pwa settings
    pwa: {
        // name used in pwa manifest
        name: "DREP2.0 Explorer"
    },
    // default options for production build
    build: {
        // output dir for production build
        outputDir: "dist"
    },
    // downtime threshold in seconds. downtime values less than this threshold will be displayed as 0
    downtimeThreshold: 10,
    // feature flags
    flags: {
        networkNodesMap: false,
        rewardsEstimation: true,
        ftmVault: true,
        dailyBlocks: true,
        dailyTxFees: true,
    },
};

if (appConfig.useTestnet) {
    appConfig.apollo.providers = appConfig.testnet.providers;
}

// scss variables prepended to every scss file
appConfig.scssData = `
    @import "src/assets/scss/vars";
`;

module.exports = appConfig;
