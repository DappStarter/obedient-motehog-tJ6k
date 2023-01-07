require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remember pupil inner clip bridge soul'; 
let testAccounts = [
"0x5f53fc33bb5c5be8a73f4533821919fd3e3eb85566a64b8cd58c131fa6b2be61",
"0x8954db2702e2eac17d5df5b246d32d6e5d266788894cf590b6bdfa22ad351959",
"0x86e29918f79d74d365a32f302afa59532e1b45104f5b1f0d07f4ed9e34166578",
"0xdcb65a416881e3bc39c1701a22d65235d91738c502c65b6496ff941051d74554",
"0x3ee7f073034ec80eed01b17c3d83eb3676a2d5b11f4563dbb1f2c37a1bb3af1d",
"0x2f05e4fc58726d4503ebcf30704df284ff8e65b927411d7e3d62f0453e401ba3",
"0xc946cffb3d89113d7ae74d949c8996e2950fe72d56f2720466c95e0669975eb8",
"0xc3f117fc527b8f881da21439033f9215289f94116c13cbdc6ef766e8fcb5ba58",
"0x5825a7802e7171bad7db789bc707db7a37309a97c8d9248e5a5815522e890b58",
"0x42312b8cabd27475deb8df4701f9332dfb08eb07f3f8e50edeb7c88fa09cd344"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


