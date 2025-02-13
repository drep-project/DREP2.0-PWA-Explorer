<template>
    <div class="f-transaction-detail f-data-layout">
        <f-card>
            <template v-if="!dTransactionByHashError">
                <template v-if="cTransaction.hash && cTransaction.hash === '0x0000000000000000000000000000000000000000000000000000000000000000'">
                    Transaction <b>{{ id }}</b> does not exist.
                </template>
                <template v-else>
                    <div class="row no-collapse">
                        <div class="col-4 f-row-label">{{ $t('view_transaction_detail.hash') }}</div>
                        <div class="col"><div class="break-word">{{ id }}</div></div>
                    </div>
                    <div class="row no-collapse">
                        <div class="col-4 f-row-label">{{ $t('view_transaction_detail.status') }}</div>
                        <div class="col">
                            <div v-show="cTransaction && ('status' in cTransaction)"><f-transaction-status :status="cStatus"></f-transaction-status></div>
                        </div>
                    </div>
                    <div class="row no-collapse">
                        <div class="col-4 f-row-label">{{ $t('view_transaction_detail.from') }}</div>
                        <div class="col">
                            <div class="break-word" v-show="cTransaction">
                                <router-link :to="{name: 'address-detail', params: {id: cTransaction.from}}">{{ cTransaction.from }}</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="row no-collapse">
                        <div class="col-4 f-row-label">{{ $t('view_transaction_detail.to') }}</div>
                        <div class="col">
                            <div class="break-word" v-show="cTransaction">
                                <router-link :to="{name: 'address-detail', params: {id: cTransaction.to}}">{{ cTransaction.to }}</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="row no-collapse">
                        <div class="col-4 f-row-label">{{ $t('view_transaction_detail.time') }}</div>
                        <div class="col">
                            <div class="break-word" v-show="cTransaction && cTransaction.block.timestamp">
                                <timeago :datetime="timestampToDate(cTransaction.block.timestamp)"></timeago>
                                ({{ formatDate(timestampToDate(cTransaction.block.timestamp)) }})
                            </div>
                        </div>
                    </div>
                    <div class="row no-collapse">
                        <div class="col-4 f-row-label">{{ $t('view_transaction_detail.amount') }}</div>
                        <div class="col"><div class="break-word" v-show="cTransaction">{{  WEIToFTM(cTransaction.value) }} DREP</div></div>
                    </div>
                    <!--
                                <div class="row no-collapse">
                                    <div class="col-4 f-row-label">{{ $t('view_transaction_detail.fee') }}</div>
                                    <div class="col"><div class="break-word" v-show="cTransaction">{{  WEIToFTM(cTransaction.fee) }} DREP</div></div>
                                </div>
                    -->
                    <div class="row no-collapse">
                        <div class="col-4 f-row-label">{{ $t('view_transaction_detail.block') }}</div>
                        <div class="col">
                            <div class="break-word" v-show="cTransaction">
                                <router-link :to="{name: 'block-detail', params: {id: cTransaction.block.number | formatHexToInt}}">
                                    {{cTransaction.block.number | formatHexToInt}}
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="row no-collapse">
                        <div class="col-4 f-row-label">{{ $t('view_transaction_detail.gas_used') }}</div>
                        <div class="col"><div class="break-word" v-show="cTransaction">{{  cTransaction.gasUsed | formatHexToInt }}</div></div>
                    </div>
                    <div class="row no-collapse">
                        <div class="col-4 f-row-label">{{ $t('view_transaction_detail.gas_limit') }}</div>
                        <div class="col"><div class="break-word" v-show="cTransaction">{{  cTransaction.gas | formatHexToInt }}</div></div>
                    </div>
                    <div class="row no-collapse">
                        <div class="col-4 f-row-label">{{ $t('view_transaction_detail.gas_price') }}</div>
                        <div class="col"><div class="break-word" v-show="cTransaction">{{  cTransaction.gasPrice | formatHexToInt }} WEI</div></div>
                    </div>
                    <div class="row no-collapse">
                        <div class="col-4 f-row-label">{{ $t('view_transaction_detail.nonce') }}</div>
                        <div class="col"><div class="break-word" v-show="cTransaction">{{  cTransaction.nonce | formatHexToInt }}</div></div>
                    </div>
                    <div class="row no-collapse">
                        <div class="col-4 f-row-label">{{ $t('view_transaction_detail.transaction_fee') }}</div>
                        <div class="col"><div class="break-word" v-show="cTransaction">{{  cTransactionFee }} DREP</div></div>
                    </div>
                    <div class="row no-collapse">
                        <div class="col-4 f-row-label">{{ $t('view_transaction_detail.input_data') }}</div>
                        <div class="col"><div class="break-word input-data" v-show="cTransaction">{{  encodeURIComponent(cTransaction.inputData) }}</div></div>
                    </div>
                    <template v-if="cTransaction && cTransaction.tokenTransactions && cTransaction.tokenTransactions.length !== 0">
                        <div class="row no-collapse">
                            <div class="col-4 f-row-label">{{ $t('view_transaction_detail.token_txs') }}</div>
                        </div>
                        <token-transactions-list v-if="cTransaction" :token-transactions="cTransaction.tokenTransactions" />
                    </template>
                </template>
            </template>
            <template v-else>
                <div class="query-error">{{ $t('view_transaction_detail.transaction_not_found') }}</div>
            </template>
        </f-card>
    </div>
