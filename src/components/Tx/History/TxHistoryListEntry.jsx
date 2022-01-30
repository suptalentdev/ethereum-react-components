import React, { Component } from 'react'
import ethUtils from 'ethereumjs-util'
import Identicon from '../../Identicon'
import i18n from '../../../i18n'

// FIXME utils
const BigNumber = ethUtils.BN
const isHex = str => typeof str === 'string' && str.startsWith('0x')
const toBN = str => new BigNumber(str)
const hexToNumberString = str => toBN(str).toString(10)
const toBigNumber = (str) => {
  return isHex(str) ? new BigNumber(hexToNumberString(str)) : new BigNumber(str)
}
// end


class TxRow extends Component {
  constructor(props) {
    super(props);

    this.state = { showDetails: false };
  }

  valueToEtherAmount = value => {
    const { tx } = this.props
    const theValue = toBigNumber(value)
    const etherAmount = theValue.div(new BigNumber('1000000000000000000'))
    return etherAmount;
  };

  toggleDetails() {
    this.setState({ showDetails: !this.state.showDetails });
  }

  renderDetails() {
    const { tx, etherPriceUSD } = this.props;

    if (!this.state.showDetails) {
      return (
        <div className="tx-moreDetails" onClick={() => this.toggleDetails()}>
          Show details
        </div>
      );
    }

    let txHashLink = 'Unavailable';
    if (tx.hash) {
      let subdomain = '';
      if (tx.networkId === 3) {
        subdomain = 'ropsten.';
      } else if (tx.networkId === 4) {
        subdomain = 'rinkeby.';
      } else if (tx.networkId === 42) {
        subdomain = 'kovan.';
      }
      txHashLink = (
        <a
          href={`https://${subdomain}etherscan.io/tx/${tx.hash}`}
          target="_blank"
        >
          {tx.hash}
        </a>
      );
    }

    const etherAmount = this.valueToEtherAmount(tx.value);
    let etherAmountUSD;
    if (tx.networkId === 1 && etherPriceUSD) {
      etherAmountUSD = this.toBigNumber(etherAmount)
        .times(new BigNumber(etherPriceUSD))
        .toString()
        .toFixed(2);
    }
    const gasPriceEther = this.valueToEtherAmount(tx.gasPrice);
    const gasPriceGwei = new BigNumber(gasPriceEther)
      .times(new BigNumber('1000000000'))
      .toString()
      .toFixed();
    let txCostEther;
    let txCostUSD;
    if (tx.blockNumber) {
      const txCost = this.toBigNumber(tx.gasUsed)
        .times(this.toBigNumber(tx.gasPrice))
        .toFixed();
      txCostEther = this.valueToEtherAmount(txCost);
      if (tx.networkId === 1 && etherPriceUSD > 0) {
        txCostUSD = this.toBigNumber(txCostEther)
          .times(new BigNumber(etherPriceUSD))
          .toString()
          .toFixed(2);
      }
    }

    let status = (
      <span className="bold" style={{ color: 'grey' }}>
        {i18n.t('mist.txHistory.statusPending')}
      </span>
    );
    if (tx.status === 0) {
      status = (
        <span className="bold" style={{ color: 'red' }}>
          {i18n.t('mist.txHistory.statusFailed')}
        </span>
      );
    } else if (tx.status === 1 && tx.blockNumber) {
      const blockNumber = _.max([
        this.props.nodes.local.blockNumber,
        this.props.nodes.remote.blockNumber
      ]);
      const numberConfirmations = blockNumber - tx.blockNumber;
      status = (
        <span>
          <span className="bold" style={{ color: 'green' }}>
            {i18n.t('mist.txHistory.statusConfirmed')}
          </span>{' '}
          <span>
            ({i18n.t('mist.txHistory.confirmations', {
              count: numberConfirmations
            })})
          </span>
        </span>
      );
    }

    return (
      <div>
        <div>
          {i18n.t('mist.txHistory.status')}: {status}
        </div>
        <div>
          {i18n.t('mist.txHistory.txHash')}:{' '}
          <span className="bold">{txHashLink}</span>
        </div>
        <div>
          {i18n.t('mist.txHistory.etherAmount')}:{' '}
          <span className="bold">{etherAmount} ether</span>{' '}
          {etherAmountUSD && <span> (${etherAmountUSD} USD)</span>}
        </div>
        <div>
          {i18n.t('mist.txHistory.nonce')}:{' '}
          <span className="bold">{web3.utils.hexToNumberString(tx.nonce)}</span>
        </div>
        <div>
          {i18n.t('mist.txHistory.gasLimit')}:{' '}
          <span className="bold">{web3.utils.hexToNumberString(tx.gas)}</span>
        </div>
        {tx.gasUsed && (
          <div>
            {i18n.t('mist.txHistory.gasUsed')}:{' '}
            <span className="bold">
              {web3.utils.hexToNumberString(tx.gasUsed)}
            </span>
          </div>
        )}
        <div>
          {i18n.t('mist.txHistory.gasPrice')}:{' '}
          <span className="bold">{gasPriceEther} ether</span> ({gasPriceGwei}{' '}
          Gwei)
        </div>
        {txCostEther && (
          <div>
            {i18n.t('mist.txHistory.txCost')}:{' '}
            <span className="bold">{txCostEther} ether</span>
            {txCostUSD && <span> (${txCostUSD} USD)</span>}
          </div>
        )}
        {tx.data && (
          <div>
            {i18n.t('mist.txHistory.data')}:{' '}
            <span className="bold">{tx.data}</span>
          </div>
        )}
        <div className="tx-moreDetails" onClick={() => this.toggleDetails()}>
          Hide details
        </div>
      </div>
    );
  }

