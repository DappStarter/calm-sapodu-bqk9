require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave foot current return rural modify coral light army gentle'; 
let testAccounts = [
"0x83e54a911ff577f0983b91b4bb5e3db982bc476e9dd7317452f7e39b01139321",
"0xb7d2f4aca94ab01ddcfea72267a8b4663437c7382e727f993174a2053789f268",
"0x346145e7b778b15017f1da76643373040d722da024561ae24920f840e204b988",
"0x6d2a7d7a1f5c10d916898021a5b2e48a4728ae91e14afb50a42fd291e92dd30b",
"0xbe657c80c6006276a2105fd2948d484c8b9a294003cf6092340b956489b98048",
"0x9791b46361a1d280892da81df54dbd0f60f54ee1fe473ac061d865c3677e94bf",
"0xb0658c6203496548a2a545fe5d3568a0d7e2b94253e8629c5f7fba8f08988837",
"0x2d93925ceb4b02a9efc48416935313a58c772dd9739b2a045a23e7e333b37530",
"0x094a5cd8afee20fb43609699bcc05885e92271ca480d54a5870835c8dcac782c",
"0x1c0d9a78d9a491a176c63ddbabb9076b1706112f500316081c73cb4d7b743793"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

