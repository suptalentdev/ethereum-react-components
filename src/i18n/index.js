/* eslint-disable */
const en = {
  "mist": {
    "applicationMenu": {
      "app": {
        "label": "__app__",
        "about": "About __app__",
        "checkForUpdates": "Check for updates...",
        "checkForNodeUpdates": "Check for Ethereum node updates...",
        "services": "Services",
        "hide": "Hide __app__",
        "hideOthers": "Hide others",
        "showAll": "Show all",
        "quit": "Quit __app__"
      },
      "file": {
        "label": "File",
        "importPresale": "Import accounts",
        "newAccount": "New account",
        "backup": "Backup",
        "backupKeyStore": "Accounts",
        "backupMist": "Application data",
        "swarmUpload": "Upload to Swarm..."
      },
      "edit": {
        "label": "Edit",
        "undo": "Undo",
        "redo": "Redo",
        "cut": "Cut",
        "copy": "Copy",
        "paste": "Paste",
        "selectAll": "Select all"
      },
      "view": {
        "label": "View",
        "fullscreen": "Toggle full screen",
        "languages": "Language",
        "default": "Default",
        "txHistory": "Transaction History",
        "langCodes": {
          "ca": "Català",
          "de": "Deutsch",
          "en": "English",
          "es": "Español",
          "fa": "فارسى",
          "fr": "Français",
          "it": "Italiano",
          "ja": "日本語",
          "ko": "한국어 ",
          "nl": "Nederlands",
          "nb": "Norsk",
          "pt": "Português",
          "sq": "Shqip",
          "ru": "Pусский",
          "zh": "普通話",
          "zh-TW": "國語"
        }
      },
      "develop": {
        "label": "Develop",
        "devTools": "Toggle developer tools",
        "devToolsMistUI": "Mist UI",
        "devToolsWalletUI": "Wallet UI",
        "devToolsWebview": "__webview__",
        "runTests": "Run tests",
        "logFiles": "Show log files",
        "openRemix": "Open Remix IDE",
        "ethereumNode": "Ethereum Node",
        "network": "Network",
        "mainNetwork": "Main Network",
        "startMining": "⛏ Start mining",
        "stopMining": "⛏ Stop mining",
        "enableSwarm": "Enable Swarm",
        "syncMode": "Sync mode",
        "syncModeFull": "Full",
        "syncModeFast": "Fast",
        "syncModeLight": "Light",
        "syncModeNoSync": "No sync"
      },
      "window": {
        "label": "Window",
        "minimize": "Minimize",
        "close": "Close",
        "toFront": "Bring all to front"
      },
      "help": {
        "label": "Help",
        "mistWiki": "Troubleshooting and Help",
        "gitter": "Mist channel on Gitter",
        "reportBug": "Report an issue on Github"
      }
    },
    "errors": {
      "nodeConnect": "Couldn't connect to node? See the logs for more:",
      "nodeStartup":
        "It seems like the node couldn't be started.  Do you already have one running? Is it upgrading the database right now?",
      "timeSync": {
        "title": "Your computer's clock is not synced.",
        "description":
          "To successfully synchronize with the Ethereum network, you need to sync your computer's clock with a time sync server.",
        "win32":
          "Go to your Internet Time Settings in your system preferences and check the box. See this guide for details: http://www.guidingtech.com/3119/windows-clock-sync/",
        "linux":
          "To enable a time sync server, install \"ntp\" via \"apt-get install ntp\".",
        "darwin":
          "To enable time sync, open the time preferences and check \"Set the time and date automatically\"."
      },
      "nodeChecksumMismatch": {
        "title": "Checksum mismatch in downloaded node!",
        "description":
          "__algorithm__: __hash__\n\nPlease install the __type__ node version __version__ manually."
      },
      "legacyChain": {
        "title": "Legacy chain detected",
        "description":
          "Your node is currently on the unsupported Ethereum Classic chain. To use this chain, use tools provided by the ethereum classic project at\nhttps://ethereumclassic.github.io.\n\nTo revert to the main ethereum chain follow the tutorial here:\nhttps://github.com/ethereum/mist/releases/0.8.2"
      },
      "swarm": {
        "notEnabled":
          "Swarm is not enabled. Please enable it in the menu under Develop > Enable Swarm."
      }
    },
    "rightClick": {
      "reload": "Reload",
      "openDevTools": "Open developer tools",
      "inspectElements": "Inspect element"
    },
    "sendTx": {
      "tokens": "tokens",
      "transfer": "Transfer",
      "showDetails": "Show details",
      "hideDetails": "Hide details",
      "tokenAddress": "Token Address:",
      "tokenName": "Token Name:",
      "tokenContractName": "Token Contract Address:",
      "parameters": "Parameters",
      "etherAmount": "Ether Amount:",
      "gasPrice": "Gas Price:",
      "gasPriceStandard": "Gas Price (Standard):",
      "gasPricePriority": "Gas Price (Priority):",
      "gasEstimate": "Gas Estimate:",
      "errorMessage": "Error Message:",
      "transactionExecutingFunction": "Transaction Executing Function:",
      "from": "From",
      "to": "To",
      "contract": "Contract",
      "loading": "Loading...",
      "priorityFee": "Priority Fee:",
      "standardFee": "Standard Fee:",
      "execute": "Execute",
      "enterPassword": "Enter password to confirm the transaction",
      "unlocking": "Confirming...",
      "estimatedGasError":
        "It seems this transaction will fail. If you submit it, it may consume all the gas you provide.",
      "overBlockGasLimit":
        "The gas required for this execution exceeds the block gas limit.",
      "notEnoughGas":
        "Gas might not be enough to successfully finish this transaction.",
      "gasLoadingWarning":
        "Loading gas estimate...",
      "gasLoadingError":
        "Failed to estimate gas.",
      "errors": {
        "connectionTimeout":
          "Couldn't connect to the node, did it crash in the background?",
        "wrongPassword": "Wrong password",
        "multipleKeysMatchAddress":
          "Multiple keys match address. Please remove duplicates from keystore (menu -> File -> Backup -> Accounts)",
        "insufficientFundsForGas":
          "Insufficient funds in main account (etherbase) to pay for gas",
        "sameAccount": "Can't send to itself"
      }
    },
    "txHistory": {
      "windowTitle": "Transaction History",
      "total": "total",
      "status": "Status",
      "statusPending": "Pending",
      "statusFailed": "Failed",
      "statusConfirmed": "Confirmed",
      "confirmations": "confirmations",
      "txHash": "Transaction Hash",
      "etherAmount": "Ether Amount",
      "nonce": "Nonce",
      "noTxs": "No transactions yet.",
      "gasLimit": "Gas Limit",
      "gasUsed": "Gas Used",
      "gasPrice": "Gas Price",
      "txCost": "Actual Transaction Cost",
      "gasPrice": "Gas Limit",
      "data": "Data",
      "newContract": "New Contract",
      "from": "From",
      "to": "To",
      "contract": "Contract"
    },
    "nodeInfo": {
      "active": "active",
      "blockNumber": "Your latest block number",
      "blocksBehind": "blocks behind",
      "checkingWhichNetwork": "Checking network...",
      "connecting": "Connecting...",
      "local": "Local",
      "lookingForPeers": "Looking for peers...",
      "network": "Network",
      "testNetwork": "Test network",
      "node": "Node",
      "peers": "peers",
      "privateNetwork": "Private-net",
      "privatenetExplain":
        "You are on a private net. DO NOT SEND any real ether to these addresses",
      "remote":
        "Connected to remote node. Switches to local node when sync is fewer than 15 blocks behind.",
      "syncStarting": "Sync starting...",
      "testnetExplain":
        "You are on the __name__. DO NOT SEND any real Ether to these addresses",
      "timeSinceBlock": "Elapsed time since last block",
      "unknownnetExplain": "Unable to determine which network you are on"
    },
    "sidebar": {
      "buttons": {
        "browser": "Browse"
      },
      "submenu": {
        "account": "Account",
        "connectAccounts": "Connect Accounts"
      }
    },
    "browserBar": {
      "buttons": {
        "noAccounts": "No accounts set",
        "connect": "Connect"
      }
    },
    "startScreen": {
      "runningNodeFound": "Found running Ethereum node!",
      "nodeConnectionTimeout":
        "Couldn't start Ethereum node!<br><small>If you <a href='https://www.ethereum.org/cli#geth' class='button' target='_blank'>installed Geth</a>, use this command to run it: <br> <code>geth --ipcpath __path__</code></small><br> <small><a href='https://github.com/ethereum/mist/issues' class='button' target='_blank'> Or report an issue </a></small>",
      "nodeBinaryNotFound":
        "No Ethereum node binary found!<br><small> <a href='https://www.ethereum.org/cli#geth' class='button' target='_blank'> Please start one manually before. </a> </small>",
      "nodeStarting": "Ethereum node starting up...",
      "nodeStarted": "Ethereum node started",
      "nodeConnected": "Ethereum node connected",
      "nodeStopping": "Ethereum node stopping...",
      "nodeStopped": "Ethereum node stopped",
      "nodeError": "Ethereum node connection error:'(",
      "unableToBindPort":
        "Ethereum node cannot run. Is another instance already running?",
      "nodeSyncing": "Ethereum node needs to sync, please wait...",
      "nodeSyncInfo": "Downloading block __displayBlock__ of __highestBlock__",
      "nodeSyncInfoStates":
        "Downloading block __displayBlock__ of __highestBlock__, <br> Downloading chain structure __displayState__ of __displayKnownStates__",
      "nodeSyncConnecting": "Looking for peers...",
      "nodeSyncFoundPeers": "Connecting to __peers__ peers...",
      "launchApp": "Launch Application",
      "retryConnection": "Retry Connection",
      "clientBinaries": {
        "scanning": "Checking for node update...",
        "downloading": "Downloading new node...",
        "loadConfig": "Loading client config...",
        "filtering": "Filtering client binaries...",
        "done": "Ethereum node up-to-date...",
        "error": "Error running downloaded binary."
      }
    },
    "popupWindows": {
      "updateAvailable": {
        "newVersionAvailable": "New __name__ version available",
        "version": "Version",
        "downloadURL": "Download URL",
        "checksum": "Checksum",
        "downloadAndRestart": "Update and Restart",
        "download": "Download new version",
        "skipUpdate": "Skip Update",
        "checking": "Checking for updates to __name__...",
        "noUpdateFound":
          "No update found. You are running the latest version of __name__."
      },
      "requestAccount": {
        "title": "Create account",
        "enterPassword": "Enter password",
        "repeatPassword": "Repeat password",
        "creating": "Generating account...",
        "backupHint":
          "Make sure you backup your keyfiles AND password!\n\nYou can find your keyfiles folder using the main menu -> File -> Backup -> Accounts. Keep a copy of the \"keystore\" folder where you can't lose it!",
        "errors": {
          "passwordMismatch": "Your passwords don't match.",
          "passwordTooShort": "Make a longer password"
        }
      },
      "importAccount": {
        "doYouHaveAWalletFile": "Do you have a wallet file?",
        "walletFileDescription":
          "<p>Move any wallet file here to import.<br>If you participated in the Ethereum Pre-sale 2014, you should have a file named <code>ethereum_wallet_backup.json</code>. It was downloaded after the sale and also sent to your email</p>",
        "dropFilesHere": "Drop wallet file",
        "importing": "Importing...",
        "buttons": {
          "showPassword": "Show password"
        },
        "errors": {
          "unknownFile": "File not recognised.",
          "wrongPassword": "Wrong password.",
          "importFailed": "Couldn't import the file, got: __error__"
        }
      },
      "connectAccount": {
        "chooseAccountTitle": "Choose account",
        "createAccount": "Create new account",
        "pinToSidebar": "Pin app to the sidebar",
        "connectAccountDescription":
          "You are sharing your identity with __dappName__. This allows the app to see any public information related to your accounts, including balances connected to it."
      }
    }
  },
  "elements": {
    "checksumAlert":
      "This address looks valid, but it doesn't have some security features that will protect you against typos, so double check you have the right one. If provided, check if the security icon matches.",
    "identiconHelper":
      "This is a security icon.  If there were any change to the address, the resulting icon would be a completely different one.",
    "type": {
      "address": "Address",
      "bool": "Boolean",
      "int": "Integer",
      "uint": "Natural Number",
      "string": "String",
      "bytes": "Bytes"
    }
  }
}

