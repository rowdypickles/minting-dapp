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
  '0xf04cffc1a511709a8c925f14d4d8348bf8631b49e89f4bd559619f6e90f297a1093ede0ca5b7b27fcbdc62c8854a4a4ebb945f95b6289d9e764a4d986c5644041c',
  '0xc7CB413557E2E67adC3a18B653f562EF7d18e5D2',
  '0xb5e49c15f114cc39d70d983a46fe675881883832aaa872b386a8cee3eb16eac51d40b8cf2d122c32889e3ba6c73ff481c0351bd0bb24118c4cea8e7facd680c31c',
  '0x02659749Ef7984256C4F2c6fd68a0DBd24E3b40d',
  '0x7cf1b3d6fdcea2a6c825d5f4f51f190968a3704e00c2e355a062311fa25fb784732e042d8ea7e6ca56bdd19a1e0a58abd05822e6041250c646b4061c4602d3d41b',
  '0x447d93368e997B3595A66d5F844aAAdaE3782A3E',
  '0x77990ba5083acadb6e5cebe6caccb1d98f5afd6739cb19cbf19fd87727a1b9ac27a905089d835fac5e1b1a3492f7814c34e922625e29e3fefc75c2f17b09631c1c',
  '0x6CF7f0cF30B4C247873aEFbecfC68Bfa7a88F231',
  '0x69c70286bd520e2de7cb36cb00ca2477a3469cc92fde2c7090c1930779985dd8263d597e3ff535f9009adaf1cfb20cd0c1c8c9f3dc0f6fb1c2ebaa613a7ee1a71c',
  '0x6f2d9d44F5860E125B2848ef5C4EB172D7E48BF3',
  '0x4e4a479bdda266b08b08d6d048fd24a75f48b611b3af18a6e94450f9db4911d77bb37b9a904cfd18dfdd2736900b3c65d4a85e7449056fe4798bfb003f45d93a1c',
  '0x34Ea5e3170f7D281487c936aAbe9c7632b41fe10',
  '0x16deaf54644cd90b4bede2deeddf82ac7f1fad800460ab0ff5749ac927d6ba371acdd3e878734f2e1cbfb890823ef1ff9c16ccf40ef781a27b47fe4b279fefd61b',
  '0x41E67eE6990Aa063aa26c6c2D9eb43CD3467CdA3',
  '0x9e3e7be0d89852170b9d28039aa91dfdb6648f4f5cec3b361723dc5b660ed5f12c193bd08d877c31042147287b2c50ccd0a5409eb5f0928ad41233afa4fa0c8f1b',
  '0xf13DF95479B94Ea37191717301b2535dF9d1C9f1',
  '0xabbdf07023c21905f2068afacba1d6eb73ac6221b1bdfbe769126244d0a573b558600be77b3b0d90ac78ea8be7e64f73952380cad1cbb7a2ea65ca5f2f6f46691b',
  '0xa91EEe49d2Fea98f0C8F364e416ba66345579f0f',
  '0xc281d9cf0d4438647c11247769a6af3d60958687c9606ad37c6d15bf59fe52c53bc9ca54162e200659df3fc2564a5a89e5a8f3b443699bc94cf268f644f212e11b',
  '0x571918cE3e96D7D835F35BAE6Fd2d7197B7d770b',
  '0x2581ea7b5a6b947e626717b82de29865b804baac7af1e5a1897f5e5b15a24e247457dad1fae592d115ef7ae07ed78b6507979cb25add1723f51666e7396640c51c',
  '0x229D70Bc1ca126F854Aa9DF814af1844495bc77A',
  '0xd752dbbf2b67c9555f08917ee7db4aa6f0ab9a2cf5edf7c04b9696e30f5b6fc2282e2b0fa4f0c5e499994c94b3fdf264a99474d0712e0335e61be3af21084ef81b',
  '0xAB2b6E58A757c0888E89CBbB36630CdefAEAc1e8',
  '0xcdc036c11e9db7358b38d08f71e5ab5929c3381c1dadac0ddb2d4af7962f7f197965e19760f96105c5ed79fd580b0ed544c2e706f82bab2bc2439541fa6b3e371b',
  '0xa2Be19D397Aa97A97f1c860eA450C5C3B17abE45',
  '0x33953092a2a80dd2b0a95dfd932f12f39920d29831aae7df42a4acbed34771cc2619b58bfe19966e8b44cb31f78228483903da884332965447f5c117bee95a081b',
  '0xa32eb291B492802D0D896eB202840AfD5248Dd10',
  '0xeaafaa24192b6f9829bf3c353265f872d075b2e1a82e9f1e86aafee4c76876127f68571984556b55ab26e13436a8c2384456aa1294713e101a42829192a0f5d31c',
  '0x8086d265eaa3fac05607869603430a8Da0609Cdd',
  '0x63427038c21dd2f22a3569217c71a0e21b4676d0069e3732b5cb34bd471afe423dc415c0dcc7ae7e7e08ee4014fa83753e738ee7d37ffc74dbfb96ea73c514121b',
  '0x7281fA71CACE1D57C8377586672BFF7eaA60D51F',
  '0x362dfa49b0cb8d56088ec6c78d410d1f8b3118870785df6cbd12262fd5882f243bd6f9e25443dee01159bd8e95e449c1e00352a847848a9589767f7d39dde2531c',
  '0x6BEbc74FE5821502354F13350f1CB019208dF3ce',
  '0xb1db7b7d8c33fcf0ec21bf14d931362f8e73c32de471e296fa4246b52c0440bc53b0bb7c9f63b62d03df386d53b938b0349d8eea6c34acd9c02e5727ba1326fe1c',
  '0xC479E03Da21dBe49F06477Caf315321BE37eFbac',
  '0x05210eb9102f94cc020fca9ce04a3e202b08e4e52518bf2f03f382daf418175f365654999998bd8e8c22ad737d072ced72f36ac14fef4f19c42fe3407e6fc9441c',
  '0x4E91CC438165DeE06fD3F3aDe172DfCB0d6fF515',
  '0x02321f4fbf5b812fb2d65844b2dbb2749129e6fa07bb36b4fa435410aa81028b35f8e8deb704d3bcac7f77f78d4bb8f3387dc85fe55d5aae2ce67a6ab880ba381c',
  '0x87f88A6cF7A839c4B7e43B6cd37daE28cABeF996',
  '0x3c725f56e6fc223f21ed3ec74e694216da41d344f3d34450f07f5fa6e2c8d7ee086cb4c3a16d471ea1b5a75cd1ce30a128357f2c20953679f7926a9482926e2c1b',
  '0x410b750A37dfe002Ea35f321Ad4F0E36839aa2bC',
  '0x8ebbf6ef996f249ec2b9c8bcf701d84c980ad8d1eac5a46a7a802ed332b36ff37d363472e53e395e1cc24b1deb1b18026ebf3133757f2bbbb31dcf2047f158ef1b',
  '0x846Fc2E54474805BB8bf06A39830fBBb1811C17D',
  '0x35743d986fe180843f5e09b18f7c2d744829d843fe304ddb750269138647f52d0877d9b92854aeb966fd108ce35e157664ca528216a14c4b0d10c17d82d04a6e1c',
  '0x4F6b90A03AD1d6708a1c0714049b1C91B3A7738f',
  '0xbfaa522f9a51c16a7cae07d6ec6fcf389c050cae1d91ca74030dde58e22fa7640db999620c63ebce0417f34712714dd2294777de6b393870b46929cb83a89a8b1b',
  '0x411faCF6eb027c212f2176fd41d0C231693634e1',
  '0x04e24446f9cf200ba3ca7b943d1ff34cf72bc7b09b8c741b7eaa35619be688f75fe17dcd1072e3a930b8669ccf3db37e979931e52909ab94c81c13584ea927ff1c',
  '0xAb7Eb929f1a07507d4Df1F11F0c9513f86Fbd3A0',
  '0x0ca1897d743dfad5489fd1496d3fcee5f95f4638844abb89820131ee2573dfd47aad14ab8e1aefe9d5439606c87577961bd4e31ff69d50a4e5695c0f457a335f1b',
  '0x89A532887c59505819972d36f17d31B47a754D42',
  '0x8cfa3204661d42896bc6174c85db1caac341948417c028c5aafa7a690d0591683701d2457d12f398877d94e9f42796f9408f40c27fa51ea37f5e1922e3a993961c',
  '0x4A93708804EC8778613BdbdDd722F030ef53E0FA',
  '0x48607a93b8597893fae10a540ad3b6c9626529fce5ce5e260f52ca886601acce404fd4ce6c5e1abfe7badb46f2638c569007cd2a2351ba0f84b75035a432214c1b',
  '0x2d39da38fE64d43F8e2A62683dEa0337EEa992a9',
  '0x76100fb646f0ddbacea388b5f3499dec74677d2cee1230cc9e4d0c80fca373714e0b73ec663eb4d9356251feb805fbcccb01741128ea16f901369d32cbee69d21b',
  '0x411faCF6eb027c212f2176fd41d0C231693634e1',
  '0x04e24446f9cf200ba3ca7b943d1ff34cf72bc7b09b8c741b7eaa35619be688f75fe17dcd1072e3a930b8669ccf3db37e979931e52909ab94c81c13584ea927ff1c',
  '0xEf3dC9512c84B55978E8823987538F3F3DA79d88',
  '0x76d196660cc85905b063ca8276307e883384488f6988a347be1f6514f105adc54b3eb891f9d29325ecec9e98b1f8eeb8c05b95f7a2c908dbdb75a392fab82b771c',
  '0xAb7Eb929f1a07507d4Df1F11F0c9513f86Fbd3A0',
  '0x0ca1897d743dfad5489fd1496d3fcee5f95f4638844abb89820131ee2573dfd47aad14ab8e1aefe9d5439606c87577961bd4e31ff69d50a4e5695c0f457a335f1b',
  '0x846Fc2E54474805BB8bf06A39830fBBb1811C17D',
  '0x35743d986fe180843f5e09b18f7c2d744829d843fe304ddb750269138647f52d0877d9b92854aeb966fd108ce35e157664ca528216a14c4b0d10c17d82d04a6e1c',
  '0xEf3dC9512c84B55978E8823987538F3F3DA79d88',
  '0x76d196660cc85905b063ca8276307e883384488f6988a347be1f6514f105adc54b3eb891f9d29325ecec9e98b1f8eeb8c05b95f7a2c908dbdb75a392fab82b771c',
  '0xBE0f21907d19714E60af99a4A28d027df3dE0abb',
  '0xcac569cd08e6381122cbf4989c71a148f41162d1747bc163355d1798917fe82c0050d7cfc7181ac8d7abe7613e9c8405ac5a73297b95e8daf99eb9c30d60648b1c',
  '0xf8105eF3EA823fC6816e1AE1dB53B1094C837841',
  '0x5b1301624fbbba9e5a806b654e77ec93ae63e3f35cf69594f10203738923ce8c692f5bc2c1d7a5827e0b09227720b901c11d2707e13a6c9055ef08c30246a4d51b',
  '0x9c9D341658cd8bE9023c8b6B6cd2179c720538a0',
  '0xe4ec220fe0ffacca278a3f0edbcedf41f1eea380ad5e312754276e60eab49f25777b0f80c8b4258ed63eb4c51d9ee40d1dcf63d5d224ecdb0a7f0aaeab7055611c',
  '0x2C412a870AD2e2801018E57c8967f2CfDE01c9Bd',
  '0x5515fb43839c6437caf666c8d27c331531da74723034df3b4d867d9a0dcafa8c33e6f4a86bb582a1d37ba7bc4cc2ddacf4f537c8cba8c07a96919e7cebde4cbc1b',
  '0x88dc43849D6656A829Db06411fd6080122e44960',
  '0xfd74664cee024163aa47134c45952fa92bfcfd472f3e0f2e9fc260f9a2b69cde4038a19be4dc114cb4999c2ab115d8e0655bd3f8f4094d5669ff85d348a35f411b',
  '0xBF8CdBeedD1e5c06C20C60C926c42F5b37ff2a92',
  '0xcecfb3f01ddad27756b98439fe9914d57dd5dea803382771cdf03c2377bd235575149bd7d83e810d95a3c48920cd1548fa9e3b0d3ae5f8bd7d0d23993c2c7f821c',
  '0xD63b1828B35D1F4075Aa7F8a32D69c87795AA8D1',
  '0xf53f18a45ad9ab6a6c4c300b797de920f8517af6cc65bbf0ba79948c1e7b6542342a140bbf39bb1206ae121f79762ec124bf3bdc064c689fe1d0172ab14b40e01b',
  '0xEC225a1Fd31603790f5125Ab5621E80D8047E901',
  '0xbfa596b5016d1850de6bf3b5180845de8285857b94309fca16db0fb925017cd66ada51cabdea80035e56f3cf96765e6b2cb233f94dec3e8456dbff45a23f91831b',
  '0x57648447820f4a8526F4Ca52E8a36A7a300860e5',
  '0x9d59ea6cd5a2f6ecd9810a4a1209e35ef34a2f876e5b0867700886c1b22624e041376c19cad1b99ce1fd3616b5650c181fc7b49de2a1325005e0b20d54de91f51c',
  '0x3Ab62BaFACbb8030CCa852924b41aD3aF7919a41',
  '0xfbfe7f4f8a4c6fbee51ee5cc0be2ce36313cf47043221fc0224895d53dd1b45d44196d426d0edd35e97319e7072b4b2928b4d9504b5b2039d1a8cd7311b548811b',
  '0xf026EE4353dBFA0AF713a6D42C03dAcB7F07A9A5',
  '0x9456319ffd2f5dd4b5d4e1afc18a9e74f461ed9a1d69a49343ac39be6a3fa5bb4d8aab490a27acf765424777b2b32e09b6ea222f6a51357238c750fab5cf2a4b1c',
  '0x63eC40ffD185e7DE69f0922478f3Ad98cbeeDE9A',
  '0x9a932be5fbf216091a8d0f458a6f33467fe56437cd1cc39601ee8e5e08a08dbb7e89c263c5eeaa0450adc787c1525008d877500ea4ac23c106b12d1a609bf6e11b',
  '0x350ca114aB8E925B1B468c062f6bCbcE843562cc',
  '0x933a3cd42b106720316afaa283032d9e89f0782d90a8353821602c0210aedcd367d74df2b211512ecc2454e64de8315b9dc8252ba84dfbc67b0a886dd3e0c7e91b',
  '0x81083eE7CAC88d4ae3201B16D7D0E35F120C7795',
  '0xc84ba4ffc460ac642d1cfffbc724efc5ea9c6d758d95d054fa648ee234447b234f3792dda214ec111ae57bf9f589152139d52ed789334ddc612846a11e7f96541c',
  '0xd024c93588fB2fC5Da321eba704d2302D2c9443A',
  '0x292de1f288f40063eec9186f644bbbb750e50e92e785431cd007bfb84a9c2022215a64b95cfd71a0fac120a17f76edc21c55ac2b086b223cbef9cb83253639101b',
  '0x601b6bD68a2Cb72b647aFdf237d6D3eE2316b256',
  '0x3b4b0b9733ed58a43119bf8100bc6c829c73d547fdf0f191930a50b8f7862573797df1bf666c4c1a21cac6339a4a0c496fe1ee355bd86a96dd0b3c9f49b327c71c',
  '0xd1FaD074908E2E8C081660f7F002016b440B72BC',
  '0x4a18c60b3a6427aba74407081a52af660b0dfe1e136ef891d1100fbe75b0659c24f6529b53ccf462862b7796a4a6bae90c2933a6dbd5b095e912d785ca42874d1c',
  '0xF4D631fa4CB9322366bD5eBC25eA94dFCe1DDf09',
  '0xdc8c1e91eb57c0f11d32fb9ee8a76f26a1ba4ab6ca7c1a118ffdf4be2ff188d30b438dfb63a77b40d591a5f5601da117192d9ff7186f61a3f91a94dfad005b151b',
  '0x04453C4a56c9eAddf4141Fb64365cc69c2438Fc4',
  '0x23043d3750a4bf308e3abf8822251681385b4ca9886c57619b11ca35092e58192059c6c7147709c9780f13f56556c06be880df189dccbdc4a10b23db064c11981c',
  '0xFDD71c059D3b781435F9beD3ea5ba57C5252dB1C',
  '0x3776b0e952aad9a5499c9a3608f6f25ecd6dfd511a21fbc39fff6ebc3730393d3c659e02641a342991b06825aefa11a21bf6ba290645b3f634a206c706bd3ed31b',
  '0x0Edfa76A60D989B8911C8E9E949a9854B0607fE5',
  '0x7ca486a4ebbdb000a662a350aaeb764ce6bcc918f29d402cad50eb57eb8f34fd5d4e250896fc019a2ac7601fe6b477940d86534d078c34b3b7ce9590ff562a4c1c',
  '0x89A532887c59505819972d36f17d31B47a754D42',
  '0x8cfa3204661d42896bc6174c85db1caac341948417c028c5aafa7a690d0591683701d2457d12f398877d94e9f42796f9408f40c27fa51ea37f5e1922e3a993961c',
  '0x4A93708804EC8778613BdbdDd722F030ef53E0FA',
  '0x48607a93b8597893fae10a540ad3b6c9626529fce5ce5e260f52ca886601acce404fd4ce6c5e1abfe7badb46f2638c569007cd2a2351ba0f84b75035a432214c1b',
  '0x2d39da38fE64d43F8e2A62683dEa0337EEa992a9',
  '0x76100fb646f0ddbacea388b5f3499dec74677d2cee1230cc9e4d0c80fca373714e0b73ec663eb4d9356251feb805fbcccb01741128ea16f901369d32cbee69d21b',
  '0x411faCF6eb027c212f2176fd41d0C231693634e1',
  '0x04e24446f9cf200ba3ca7b943d1ff34cf72bc7b09b8c741b7eaa35619be688f75fe17dcd1072e3a930b8669ccf3db37e979931e52909ab94c81c13584ea927ff1c',
  '0xEf3dC9512c84B55978E8823987538F3F3DA79d88',
  '0x76d196660cc85905b063ca8276307e883384488f6988a347be1f6514f105adc54b3eb891f9d29325ecec9e98b1f8eeb8c05b95f7a2c908dbdb75a392fab82b771c',
  '0xAb7Eb929f1a07507d4Df1F11F0c9513f86Fbd3A0',
  '0x0ca1897d743dfad5489fd1496d3fcee5f95f4638844abb89820131ee2573dfd47aad14ab8e1aefe9d5439606c87577961bd4e31ff69d50a4e5695c0f457a335f1b',
  '0x9635b85B7DAdbc57550944156d97d8196C188d4e',
  '0xccb6059d04c752b646bd1a9071f174e07cb0e6fff6b5a872f56070917d6e5f9c64f16c47ccc80d636ef78b4042970fcd58d8cbb75aa194ffbc33abe0eb1066251c',
  '0x846Fc2E54474805BB8bf06A39830fBBb1811C17D',
  '0x35743d986fe180843f5e09b18f7c2d744829d843fe304ddb750269138647f52d0877d9b92854aeb966fd108ce35e157664ca528216a14c4b0d10c17d82d04a6e1c',
  '0x86979cbfBae1aa9707b51768cD13a0A99681B60E',
  '0xf31c893f3cb935a3033ab28ef8698f55dc2caf126d7363009f8fd42ce6dfbc3136a560f4977cd742d2ac9595296cbaea675ff132d2b5692f25156a1a3cad87ca1c',
  '0x2ad4510F4FeBc4386E9732D79E08c4A15d5e1758',
  '0x110952b29988b73e1a5a20751877b68243f2083d195de6fa601ec177bb66d7bd22415b770b76e05232a8b176a125584a76b8a2aab4e3550c7bd8e56a144a55541b',
  '0xEf3dC9512c84B55978E8823987538F3F3DA79d88',
  '0x76d196660cc85905b063ca8276307e883384488f6988a347be1f6514f105adc54b3eb891f9d29325ecec9e98b1f8eeb8c05b95f7a2c908dbdb75a392fab82b771c',
  '0x18580aAf077a14CB71e46B6F5c129f875e5FE172',
  '0x122c7eb07e87c2fc3e54af951954b855ef652e9e680ef39d13c89bee6a794b97629122c7e1552f502c1d6aa48456efa59a4cc33f8be2d74fb7bc8c8fa06676e31c',
  '0xBE0f21907d19714E60af99a4A28d027df3dE0abb',
  '0xcac569cd08e6381122cbf4989c71a148f41162d1747bc163355d1798917fe82c0050d7cfc7181ac8d7abe7613e9c8405ac5a73297b95e8daf99eb9c30d60648b1c',
  '0x8eC6d76B235B1c95a6BfCbe4C2d76D918548bf07',
  '0x11c28e5acef4f99746affcb14de10ec13c006a01519980454cc00c263b11dccf240b771a1d4c24a6b4697900e48567f66c5a94328df0c21de5f99221735424f81c',
  '0x383d79DA46a14e50156EB3650eE34b1d7ED4Dc27',
  '0xa573be3c13c43632d33152e32b767250e43c37a0b73b8c2bb6d18e15aa0941970e44dd9ea6e390906a4758a1c9520fa3842e4ec8ce9ff928d811817e2b679b2a1b',
  '0x939f196BD1d1b9B819Acee08B7e96308A051Bdc0',
  '0x024fdafef7dca125d1f4fd1503197db6b9f2e7b8f3c9343ea99a6345fbf06fe147fb017c85cde5d6c3ac33c7bb3c42a8d2fb3775607892d91e566feb3c3fd2dc1c',
  '0x3CB57E3cF8248079AcAe4c5fa813a3470A11f033',
  '0x7367ec34cbf5a2b04d4e2314af9477196d180f146c4758babe14e3ee8256323601fc2e6b9c5c39c8d59863ec7b33ab5950edaa6725b8e4daf7a30df508cdbb091c',
  '0xab6c5ec226A3B5853374aea16Be5E0E31925c571',
  '0x75ba516fb600379c79920895f62d3a4fa0dfbc092ad6449f1f1023094525a1204748e93d27fcef31f146e158c366c8767cd01c4aef050c760da1a3e1ab60bc441c',
  '0xfD64191007f71C7025f300F64f37C8733D387e7c',
  '0xb4eb4ded49b14499aded6ee8312517109a6940450e6e8053b721fb45f8f846757f5f312e33fcd64c3aee245823d2302c7bad76d17b5fd2c889a7584ef3c470b81c',
  '0x47927D9eC0A18d32add10072bF510478eF3Dd3fF',
  '0xf6e7e695ecc8f2ad6a5adbb03facd22f592d13d833f8ef8d9839b1efb3dadd7418fb13de1784ff9e1f0b08f20ee4cd8a8ceb570bc751fa557523e272458218521b',
  '0xc6143bf3178Fe71724A4d69e3a0233639d23d298',
  '0x4af17d1609f15a34711a0d3bba5b667a70696eddfdac499ec356f9a674b6bbe701296f0840237ac5c98c5df7283a2451efe0b5b3a0d768550828a94fa78122b61c',
  '0xb7F890197550BF6f87f4d1Ed92cC69A8BB32C04f',
  '0x118950e2aa1921b78facd323482d382381eb5ca7340b923d48f56030ae61e3923bd6e7548579d562da0a35b94c755731657ea7102fbd70f7a58f0d876a115c1c1b',
  '0xF55c99c9d79A08A41f1DCD508AaeaBD01BbeAb3A',
  '0xd86c6ff5a7d2c1aef3c08cc19b84c5f3ae4f882bbf52321dd5630869e08d5d7f17a2a98ea11605752d6f2851255fa751865db1f34fb0d63aadd2acd2a5473ad71b',
  '0x1883d5d38Ad3E4B0Da8DE7A8E87cd0e393892c56',
  '0xc2dec17fdba3961704ec98dc6e97ffcb75f96aa5c8aed26e3ec309d66d721bbd7a58a826c9b68ab303f003dae1aff0815d3c812ecd136580665e3c068f833e561b',
  '0xBf0Df09e19b9dC175A3449494B9b198A948aC6A3',
  '0x2eb49839c3a39ffd83ee60c81332817f03a1b65d1f8e63e154a2921e5cd7d2515bc923c248e84ca367bac09ecbd7a84f689de2e1823b7788440a8f944761384c1c',
  '0xFef65360f74e75337bAcfa184F60234fAac090b3',
  '0x72a55de2317361dba7ebb5c4bc1602fcd8866cf3cb889bb556da7e70d45e7c672b8ceab073a5fb354411380ac7cbee63872f07d9dc0180b86197b81b77837a201c',
  '0x80a3f412B21786AA4A3F428692935aA846eD4135',
  '0x7e1e63d45f24ef57cf9904201329695b85f932c53d38a94baa483610264861c70c3abde4918ea4c06c07057275bbc0adfa171427cafbfc0da6aafd8b462e9e401b',
  '0x32F430bf55eF1823E918Db413E9DDe77521BdC99',
  '0xd472cf87095982d55ebd3c5f531d8442ccaec92ff4eb59a1f57f76023bba59115f900787ba123f27d681f0869d0cf9c4017be4a7308177048c75a865e3de65b41c',
  '0x77d6f5c54BBe2192281F7F49F673E786B0Fb88FC',
  '0xf2d6d854adb975979f061fdb1aa7d74a3b1026d55bd7cc20a63477a465fb903b3f11fcc7ed70f3a96cb80eaf4ebdefcd8b0d74f24db5af625d1101336418b2621c',
  '0xcD28cd6A5b0cEb2ad7Caf3b2808293E90064b8A2',
  '0xf70acd7bea18f3264a2a11f07fa71da806e64609f5e0fda371415fe511312606691a990ea35ff6a5fb3d7db5a7183b3ac261541ea7dd83ab8ab9339ec35ae2881b',
  '0x1eA771d816bB15EBdc2eE97D983e391Bc1103878',
  '0x9b29889c09dc5ed38688b2ef808fefa006fee183957d0f8c5075919c81c791b2708781d7f6db400739e972c3e2667a7e93e41db0c2bf523312cf8170e0d957161b',
  '0xb3924EcF19c2ef7fB7cE3ecDDD22ec96C77a3f64',
  '0x5141997b5465525564c29b01c447c989fedf1d78ad1758f31fb60710ae9210eb78a99903acc18fc8cd2143f8f55964fde24af9c39386c03f3c9f7330aaf28ee01c',
  '0x02E4c2Bc24Ec89826B2915c129478C85E7aE9669',
  '0xcb79b4489cfbc04f6946be656fe072df48c1d7d4410a1515df3999aa4476bec350a624589fba9bf94dca0aa3e575eae0e39fabe9d97fb9d85ffc42eff6341fe91c',
  '0x4654D897C6732426C1b62846AE75616f2A594C9D',
  '0xfd82158ca709741581cc2b260c919f7f96ef5f88df6aef63bbf827ba43fb3c3120b547b0f7c1c57da179464da5d66253ce90045bb5a70269636ea78349ec9df81c',
  '0x07D187d1b97c81AebFc4784E5E079B41a5a4cF35',
  '0xb6da6d9faf4e51b545aa92f757e5776b1986a40fd16c696fd7a767df4402f7796c2ef695e8fc913d222b8c4aa94b2d1479144b6d4ef6aee646facef98acbf61c1b',
  '0x89A532887c59505819972d36f17d31B47a754D42',
  '0x8cfa3204661d42896bc6174c85db1caac341948417c028c5aafa7a690d0591683701d2457d12f398877d94e9f42796f9408f40c27fa51ea37f5e1922e3a993961c',
  '0x4A93708804EC8778613BdbdDd722F030ef53E0FA',
  '0x48607a93b8597893fae10a540ad3b6c9626529fce5ce5e260f52ca886601acce404fd4ce6c5e1abfe7badb46f2638c569007cd2a2351ba0f84b75035a432214c1b',
  '0x5b6e4330ad93B8082d646f1684dcB32EC975289E',
  '0xf115f4f8ecf6dcea87aa82179e6f18ec5e6d8ec26f95e9c9b6991c9310d9e08c79a9b9736832312d0cab27d7ef73b26fd5915b166a0299c06d01e7898c7a34551b',
  '0x2d39da38fE64d43F8e2A62683dEa0337EEa992a9',
  '0x76100fb646f0ddbacea388b5f3499dec74677d2cee1230cc9e4d0c80fca373714e0b73ec663eb4d9356251feb805fbcccb01741128ea16f901369d32cbee69d21b',
  '0x411faCF6eb027c212f2176fd41d0C231693634e1',
  '0x04e24446f9cf200ba3ca7b943d1ff34cf72bc7b09b8c741b7eaa35619be688f75fe17dcd1072e3a930b8669ccf3db37e979931e52909ab94c81c13584ea927ff1c',
  '0xdbf57E6780170019C61122259026C850218A6cF8',
  '0xb0c0e48a5d0622943c20b495a006496a2754c5d17f2c1367f7c3cc81da6a5529038a7e3fe8e1addc744021e411277a8c9d046dbdf0a49d4a5bcd3d96f87d44b01c',
  '0xAb7Eb929f1a07507d4Df1F11F0c9513f86Fbd3A0',
  '0x0ca1897d743dfad5489fd1496d3fcee5f95f4638844abb89820131ee2573dfd47aad14ab8e1aefe9d5439606c87577961bd4e31ff69d50a4e5695c0f457a335f1b',
  '0x9635b85B7DAdbc57550944156d97d8196C188d4e',
  '0xccb6059d04c752b646bd1a9071f174e07cb0e6fff6b5a872f56070917d6e5f9c64f16c47ccc80d636ef78b4042970fcd58d8cbb75aa194ffbc33abe0eb1066251c',
  '0x846Fc2E54474805BB8bf06A39830fBBb1811C17D',
  '0x35743d986fe180843f5e09b18f7c2d744829d843fe304ddb750269138647f52d0877d9b92854aeb966fd108ce35e157664ca528216a14c4b0d10c17d82d04a6e1c',
  '0x86979cbfBae1aa9707b51768cD13a0A99681B60E',
  '0xf31c893f3cb935a3033ab28ef8698f55dc2caf126d7363009f8fd42ce6dfbc3136a560f4977cd742d2ac9595296cbaea675ff132d2b5692f25156a1a3cad87ca1c',
  '0x2ad4510F4FeBc4386E9732D79E08c4A15d5e1758',
  '0x110952b29988b73e1a5a20751877b68243f2083d195de6fa601ec177bb66d7bd22415b770b76e05232a8b176a125584a76b8a2aab4e3550c7bd8e56a144a55541b',
  '0xEf3dC9512c84B55978E8823987538F3F3DA79d88',
  '0x76d196660cc85905b063ca8276307e883384488f6988a347be1f6514f105adc54b3eb891f9d29325ecec9e98b1f8eeb8c05b95f7a2c908dbdb75a392fab82b771c',
  '0x18580aAf077a14CB71e46B6F5c129f875e5FE172',
  '0x122c7eb07e87c2fc3e54af951954b855ef652e9e680ef39d13c89bee6a794b97629122c7e1552f502c1d6aa48456efa59a4cc33f8be2d74fb7bc8c8fa06676e31c',
  '0xBE0f21907d19714E60af99a4A28d027df3dE0abb',
  '0xcac569cd08e6381122cbf4989c71a148f41162d1747bc163355d1798917fe82c0050d7cfc7181ac8d7abe7613e9c8405ac5a73297b95e8daf99eb9c30d60648b1c',
  '0x99cb3e76E7B7Edb7818613AD617CE7AB77AE6C3d',
  '0xc323e387a9160298ee0368e8d41c7884e2290046f3f63de568330c0f7a278f1d45a63273e21f4c29b16dcef4a53a24a6aed7ddf0a342eef3b7c417a2f10cc93f1b',
  '0x004b6653D16A6defc070dd6fE9438a07145611bf',
  '0x6aaf05997efd3822116d11c37b645c812c84572d5bff078d671c2a6f01d0ee757d789d44aa7812df4b3c5fb9302ef15214d6c566d9e7836fc5b70320d7c08f681b'
  ]