</template>

<script>
    import FCard from "../components/core/FCard/FCard.vue";
    import gql from 'graphql-tag';
    import { WEIToFTM } from "../utils/transactions.js";
    import { formatHexToInt, timestampToDate, formatDate } from "../filters.js";
    import FTransactionStatus from "../components/FTransactionStatus.vue";
    import TokenTransactionsList from "@/data-tables/TokenTransactionsList";

    export default {
        components: {
            TokenTransactionsList,
            FTransactionStatus,
            FCard
        },

        props: {
            /** Transaction id */
            id: {
                type: String,
                required: true,
                default: ''
            }
        },

        apollo: {
            transaction: {
                query: gql`
                    query TransactionByHash($hash: Bytes32!) {
                        transaction (hash: $hash) {
                            hash
                            index
                            nonce
                            from
                            to
                            value
                            gas
                            gasUsed
                            gasPrice
                            inputData
                            status
                            block {
                                hash
                                number
                                timestamp
                            }
                            tokenTransactions {
                                trxIndex
                                tokenAddress
                                tokenName
                                tokenSymbol
                                tokenType
                                tokenId
                                tokenDecimals
                                type
                                sender
                                recipient
                                amount
                            }
                        }
                    }
                `,
                variables() {
                    return {
                        hash: this.id
                    }
                },
                error(_error) {
                    this.dTransactionByHashError = _error.message;
                }
            }
        },

        data() {
            return {
                dTransactionByHashError: ''
            }
        },

        computed: {
            cTransaction() {
                return this.transaction || {block: {}};
            },

            cTransactionFee() {
                const {transaction} = this;

                if (transaction) {
                    return WEIToFTM(this.formatHexToInt(transaction.gasPrice) * this.formatHexToInt(transaction.gasUsed));
                }

                return 0;
            },

            cStatus() {
                let status = 2;

                if (this.transaction) {
                    if (this.transaction.status !== null) {
                        status = this.formatHexToInt(this.transaction.status);
                    }
                }

                return status;
            }
/*
            cLoading() {
                return this.$apollo.queries.transaction.loading;
            }
*/
        },

        methods: {
            WEIToFTM,
            formatHexToInt,
            timestampToDate,
            formatDate,
        }
    }
</script>

<style lang="scss">
.f-transaction-detail {
    .token-transaction-item {
        margin-left: 80px;
    }
    .token-transaction-item {
        padding-bottom: 0.3em;
    }
}
</style>
