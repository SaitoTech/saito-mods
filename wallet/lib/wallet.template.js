module.exports = WalletTemplate = (balance, publickey) => {
  return `
      <div class="welcome container">
          <div id="qrcode"></div>
          <div class="wallet-container">
              <div class="wallet-container-row">
                  <span>Balance:</span>
                  <span>${balance}</span>
              </div>
              <div class="wallet-container-row">
                  <span>Address:</span>
                  <span>${publickey}</span>
              </div>
          </div>
      </div>
  `;
}