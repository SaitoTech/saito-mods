const SubstrateBasedCrypto = require("../dotcrypto/lib/SubstrateBasedCrypto");

const parityArchiveNodeEndpoint = 'wss://kusama-rpc.polkadot.io/';
const web3FoundationArchiveNodeEndpoint = 'wss://cc3-5.kusama.network/';
const saitoEndpoint = 'ws://206.189.221.128:9932';

class KSMCrypto2 extends SubstrateBasedCrypto {
  constructor(app) {
    super(app, 'KSM', parityArchiveNodeEndpoint, "Kusama's Existential Deposit is 0.01 KSM, be sure not to send less than 1 DOT or leave less than 0.01 KSM in your wallet.");
    this.name = 'KSMCrypto2';
    this.description = 'Kusama at Parity Archive Node Endpoint';
  }
}

module.exports = KSMCrypto2;