  render() {
    const { tx, networkString } = this.props
    let network = '';
    if (networkString !== 'Main') {
      network = networkString;
    }
    const isTokenTransfer =
      tx.executionFunction === 'transfer(address,uint256)';
    let description;
    let tokensTo;
    if (isTokenTransfer) {
      const decimals = tx.token.decimals;
      const tokenCount = tx.params[1].value.slice(0, -Math.abs(decimals));
      const tokenSymbol = this.props.token.symbol || 'tokens';
      description = `Transferred ${tokenCount} ${tokenSymbol}`;
      tokensTo = tx.params[0].value;
    } else if (tx.isNewContract) {
      description = 'Created New Contract';
    } else if (tx.executionFunction) {
      description = 'Executed Contract Function';
    } else {
      const etherAmount = this.valueToEtherAmount(tx.value);
      description = `Sent ${etherAmount} ether`;
    }

    return (
      <div key={tx.hash || tx.nonce} className="tx">
        <div className="right">
          {network && <div className="network">{network}</div>}
          <div className="tx-date">{tx.createdAt}</div>
        </div>
        <div className="tx-description">{description}</div>
        {tx.contractAddress && (
          <div>
            {i18n.t('mist.txHistory.newContract')}:
            <Identicon seed={tx.contractAddress} size="small" />
            <span className="bold">{tx.contractAddress}</span>
          </div>
        )}
        <div>
          {i18n.t('mist.txHistory.from')}:
          <Identicon seed={tx.from} size="small" />
          <span className="bold">{tx.from}</span>
        </div>
        {isTokenTransfer && (
          <div>
            {i18n.t('mist.txHistory.to')}:
            <Identicon seed={tokensTo} size="small" />
            <span className="bold">{tokensTo}</span>
          </div>
        )}
        {!isTokenTransfer && (
          <div>
            {tx.to && (
              <div>
                {i18n.t('mist.txHistory.to')}
                {tx.toIsContract && ' ' + i18n.t('mist.txHistory.contract')}:
                <Identicon seed={tx.to} size="small" />
                <span className="bold">{tx.to}</span>
              </div>
            )}
          </div>
        )}
        {this.renderDetails()}
      </div>
    );
  }
}

export default TxRow
