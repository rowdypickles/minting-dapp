const CONTRACT_ADDR = "0x859201B9229CD22211f08FcFbd554830D54e8193";

const abi = [{"inputs":[{"internalType":"address","name":"_signerAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"InvalidQueryRange","type":"error"},{"inputs":[],"name":"MintERC2309QuantityExceedsLimit","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"OperatorNotAllowed","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"OwnershipNotInitializedForExtraData","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toTokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"ConsecutiveTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"MassAirdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"OPERATOR_FILTER_REGISTRY","outputs":[{"internalType":"contract IOperatorFilterRegistry","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PHASE_MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"costWL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"explicitOwnershipOf","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"},{"internalType":"bool","name":"burned","type":"bool"},{"internalType":"uint24","name":"extraData","type":"uint24"}],"internalType":"struct IERC721A.TokenOwnership","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"explicitOwnershipsOf","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"},{"internalType":"bool","name":"burned","type":"bool"},{"internalType":"uint24","name":"extraData","type":"uint24"}],"internalType":"struct IERC721A.TokenOwnership[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"isValidData","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"mintToAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"mintWhitelist","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicMintEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"message","type":"bytes32"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"recoverSigner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setCostWL","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPerTx","type":"uint256"}],"name":"setMaxPerTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPerWallet","type":"uint256"}],"name":"setMaxPerWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_MaxSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedURI","type":"string"}],"name":"setNotRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_phaseMaxSupply","type":"uint256"}],"name":"setPhaseMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPublicMintState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newSigner","type":"address"}],"name":"setSigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uriPrefix","type":"string"}],"name":"setUriPrefix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setWLMintState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"splitSignature","outputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"stop","type":"uint256"}],"name":"tokensOfOwnerIn","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uriPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uriSuffix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistMintEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

var contract1 = null;
var account = null;

var totalSupply = null;
var maxSupply = null;
var maxPerTx = null;
var WL = null;
var cost = null;
var costWL = null;

const decrementMintAmount = async (e) => {
  var mintAmount = Number(document.getElementById('tokens_amount').value);
  let newMintAmount = mintAmount - 1;
  if (newMintAmount < 1) {
    newMintAmount = "";
  }
  document.getElementById('tokens_amount').value = newMintAmount;
};

const incrementMintAmount = async (e) => {
  var mintAmount = Number(document.getElementById('tokens_amount').value);
  let newMintAmount = mintAmount + 1;
  if (newMintAmount > maxPerTx) {
    newMintAmount = maxPerTx;
  }
  document.getElementById('tokens_amount').value = newMintAmount;
};

/*
// Retrieve values from contract on page load
window.addEventListener('load', async () => {
    const web3 = new Web3(window.ethereum);
    const contract1 = new web3.eth.Contract(abi, CONTRACT_ADDR);
    const supply = await contract1.methods.totalSupply().call();
    console.log(supply);

    document.getElementById("tokens_available").innerHTML = supply + " / " + 1000;
    })
*/

// WHITELIST CHECK
const wl_check = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
			document.getElementById("wl_check").innerHTML = "CHECKING..."
			try {
	  			const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
				  account = accounts[0];
  
				  const web3 = new Web3(window.ethereum);
				  contract1 = new web3.eth.Contract(abi, CONTRACT_ADDR, { from: account });

          		var chAccount = web3.utils.toChecksumAddress(account);
			    var addressIndex = signatures.indexOf(chAccount);

			  if (addressIndex != -1) {
				  addressSign = signatures[addressIndex + 1];
				  }
			  else
				  {
				  addressSign = signatures[0];
				  }

				const whitelisted = await contract1.methods.isValidData(account, addressSign).call();

				if (whitelisted == true) {
					alert("You are whitelisted!")
					console.log("WHITELISTED");
					document.getElementById("wl_check").innerHTML = "WHITELISTED";
					}
				else
					{
					alert("You are not whitelisted!")
					console.log("NOT WHITELISTED");
					document.getElementById("wl_check").innerHTML = "NOT WHITELISTED";
					}
				}
			catch(e)
				{
				alert("Error: " + e.message)
				console.log("Error: ",e)
		  		document.getElementById("wl_check").innerHTML = "CHECK WHITELIST";
		  		}
		}
	}

// PUBLIC MINT
const mint = async (e)=> {
  if (typeof window.ethereum !== 'undefined') {
    const _mintAmount = document.getElementById('tokens_amount').value;
      if (_mintAmount > 0) {
        var result = "";
        var success = "";
        document.getElementById("tokens_available").innerHTML = "MINTING...";
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
          const account = accounts[0];

          const web3 = new Web3(window.ethereum);
          const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, {gas: 3000000});

          const cost = await contract.methods.cost().call()
          const value = (cost * _mintAmount)

          const gas = Math.round( await contract.methods.mint(_mintAmount).estimateGas({value: value.toString(), from: accounts[0]}) * 1.1 )
          result = await contract.methods.mint(_mintAmount).send({value: value.toString(), from: accounts[0], gas: gas})

          success = document.getElementById("mint_button").innerHTML = "MINT";
          document.getElementById("tokens_available").innerHTML = "SUCCESS!";
          }
        catch(e) 
          {
          alert("Error: " + e.message);
          console.log("Error: ",e);
          document.getElementById("tokens_available").innerHTML = totalSupply + " / " + "1000";
          }
        }
    }     
}

// WHITELIST MINT
const whitelistMint = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
    const _mintAmount = document.getElementById('tokens_amount').value;
    	
    if (_mintAmount > 0) {
			var result = "";
			var success = "";
			document.getElementById("tokens_available").innerHTML = "MINTING...";

			try {
			  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			  const account = accounts[0];

			  const web3 = new Web3(window.ethereum);
			  const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, {from: account});
			  
			  var chAccount = web3.utils.toChecksumAddress(account);
			  var addressIndex = signatures.indexOf(chAccount);

			  if (addressIndex != -1) {
				  addressSign = signatures[addressIndex + 1];
				  }
			  else
				  {
				  addressSign = signatures[0];
				  }
			  
			  value = (costWL * _mintAmount);

			  const gas = Math.round( await contract.methods.mintWhitelist(_mintAmount, addressSign).estimateGas({value: value.toString(), from: account}) * 1.1 );
			  result = await contract.methods.mintWhitelist(_mintAmount, addressSign).send({value: value.toString(), from: account, gas: gas});

			  success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
			  } 
		  catch(e)
			  {
        alert("Error: " + e.message);
        console.log("Error: ",e);
			  document.getElementById("tokens_available").innerHTML = totalSupply + " / " + "1000";
			  }
		}
	}
}