const CreateAccountForm = {
  'mist.popupWindows.requestAccount.errors.passwordMismatch': "Your passwords don't match.",
  'mist.popupWindows.requestAccount.errors.passwordTooShort': 'Make a longer password',
  'mist.popupWindows.requestAccount.backupHint': "Make sure you backup your keyfiles AND password!\n\nYou can find your keyfiles folder using the main menu -> File -> Backup -> Accounts. Keep a copy of the \"keystore\" folder where you can't lose it!",
  'mist.popupWindows.requestAccount.enterPassword': 'enter password',
  'mist.popupWindows.requestAccount.repeatPassword': 'repeat password',
  'mist.popupWindows.importAccount.buttons.showPassword': 'show password',
  'mist.popupWindows.requestAccount.creating': 'Creating Account ...',
  'mist.popupWindows.requestAccount.title': 'Create Account',
  'buttons.ok': 'ok',
  'buttons.cancel': 'cancel'
}

const FeeSelector = {
  'mist.sendTx.priorityFee': 'Priority Fee:'
}

const TxHistory = {
  'mist.txHistory.windowTitle': 'Transaction History'
}

const lang = {
  ...en,
  ...en.mist, // allow translation keys without mist.x prefix
  ...CreateAccountForm,
  ...FeeSelector,
  ...TxHistory
}

const i18n = {
  t: str => {
    let parts = str.split('.')
    let cur = lang
    for(var i = 0; i < parts.length; i++) {
      if(cur === undefined) break
      cur = cur[parts[i]]
    }
    if(typeof cur === 'string') return cur
    return (lang[str] ? lang[str] : str)
  }
}

export default i18n