// CONNECT
const connect = async (e)=> {
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    
    if (accounts.length > 0) {
      	  document.getElementById("connect_button").innerHTML = accounts[0].substr(0,10) + "..." + accounts[0].substr(-4) ;

  	  const web3 = new Web3(window.ethereum);
  	  const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, {gas: 3000000});
	  maxSupply = await contract.methods.maxSupply().call();
      	  totalSupply = await contract.methods.totalSupply().call();
	  const paused = await contract.methods.paused().call();
	  WL = await contract.methods.whitelistMintEnabled().call();
	  maxPerTx = await contract.methods.maxPerTx().call();
	  cost = await contract.methods.cost().call();
      	  costWL = await contract.methods.costWL().call();

      if (paused) { document.getElementById("phase").innerHTML = "CONTRACT IS PAUSED"; }
	  else { if (WL) { document.getElementById("phase").innerHTML = "WHITELIST MINT | MAX " + maxPerTx + " PER WALLET"; document.getElementById("price").innerHTML = "COST 0.01Ξ EACH"; }
	  else { document.getElementById("phase").innerHTML = "PUBLIC MINT | MAX " + maxPerTx + " PER WALLET"; document.getElementById("price").innerHTML = "COST 0.03Ξ EACH"; }
	  }

    	  //document.getElementById("tokens_available").innerHTML = "SOLD OUT";
	  document.getElementById("tokens_available").innerHTML = totalSupply + " / " + "1000";
	  document.getElementById("price").innerHTML = "COST 0.01Ξ EACH";
	  }
    else { document.getElementById("connect_button").innerHTML = "Connect wallet"; }
  }
  return false;
}

connect();

document.getElementById('connect_button').onclick = connect;
document.getElementById('wl_check').onclick = wl_check;
document.getElementById('mint_button').onclick = whitelistMint;

const signatures = [
  '0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  '0xc97b32D413Bdf3039B7293c3246CC8FdcB864BcB',
  '0xdf39da41a3a8e093b2756115ef7b41f66badf734b2833a1d3e819ec98f86bfcd36ad76510aa34086d39a0241c3a55bbaca05ea175ce15b6d0404c1d9ff94b3ed1c',
  '0xc7CB413557E2E67adC3a18B653f562EF7d18e5D2',
  '0x8c73a478b56ae19d610e8f7c425c14bc860a771efbe7d08acbcb75212bffcac17ba53257a4de1af28503252aadd48ec2f98c6fce36750ec57626141c65deef0d1c',
  '0x02659749Ef7984256C4F2c6fd68a0DBd24E3b40d',
  '0xd63aa3a406c81b35ccbac78fb1670ac854f6d0f308be2552bea65408842ba31d52bcfbf1463f819c99e6252f00a7c1c04ae3d166bb6e49a69b68081cc3ba624d1c',
  '0x447d93368e997B3595A66d5F844aAAdaE3782A3E',
  '0xf70ad7d1e8f978700e56d7022d6ae85a5563f1fa99357206c92647e111b3057663e64a57e21440e4f80d8bba1ba46cff8d69649794ee9136add9aab1bc22b89a1b',
  '0x6CF7f0cF30B4C247873aEFbecfC68Bfa7a88F231',
  '0xdfc3875f49eb0bfb7087d5b7ba58a6076ff7da76bf9d9fb834e45d84886d1ab64f5b405252a8ef2a6988acfcf39eeb72bddb0e9a7f6bbc372df88801ab152fe61b',
  '0x6f2d9d44F5860E125B2848ef5C4EB172D7E48BF3',
  '0xd5e4a8e63560ffd8d226b69eabd888d26e297204489319773506b1ed6781d68b7c77104a20f617bf31080dbdd89ae421c32d709ab6da15b8df09f5e2d5f1f0021c',
  '0x34Ea5e3170f7D281487c936aAbe9c7632b41fe10',
  '0x9c12f438fcbe9957b5eeaad6bdd71177360f32b30005046914d1438cd3d31dc90a5ca90e879446edc09c81bddc402e7d0d2c6df4a090d4387ff15ff3b4eeaacf1c',
  '0x41E67eE6990Aa063aa26c6c2D9eb43CD3467CdA3',
  '0xd9d45152e6c7ff2b0ae4e95c431bfe21b5bcd767f458028991ed8a2c4e0276424f74e683e367fba584f365a2ad9f13fd5de65a19a80782c56df48f3335af91cf1b',
  '0xf13DF95479B94Ea37191717301b2535dF9d1C9f1',
  '0x216971fc48aecf5974d0294ae33135f52564b0ec304bdffad3a999f96a736d3e454864b7ccd52f9e4cf1813f2d832191f0db68f9ed3041ef7f1b74b2768f8dd11b',
  '0xa91EEe49d2Fea98f0C8F364e416ba66345579f0f',
  '0xde9935ef08d966a9cf50821982d493842c66e9f72ceafe8e3404f5e6d7975dff5695b0740a0d06f9c3631cb336d4415672478aa663ba3ecd3e0728c9af582e4e1c',
  '0x571918cE3e96D7D835F35BAE6Fd2d7197B7d770b',
  '0xaf9c70e75df462202b69749d45f1e9b827776757e50b4d8306edb41f6fefa0813a5c18ed8eba5526de7295a458e76b43a80ad1c18dcc2da9154dd61ca6e8ebaa1b',
  '0x229D70Bc1ca126F854Aa9DF814af1844495bc77A',
  '0xf2936c101e8e50b7ff615fc6e82667595da38fc812a0673ff69fc9f114330dd3185ccc238f73b07123b455c38cd54869796b70fe95e3091ef003b23ec597a7131c',
  '0xAB2b6E58A757c0888E89CBbB36630CdefAEAc1e8',
  '0x3e18888d829a3421757f5d6801fac6b5f54213b1fc63ce567064d282e0a30e9869852cce2ec9574e79dfdffb68fc434fcb2a2c3dd053a63c4846403fc2de10271b',
  '0xa2Be19D397Aa97A97f1c860eA450C5C3B17abE45',
  '0x0e8bd4cef48aab19bc563e41f19622a0ae51c6dc01d8f1bdaee8782921501f5412605ea46a47c346ae9dcfe8fd629abc6e41fafc295c0cd4e41ec849f0e1780d1c',
  '0xa32eb291B492802D0D896eB202840AfD5248Dd10',
  '0x87b676e7635a7c3fd99ce87c2fca91a657385973350ed01c1fe9e71b0b11688222e01a1f07ce55c0d15dfa42cf52ae8b74ee44fccb7293154f05b9049f95068d1b',
  '0x8086d265eaa3fac05607869603430a8Da0609Cdd',
  '0x53722cd063651751473306ca108234685880e03d3f6848f73527f1b6303be7555fe301ace8036f0a52cc5cd2c0e0a7d5ad5406322c787b51090b30768c095ad81c',
  '0x7281fA71CACE1D57C8377586672BFF7eaA60D51F',
  '0x3c3d8367b5b15c62bce52d00f3c0640c9dddb806385bce2fd6f7657744689e8a3e8368d55d982c03792d398d92429b2b37e8cad50457f87b960a18de448281601c',
  '0x6BEbc74FE5821502354F13350f1CB019208dF3ce',
  '0x0aa207166330341c797489cd8843f033c35f3a70bdd611e858b44900efef2cf22baa9ec961814feac692afbbf33c132fab476922ffdb0d2338a949169e29a7981b',
  '0xC479E03Da21dBe49F06477Caf315321BE37eFbac',
  '0x044fffcab18794ed14b6b6c0a2b59dc31c2da02fc73ab9fc13c5876d22d2c25d1639aa5827a750f3b46392a993240f758e276dca751e3b55a4f04bb691da99131b',
  '0x4E91CC438165DeE06fD3F3aDe172DfCB0d6fF515',
  '0x7776c6ee0728f8d4d3e3bfe31736201954f688a37bf5180c13564694c99a31602381b7c309b27c2eeca52f135b2300590899396ec73927920e42f70b249d9abe1c',
  '0x87f88A6cF7A839c4B7e43B6cd37daE28cABeF996',
  '0x9d411c5bd7c72eb446e449c0219769ec507c923d12571341da71146555f410647bed1683d8c872eee043f8bdf55146989a77694d5b81ce9dcd47df6d8dbc03a21c',
  '0x410b750A37dfe002Ea35f321Ad4F0E36839aa2bC',
  '0x66e82047dff53637b23fddc35a246252d8cbeaa1df1dbd0579a60acb6cedfba90b4070defd4aa3b309837f882a15cf7ea1af0a7c52826909b8959e82fe0c2ab41b',
  '0x846Fc2E54474805BB8bf06A39830fBBb1811C17D',
  '0x3ec257563e51f3ff16e56d78dd0b3ce9fcf5cdd547c7122e07b86eb7f19fe79144ff48133503aa42908286fd36d80d108b1c17af88e81352fda10897c1f5f0e51b',
  '0x4F6b90A03AD1d6708a1c0714049b1C91B3A7738f',
  '0x9231865376f781af243662045acf0acafefca410726c202bf2a250daee66c59a297ad54aa1d19d38826512a0b5f92a2e34a853e420fd45c9a3e4d54129a5dd6c1b',
  '0x411faCF6eb027c212f2176fd41d0C231693634e1',
  '0x5d6b056b8abd3684dc0bb6e94795ea8efa5d0bc767d1ced508dd05fb4d25e6d35482ce3b96d2fd83ed4cffeffd7ccea7c78b9767e5001dfdd38b312f21b090f51b',
  '0xAb7Eb929f1a07507d4Df1F11F0c9513f86Fbd3A0',
  '0xd5b8dc9232bae1192ea593b5d546f900dea76366ab9585035282491f64fb916a5995502f2bbd0a6b775c871e2662d4e8b8e99b58f54c25b63f702b71770a3a8e1b',
  '0x89A532887c59505819972d36f17d31B47a754D42',
  '0xa0108edca62c19b17c485c5ade46ee812108ed90fc57fa3a9a3828d507dbc6f27ed5073ba484b3d2398f4c089c00f38bfa1a83bd7c9fbc76e280e2b0b5de77471c',
  '0x4A93708804EC8778613BdbdDd722F030ef53E0FA',
  '0x249e4105028e146aabd60abdd5ac4bec3d61849ab6b6d2b79104cb29b236a2ed259d98799eca0ba869e8a8dd50db55e8ddfe21416925a8a9bd7f96d9c11ef37e1c',
  '0x2d39da38fE64d43F8e2A62683dEa0337EEa992a9',
  '0x27834ebedeffbf02cda61f89720cb85f75598635f82c0e08f23c36830ac961603342304b1046a5dc9cbbf33d4df0103d6076dce87db22048497a02eead7722631c',
  '0x411faCF6eb027c212f2176fd41d0C231693634e1',
  '0x5d6b056b8abd3684dc0bb6e94795ea8efa5d0bc767d1ced508dd05fb4d25e6d35482ce3b96d2fd83ed4cffeffd7ccea7c78b9767e5001dfdd38b312f21b090f51b',
  '0xEf3dC9512c84B55978E8823987538F3F3DA79d88',
  '0xe35a95b3b8f656d98a511fd273e067868da7410e20687076b8b56800fc37a4dd783f3d8df215e72f6668d745d6955f67b277d6dfafaa93b334f685f14155af771b',
  '0xAb7Eb929f1a07507d4Df1F11F0c9513f86Fbd3A0',
  '0xd5b8dc9232bae1192ea593b5d546f900dea76366ab9585035282491f64fb916a5995502f2bbd0a6b775c871e2662d4e8b8e99b58f54c25b63f702b71770a3a8e1b',
  '0x846Fc2E54474805BB8bf06A39830fBBb1811C17D',
  '0x3ec257563e51f3ff16e56d78dd0b3ce9fcf5cdd547c7122e07b86eb7f19fe79144ff48133503aa42908286fd36d80d108b1c17af88e81352fda10897c1f5f0e51b',
  '0xEf3dC9512c84B55978E8823987538F3F3DA79d88',
  '0xe35a95b3b8f656d98a511fd273e067868da7410e20687076b8b56800fc37a4dd783f3d8df215e72f6668d745d6955f67b277d6dfafaa93b334f685f14155af771b',
  '0xBE0f21907d19714E60af99a4A28d027df3dE0abb',
  '0x44e1b0dd7ab5d5bd1467e2b8a7da21674731626092cbe5fed743ba251723198f33f38bbc253ab4e51bd5cdb3874e7579c81f0b08ab0cade3d1332d83610fdaff1b',
  '0xf8105eF3EA823fC6816e1AE1dB53B1094C837841',
  '0xc8024c659a54afa140936a37abee171462048418913a2a818087a88a5956df36139f0ecb5c8372dbe96f5173f4b3bae7af0259a279123ef234a66035c233f4471b',
  '0x9c9D341658cd8bE9023c8b6B6cd2179c720538a0',
  '0x1ea97f27e5b13e2d8bdbed7cbeb0e1853f3894e989682254ee3c5608145ee2085c0424e85d9bd8291a6c9c1c2a32d1519852702c3a2e82009730d418a6590b7a1c',
  '0x2C412a870AD2e2801018E57c8967f2CfDE01c9Bd',
  '0x41fc0fac604806f30b68853ee187cf8a968d07ce64118c6ea5ef008d81447d3d5667c242df7942756e6b48f09316f287cc465b4f391bcf3b95735d02638e35871b',
  '0x88dc43849D6656A829Db06411fd6080122e44960',
  '0x4d5599d33671b36d794699beb00d2364e4e5847737a3b2161401997254de6ceb30d1f98bd796124958f9d7be9578f6a090e51b3f9fac3f5a2f04a79526efd38a1c',
  '0xBF8CdBeedD1e5c06C20C60C926c42F5b37ff2a92',
  '0x921364bb6d8d8bcd031c02f9592df822ea8370b6e7ee94925441c7dc9c0efc5d2071023dff5968e512224f5c58f96c0bd10cade91723c675f7be6bb2c4fc62ab1b',
  '0xD63b1828B35D1F4075Aa7F8a32D69c87795AA8D1',
  '0x0f47403896f208f7c853b647b1602de0d94c9da080d1379698b1447ac12c2ff322cd86e96fe36919086808664e1125ff7776449ac4ea885b51f892a90540b25a1c',
  '0xEC225a1Fd31603790f5125Ab5621E80D8047E901',
  '0x9a780b1d91177e612dd2d98cde8d76e90b836ea2f1cecf83b75f92cbf752d07602467a0344dd1d0243e3b5ccd04f92f51607ba50176b7e8f8733ab7465f22a691b',
  '0x57648447820f4a8526F4Ca52E8a36A7a300860e5',
  '0x7ae6e773997d5eb7b370135a2df89ed579868966424343203788d9b304a922c817a6401df8a815188bd013bc281f7bc32f47e716c8e03179160c0bc4cf8f4b381c',
  '0x3Ab62BaFACbb8030CCa852924b41aD3aF7919a41',
  '0xb988a1b8df623f84ee467b6aaf19d22e8554c4305a162a9f432fb20b0991fd947fb54a5274c0bef0aacb57fdd074b65838438b655b26634e27aee0ab1b2449f51b',
  '0xf026EE4353dBFA0AF713a6D42C03dAcB7F07A9A5',
  '0x929ee408ee29b24a15c640338feb1e5283de6aac806fcdad8bc0442a640009311c6cacf58338457c16d29808a5b6648b863c371fa0e58713c2762028f01577221c',
  '0x63eC40ffD185e7DE69f0922478f3Ad98cbeeDE9A',
  '0xfbc66452d92e4fe9cad60c315276f10f178d56e0305aa156ca6a14d5fde15395681b1a3dc0f8798acd7c2cdbd625cdfa276e351d876d51d64e7c958618c7cb361b',
  '0x350ca114aB8E925B1B468c062f6bCbcE843562cc',
  '0xf359125676464c37797d72a47cab79892b0c5de1181a5e0422b7e084f5b98c343875ec67d7d26ec8e07f66a0306a6395a915d112715d90701dea1ed0cb4ec3111b',
  '0x81083eE7CAC88d4ae3201B16D7D0E35F120C7795',
  '0xef3fc514759aca7fe788220b2e8084081e8701d5b4ed6650042cce4aad0efdd30a1d5031d8dc86734e2f4e55ae58a1ac7d6e96f1309f3c0b9cddb75b4509ebae1c',
  '0xd024c93588fB2fC5Da321eba704d2302D2c9443A',
  '0x8d44e26e8f182e284ac069bc1d92f8643b82c28f99a011f9c651a878b9bb9911577fc14c7dec38c5cc2d20bb052a64780c8ff428bf4b82003e5ffbab1250bf7f1c',
  '0x601b6bD68a2Cb72b647aFdf237d6D3eE2316b256',
  '0x698d9a9162613dd9668cf9c3b0aac39a621b60db70d4bccf2f5f6f18d87723076f065b2f68eb7f7fb6e46d886be61e8102897688258ebb7c2b645dd35d91f65c1c',
  '0xd1FaD074908E2E8C081660f7F002016b440B72BC',
  '0x98b37608f8243ee0bf963f2e5015e6e0ba12fee6979730c2a21d86b42c46cfbf2ac6d123f6c592687042292c2230d7a978cc5d1fed2ce5c961b335950c9576601b',
  '0xF4D631fa4CB9322366bD5eBC25eA94dFCe1DDf09',
  '0xce41e6d2258178a793b5008719faa3f26a407a2a764b3827e57fa7cd398329cb6061cecfefb34c5a5cf5cfdf8b41f6898a03c5a8c7a81a651f1ed0c48e6253531c',
  '0x04453C4a56c9eAddf4141Fb64365cc69c2438Fc4',
  '0x1fb99804c21f4beda9688321fc450ee9708a00b1cbc6399474e2ae2fbb414fb07388d3347757ab296f8c289bfccd0b854fd241f50a685ee40cd99429d15072841b',
  '0xFDD71c059D3b781435F9beD3ea5ba57C5252dB1C',
  '0x7b7487c4021ecb1cca8d7de7b2d2e17c110ed8b799651fb0f2f40484d1eba8db531fd725e4d6eecedcffa1152b21594fbdcf039f375b9c3eda4389e41835d6101b',
  '0x0Edfa76A60D989B8911C8E9E949a9854B0607fE5',
  '0x6036f5bd879499c8a1170bd349f43ccf63a5e47ecf3456db7b5e0a21e5149be25e02a0162d9a4d7bf1b924b9e84d2a6dea73714b9966b693e81448a1c8de017f1c',
  '0x89A532887c59505819972d36f17d31B47a754D42',
  '0xa0108edca62c19b17c485c5ade46ee812108ed90fc57fa3a9a3828d507dbc6f27ed5073ba484b3d2398f4c089c00f38bfa1a83bd7c9fbc76e280e2b0b5de77471c',
  '0x4A93708804EC8778613BdbdDd722F030ef53E0FA',
  '0x249e4105028e146aabd60abdd5ac4bec3d61849ab6b6d2b79104cb29b236a2ed259d98799eca0ba869e8a8dd50db55e8ddfe21416925a8a9bd7f96d9c11ef37e1c',
  '0x2d39da38fE64d43F8e2A62683dEa0337EEa992a9',
  '0x27834ebedeffbf02cda61f89720cb85f75598635f82c0e08f23c36830ac961603342304b1046a5dc9cbbf33d4df0103d6076dce87db22048497a02eead7722631c',
  '0x411faCF6eb027c212f2176fd41d0C231693634e1',
  '0x5d6b056b8abd3684dc0bb6e94795ea8efa5d0bc767d1ced508dd05fb4d25e6d35482ce3b96d2fd83ed4cffeffd7ccea7c78b9767e5001dfdd38b312f21b090f51b',
  '0xEf3dC9512c84B55978E8823987538F3F3DA79d88',
  '0xe35a95b3b8f656d98a511fd273e067868da7410e20687076b8b56800fc37a4dd783f3d8df215e72f6668d745d6955f67b277d6dfafaa93b334f685f14155af771b',
  '0xAb7Eb929f1a07507d4Df1F11F0c9513f86Fbd3A0',
  '0xd5b8dc9232bae1192ea593b5d546f900dea76366ab9585035282491f64fb916a5995502f2bbd0a6b775c871e2662d4e8b8e99b58f54c25b63f702b71770a3a8e1b',
  '0x9635b85B7DAdbc57550944156d97d8196C188d4e',
  '0x341cea08bd94eaad3101b7d64e5180c65ce3163a7151760698c3b6192b826f1148ce46f6c52fe74bf9a18dbd9e053d0a6e9c256d766fd3f1ae734594601ae2541c',
  '0x846Fc2E54474805BB8bf06A39830fBBb1811C17D',
  '0x3ec257563e51f3ff16e56d78dd0b3ce9fcf5cdd547c7122e07b86eb7f19fe79144ff48133503aa42908286fd36d80d108b1c17af88e81352fda10897c1f5f0e51b',
  '0x86979cbfBae1aa9707b51768cD13a0A99681B60E',
  '0x3fe82123a0b05160ff3a05dafc06dee75288eb89ea7c47385078a85217e310903102447bb84a251fa21a14f6f98b570d1feb5cd108a0cdf3e5d362b39f183eef1c',
  '0x2ad4510F4FeBc4386E9732D79E08c4A15d5e1758',
  '0x2ebc1b6cc720f8526440fc8f6bf2fc6d0a3f5103ed2e7c9900c69f5e95c951a926f6f0725cf7451495ba05888036d524f572cf2cc8a28621b924379be1a7e2ef1b',
  '0xEf3dC9512c84B55978E8823987538F3F3DA79d88',
  '0xe35a95b3b8f656d98a511fd273e067868da7410e20687076b8b56800fc37a4dd783f3d8df215e72f6668d745d6955f67b277d6dfafaa93b334f685f14155af771b',
  '0x18580aAf077a14CB71e46B6F5c129f875e5FE172',
  '0x00e87a629a1fc46aa8b72e3a03f397def4d2ba1d167fe37f2e63aadce179ffb35702e661a08451cdd447a4cf8fe83b229fdcf931cfde96f0d523677dfb6f19041b',
  '0xBE0f21907d19714E60af99a4A28d027df3dE0abb',
  '0x44e1b0dd7ab5d5bd1467e2b8a7da21674731626092cbe5fed743ba251723198f33f38bbc253ab4e51bd5cdb3874e7579c81f0b08ab0cade3d1332d83610fdaff1b',
  '0x8eC6d76B235B1c95a6BfCbe4C2d76D918548bf07',
  '0xd1a2f063bd8e7027c0d5911dbe77278ec4bff630344c8c1f9143b2db9dbf9dea3df830ada40a972360309d0566c27ff9b370cc8186bd3e3d06ee592ed0267a071c',
  '0x383d79DA46a14e50156EB3650eE34b1d7ED4Dc27',
  '0x150eb51912446509fba261b2cc501ba4031e31f074911aeaade1513378d11af3430caef12cc25f17df2c4287555d493e793ef4cefa2b80a5e863b4942b700b851b'
]
