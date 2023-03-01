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
	  else { document.getElementById("phase").innerHTML = "PUBLIC MINT | MAX " + maxPerTx + " PER WALLET"; document.getElementById("price").innerHTML = "COST 0.02Ξ EACH"; }
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
  '0x63836001339990ddf1f41e4828719f7458aaedbbdea41309a3d16a25d5a5e50034880fae2c360cf35468c308daa9ff8e907198ffd3af5464a9c4e86c5f4ccf451c',
  '0xc7CB413557E2E67adC3a18B653f562EF7d18e5D2',
  '0x01fce037bc7950bf5c6a2a912a802adc0eea361e4e72491e71fb859ad8c3ac290ab2afb0bd6e6cf9b5f97fd9f936aa8603c7a6bc175c3e5b8c7a47ef3bab800c1c',
  '0x02659749Ef7984256C4F2c6fd68a0DBd24E3b40d',
  '0x88ab4bb45e69d26421499ef8c069e27dcdd4428dd51a865800f9411fcc21051a1d21af9b4edd83779190e8d614e78f99dd52b37d27ce1309a012f9a5536df4511c',
  '0x447d93368e997B3595A66d5F844aAAdaE3782A3E',
  '0x75546a24df841ff5cc88f578e1dcbd5a6decc159ffc184d25bf5ad305084ea3e0efa5b078320f09f6cf1269a63e409ff7a8a4f46f521e580529b07d203eff6431b',
  '0x6CF7f0cF30B4C247873aEFbecfC68Bfa7a88F231',
  '0xf6e7e57b3d6af04de72490efa5de18fe50aff757f32763fe510dc5016965744b7e39f1243e8f1c467fcc4fae2a0caa26c398b30af9e081dfb0532c07380e442f1b',
  '0x6f2d9d44F5860E125B2848ef5C4EB172D7E48BF3',
  '0xceb6daad6ecfd21c588667d626687666a863dbc5edc8d833ddffd1585a3cf29e71b0b062bb9142b32b59ced1ea14125e4dff96a7f5adb0ef8877c5ebf72ad0bd1b',
  '0x34Ea5e3170f7D281487c936aAbe9c7632b41fe10',
  '0x1d903912323185ac504edc06132e3548ec04bfa1c82daf0ae8fc693c7e3219971097aafb531e2e46185564f279db382fe52f76af0df8c69190a8789f9091b37c1b',
  '0x41E67eE6990Aa063aa26c6c2D9eb43CD3467CdA3',
  '0xf448b5668f8f208538979379dcf9c58d73c5e6c9f4e9d90b5094c10128f8e4eb6224d1daeb60ad2b5b8d1811784691cc6a01729ac0a6e61c2a8c96742ccbfe451c',
  '0xf13DF95479B94Ea37191717301b2535dF9d1C9f1',
  '0xae4111a1fc8c8dece594b57a36b505ba0dc7b168306d31d3fd57569746721e3b7bb7fa086ded79c340aba82516540ca2594fafa467c5c294cc5a99a41c3a29161b',
  '0xa91EEe49d2Fea98f0C8F364e416ba66345579f0f',
  '0x3db1b93597e2f97759d47d45e4489e0485191a194b931d5bb35c5079eac4e4a3077288f737e0e062304e9a6e6e608f8dfbbeb5ed8b71a3b8d7380c1b19062e5f1b',
  '0x571918cE3e96D7D835F35BAE6Fd2d7197B7d770b',
  '0x82f3376d52ef654b0c5814dbf0225f7d2ef755dec94d326e1e8024f0bb52659a3cf1ce7650bec4b6f472088dfa564bfd0c01228cbabc8857378bdcecb87504821b',
  '0x229D70Bc1ca126F854Aa9DF814af1844495bc77A',
  '0x734a346c60183a2839f48bcff28298ba10fe343c3070e839ac35419e306065dd1642ab70f9c0d6a167903ab6d85a06bf45805fc063ae31b706d2ecb1dfcb23101b',
  '0xAB2b6E58A757c0888E89CBbB36630CdefAEAc1e8',
  '0x395d9eabf910f4520add5650cbec9644193f082d6249eab79c4dca004d9dabb13121bee7e310193c95e8f6e88ec30ad9b6af07176a4d59d8038d37f79868cd981b',
  '0xa2Be19D397Aa97A97f1c860eA450C5C3B17abE45',
  '0x2ad28fdfa7f5523537a3e2ddab8c1eca739aeb895ec168b6451514923758483057b5e6ef202ed8383a2ea0e72f6582fa45533b432aee7a542f2c27fb10e9d26a1b',
  '0xa32eb291B492802D0D896eB202840AfD5248Dd10',
  '0x160139ef7f581856f493933fdf979288590ff2a2892630500df67b8a7c9917fb32236359a9c86908dd75fe2aed848bcbbb3c33e93018a40e1a5f280ad17f5df51c',
  '0x8086d265eaa3fac05607869603430a8Da0609Cdd',
  '0xec3585a61402e72d710b443280ad8969df1407e8295b04729e7a5ee9c915a77a350bc9564da98d6e78cd72e3060ef58d4630b674061698fbc541e83fb0921c821b',
  '0x7281fA71CACE1D57C8377586672BFF7eaA60D51F',
  '0x5278d428f0de5735ab02e77cdb9fb0a75d6e053f803834ba824068e7afab12b76cb51935276ae5d525934e51e2368dd737f958ca9f8502077575c9e7c0bbff241c',
  '0x6BEbc74FE5821502354F13350f1CB019208dF3ce',
  '0xfc96360c4e17b4497919459760c374985270aa525114c5fbb88188a5d14badc0755454e6295bfe61fa7805cf30cf46fbb869a9a2d20bd68ba8eef6eca2b49c951b',
  '0xC479E03Da21dBe49F06477Caf315321BE37eFbac',
  '0x16d717d09f18143f7a1add35571f17eb12ab94012cc1b21a547b76b553f3c8d024f62e1941bc06342f2c7e29f17bd088561236117356f0d01285dd2e0df192ed1b',
  '0x4E91CC438165DeE06fD3F3aDe172DfCB0d6fF515',
  '0xc193ab131c3e22fbecb0a98317dc92a060e918b48141e1b02aca6e487a53384b6d86a35d4574d4c6fc948b07e1222c4d89080eb6b5597d471751353cfe04f5741c',
  '0x87f88A6cF7A839c4B7e43B6cd37daE28cABeF996',
  '0x7941ac7e754c629873bc5c4cb3775b69d9e2bfbd610ab243818bf95035c4c58922cce43b9eb46151998e2859677b681caa84bec8f2a96c0899b5c5c4f3f50c681c',
  '0x410b750A37dfe002Ea35f321Ad4F0E36839aa2bC',
  '0xe3164857644c5790668e4b5fef041f54587b20c7f459eaa582e1872b83c268b660b6f1678c71e59f3ae305977521948e8918247f8203f876a50cc3a9b99e7a391c',
  '0x846Fc2E54474805BB8bf06A39830fBBb1811C17D',
  '0x001d2d56a6e2fa15927b06c02a27e96aaa0c2f0c6831b9e199b14e861dc5bc5334edc230a711d6175138e74d8a6542f6c5e4198f62dfce351fb68c59bc12edef1b',
  '0x4F6b90A03AD1d6708a1c0714049b1C91B3A7738f',
  '0x50c94d5f1eebbb34ce71637c0e4952a665043e84101417186460a13d673fba47622ac6d03baa309adfe2a534c02ab3dd3a9d844f6533fafa78138af30eca754c1c',
  '0x411faCF6eb027c212f2176fd41d0C231693634e1',
  '0x8ad847c06c309573648da2faafa5e269a24dc5b17bd768b9910c5dd56fa7b1fa38a884077f40774f61f676b1fd7628e0e1788e5a5bd826c0e14de1b7ba6244ff1c',
  '0xAb7Eb929f1a07507d4Df1F11F0c9513f86Fbd3A0',
  '0x7cf2292c81280462b2f3df502f7998d9a0f21e5c7f7c8ac91d6c41688bd2977a1a1f9285e0b84b147c39c5cd9168212adf03c6289e9c62246c87234664f689eb1c',
  '0x89A532887c59505819972d36f17d31B47a754D42',
  '0xcf24a9052c68b04ebfc1f4616c88d3d7a4df170d784cc4c5d056006c5c3d41b30a33d736fc6ad4f24bcefc9cfe28a0cdb029b739c6577ebf1825b85e5bbf6e841b',
  '0x4A93708804EC8778613BdbdDd722F030ef53E0FA',
  '0x6774f1ffbaf0997bd4f1d98d12d61cfed48317a442459fb3378a0ca7f16b82456760deb95aacb26eaba843d86b5a8c6ad0adf9eba9d75e997f2debee82c1ca7d1c',
  '0x2d39da38fE64d43F8e2A62683dEa0337EEa992a9',
  '0xceb1c78579bd7ba1418b75ae20b6effc8a1258034271c2e178384e0eaf1d433963868b22441265f9fe0f7d22acf914844c85162068958d7b5eccfe9c1b66cd7f1c',
  '0x411faCF6eb027c212f2176fd41d0C231693634e1',
  '0x8ad847c06c309573648da2faafa5e269a24dc5b17bd768b9910c5dd56fa7b1fa38a884077f40774f61f676b1fd7628e0e1788e5a5bd826c0e14de1b7ba6244ff1c',
  '0xEf3dC9512c84B55978E8823987538F3F3DA79d88',
  '0x829c0512f34a34932573c8514e2724e35c477226187392f5aee3735d417a515960b5aaae420b02a65227f147b7b76f394654cbc25cfa07722172489744c47a551b',
  '0xAb7Eb929f1a07507d4Df1F11F0c9513f86Fbd3A0',
  '0x7cf2292c81280462b2f3df502f7998d9a0f21e5c7f7c8ac91d6c41688bd2977a1a1f9285e0b84b147c39c5cd9168212adf03c6289e9c62246c87234664f689eb1c',
  '0x846Fc2E54474805BB8bf06A39830fBBb1811C17D',
  '0x001d2d56a6e2fa15927b06c02a27e96aaa0c2f0c6831b9e199b14e861dc5bc5334edc230a711d6175138e74d8a6542f6c5e4198f62dfce351fb68c59bc12edef1b',
  '0xEf3dC9512c84B55978E8823987538F3F3DA79d88',
  '0x829c0512f34a34932573c8514e2724e35c477226187392f5aee3735d417a515960b5aaae420b02a65227f147b7b76f394654cbc25cfa07722172489744c47a551b',
  '0xBE0f21907d19714E60af99a4A28d027df3dE0abb',
  '0x1ff47d359a7bac4b6d76d397fd2fd8190ce9439cac2f12126da69c4e2c37efe32d991825d9493a856d6adc66bda2c489064deecc7cb0704c3d1ba15ecd3ab8121b',
  '0xf8105eF3EA823fC6816e1AE1dB53B1094C837841',
  '0x1f9e8187e6e014db1dc8b4fd3857b8e202450345ea512f630b1467d3498f75bd61b4b49a4fc377803c1e11f427c2aa96717bc7b76151da2b33e6446b12fed6f81b',
  '0x9c9D341658cd8bE9023c8b6B6cd2179c720538a0',
  '0xf514e99c1e4b35c888298f4408ed031af14dfa889e4258fcea6d664485aed51b4f4c2c9a7cfb0cfd759a2421cf72d21b66589cde46459d07b48a711e2298e4461c',
  '0x2C412a870AD2e2801018E57c8967f2CfDE01c9Bd',
  '0x0bf174ebd66a37a6653731cfc21ffc498094bd94c85074ad995457960a7ae95073c4ea0c518261cb6c5b3ff2ca62973f87de3caf32a5a7e80e34c8eee1b9d6991b',
  '0x88dc43849D6656A829Db06411fd6080122e44960',
  '0x82b21d35d9862ef1eda03c163eb3c7e240abf65f481ac508b9c1b38e776f3e6c5aec2efad1cfd07ca1504b7cd3dd7ac6ee62d9eefa077398776195e81b9994c61c',
  '0xBF8CdBeedD1e5c06C20C60C926c42F5b37ff2a92',
  '0x16e5e811c7b0596768241e8d40a4da7a359897a0190ddedc9ed96867179cacd266021b14de2fe8fe4a51caba886365cefee866e29fd9a7e7be20ccffe465d2a01b',
  '0xD63b1828B35D1F4075Aa7F8a32D69c87795AA8D1',
  '0xf16210c1ff9793381a0d78d42f9ed1a044e8c594aa3d384688ae77db903d0bf76863b55c6786b907b265c3fefd97233aa4e0adbf879afcdc56b9c8fdf683529c1c',
  '0xEC225a1Fd31603790f5125Ab5621E80D8047E901',
  '0xbecc70791d1ea2aea9f6168712272e2ff5e15b0f7934a5aeb3367c2442bf75006580fe2cccb90c94a85c5adee5de3282eb03d6d943c4db8416a469d6e4e0b6a31b',
  '0x57648447820f4a8526F4Ca52E8a36A7a300860e5',
  '0x319a508eee971ed6399078807fa6cfd58fc7595e80a606ebd6e4f16ed08acde038b48f28f5a2d4c82a5d8e15835a11eaf8164f2beb11ca0744a73db96486a15a1b',
  '0x3Ab62BaFACbb8030CCa852924b41aD3aF7919a41',
  '0x251de7186fe2056cab8e3283dcc3dcfe43c11a99b1866fd237cbde86a4945ada32410a2db30935aa69a61d5a2acff5b89c7dd81eb2d3e4314718e21f92d695ec1b',
  '0xf026EE4353dBFA0AF713a6D42C03dAcB7F07A9A5',
  '0xcb7b6bef6c56af1ce682f99fbfdbfa23de7f31fbea67e6030526436c4b698acb6679d868c96f025c4ac339310cd7f13aeb01b5490ee942ca30bf83294fabc1ed1b',
  '0x63eC40ffD185e7DE69f0922478f3Ad98cbeeDE9A',
  '0x3be2a9ec33b438be44460a397085fdbe42c0cbc90023c50d3c4cc4e4a586174f41564788a3afd4788f7fb930ba04145485b3d75036e0a5b75c83094aa9d9d7171c',
  '0x350ca114aB8E925B1B468c062f6bCbcE843562cc',
  '0xa02be23b59f708d3d7e0337aa674e38205b95d9d7bc6928e1c43b09eb23aeba4061daf61f01ec3344199499813b98a09edbd1637c381f8799309e0013a9874661b',
  '0x81083eE7CAC88d4ae3201B16D7D0E35F120C7795',
  '0x38e50e4158b7af359aae2e040b8d5140c7006b9ecedc076630927a36e22878e62900d699fc43c52662af41b1968f7383051b67192fd9f3a376d8286a6ab3be381b',
  '0xd024c93588fB2fC5Da321eba704d2302D2c9443A',
  '0x5f9d09134a6c391a0318c6c4c57969fb0839b876a2518fb2a59298d6327f27eb08c01572fd133a3ec1d2a4a1397962a7be277968e4343e172f1f60a40613135c1c',
  '0x601b6bD68a2Cb72b647aFdf237d6D3eE2316b256',
  '0x4a5444c5550c83d3c25ff9d5904613318041c1173c9600d4ec7ae0dab8db4cf854ee1e7705dbdd7cbccbdae2c480a8a3d3ebbda400d7c3938aa9eb16f63bcffc1c',
  '0xd1FaD074908E2E8C081660f7F002016b440B72BC',
  '0x678d6e6d62ca6e99febdff9a2389849edefd21ac4e17e7f6995b3a714f8b1269399e24aa03e8fa384661d7ce208e615e115d3066b4d217644332c63b930be3531c',
  '0xF4D631fa4CB9322366bD5eBC25eA94dFCe1DDf09',
  '0x1bc45d85a2f8ddf8d53981b2008ae10ff6cf6dd9ef45c5cb8661911c0c05a93920fef414ede2cb05422bef3b94b2098c70286f1a0fc1f9a2df5a4b913a96c3d71c',
  '0x04453C4a56c9eAddf4141Fb64365cc69c2438Fc4',
  '0x36c0df4c0b72fda97f63c75c0bb952dfc913ed2d994aef906499d5f6d9beb24a2dd71d7363d08ae4e19a0f283811cb04b1fd89b6fe6bdfc867b12021ebe228aa1b',
  '0xFDD71c059D3b781435F9beD3ea5ba57C5252dB1C',
  '0xcb2ebada64adbf0d2ea676a5365be6e0676d78d1adeb162216f0fe9262c8980d21dd9ad0069ab3f7d26e840e0ed6984607ee46451579664faf8ee07c2ad535641c',
  '0x0Edfa76A60D989B8911C8E9E949a9854B0607fE5',
  '0xf3ec026a18fbca77001bd3c531a1a3a605df64ab7b15e460e61ea909c7558e8844ffcaeac5f81472b2cc3255b2b19c000fb1fe6580f04bd454b0a34def69ca741b',
  '0x89A532887c59505819972d36f17d31B47a754D42',
  '0xcf24a9052c68b04ebfc1f4616c88d3d7a4df170d784cc4c5d056006c5c3d41b30a33d736fc6ad4f24bcefc9cfe28a0cdb029b739c6577ebf1825b85e5bbf6e841b',
  '0x4A93708804EC8778613BdbdDd722F030ef53E0FA',
  '0x6774f1ffbaf0997bd4f1d98d12d61cfed48317a442459fb3378a0ca7f16b82456760deb95aacb26eaba843d86b5a8c6ad0adf9eba9d75e997f2debee82c1ca7d1c',
  '0x2d39da38fE64d43F8e2A62683dEa0337EEa992a9',
  '0xceb1c78579bd7ba1418b75ae20b6effc8a1258034271c2e178384e0eaf1d433963868b22441265f9fe0f7d22acf914844c85162068958d7b5eccfe9c1b66cd7f1c',
  '0x411faCF6eb027c212f2176fd41d0C231693634e1',
  '0x8ad847c06c309573648da2faafa5e269a24dc5b17bd768b9910c5dd56fa7b1fa38a884077f40774f61f676b1fd7628e0e1788e5a5bd826c0e14de1b7ba6244ff1c',
  '0xEf3dC9512c84B55978E8823987538F3F3DA79d88',
  '0x829c0512f34a34932573c8514e2724e35c477226187392f5aee3735d417a515960b5aaae420b02a65227f147b7b76f394654cbc25cfa07722172489744c47a551b',
  '0xAb7Eb929f1a07507d4Df1F11F0c9513f86Fbd3A0',
  '0x7cf2292c81280462b2f3df502f7998d9a0f21e5c7f7c8ac91d6c41688bd2977a1a1f9285e0b84b147c39c5cd9168212adf03c6289e9c62246c87234664f689eb1c',
  '0x9635b85B7DAdbc57550944156d97d8196C188d4e',
  '0xaf401d48110ea62dcb3e1bf25d953f3bf0b7d94af7559a01ae43231f57c9d60e4af66ec6043dcbedfcd3b3323a8112c9a05bed8c8251f9e48ad8d284ed7d12b81c',
  '0x846Fc2E54474805BB8bf06A39830fBBb1811C17D',
  '0x001d2d56a6e2fa15927b06c02a27e96aaa0c2f0c6831b9e199b14e861dc5bc5334edc230a711d6175138e74d8a6542f6c5e4198f62dfce351fb68c59bc12edef1b',
  '0x86979cbfBae1aa9707b51768cD13a0A99681B60E',
  '0xe2b88cae793123f3185bfb8ee59958b0f1811a3b8db9432ed9f8d9ec3960370359eda1614c3ad4f5b34161f022b008875206a61e05a34eb46d3d09e7a1686af11c',
  '0x2ad4510F4FeBc4386E9732D79E08c4A15d5e1758',
  '0x0f22503837452196240469097a8d36524b8286bdd04d113a49ff2eab1080f91c58e86230f311ffd3279dd370e7201769362bfeb048afb6afe014d9acfe4e596d1c',
  '0xEf3dC9512c84B55978E8823987538F3F3DA79d88',
  '0x829c0512f34a34932573c8514e2724e35c477226187392f5aee3735d417a515960b5aaae420b02a65227f147b7b76f394654cbc25cfa07722172489744c47a551b',
  '0x18580aAf077a14CB71e46B6F5c129f875e5FE172',
  '0xd131a9d61d1e3db6c42b19479cf6bb62109fd8b3b4878909db19da2ac745d8bb7a4cbe640c8b98b06f06a11d7c01c87e146ec8a1449f44dadff00b20634e30381b',
  '0xBE0f21907d19714E60af99a4A28d027df3dE0abb',
  '0x1ff47d359a7bac4b6d76d397fd2fd8190ce9439cac2f12126da69c4e2c37efe32d991825d9493a856d6adc66bda2c489064deecc7cb0704c3d1ba15ecd3ab8121b',
  '0x8eC6d76B235B1c95a6BfCbe4C2d76D918548bf07',
  '0xe203ea37bee35bd65f710931ccfd59ca190d424805046bd03a95dd97db566907658f6be65989f476056f74fec51c0d38868b09e9c9dec53b3e0e3a83f8768e2f1b',
  '0x383d79DA46a14e50156EB3650eE34b1d7ED4Dc27',
  '0x9d67c7842d7efbeb174058b135374a7d3ed34655f4904c9dc8d9f98e3247b10b77a668e6be6bb33fdf66a6d5f94d8003e54c8404789310d6aee24f76b6f551021b',
  '0x939f196BD1d1b9B819Acee08B7e96308A051Bdc0',
  '0x956bcecb9c414a9c1c6d8c086c196ef9a1fc99b1a751a97b2f0eb08a0b15b58338d5c4d2020f750a9d5ac999136506c08b51bfe7520298ce9c4c3b22a4f972db1c',
  '0x3CB57E3cF8248079AcAe4c5fa813a3470A11f033',
  '0x68006a7e677abe43e35c1bf9afc861eeacab3552d2ee090fdcaa042e82586bb66824b10812d166b6b69efba8dda7ddcd2187b33515fdea91a133ebfa4f41ad661c',
  '0xab6c5ec226A3B5853374aea16Be5E0E31925c571',
  '0x562bcba44adb0728b058d648cd5c3c527f11abe03bfe86d7a9394451d8d29f942b3aa8c1373fff901076f6c8246f7bc77dcc48f8464ddd117fbda54024d9728c1b',
  '0xfD64191007f71C7025f300F64f37C8733D387e7c',
  '0x6944b3444133df9c79547a31efe9f5c27ea5abf352af006dfc678859d94587501e63757b4d5a99f6786480a8de12a909cac291c22e37c84791eca9df71b571471b',
  '0x47927D9eC0A18d32add10072bF510478eF3Dd3fF',
  '0x3de8eb6355e427c34e584a2e3551a37aa8afa0904fc5c7104606a7e427e28a293141f2abc0bccd3b4e15f42df619d41d388f7e5a23279aa92e33bbfb94fd25971c',
  '0xc6143bf3178Fe71724A4d69e3a0233639d23d298',
  '0x6c5f934db7b823e661efee0366aca2b9c4c7032a2b0655f2bf05fca3afbf457021328cf11b75f55f49226f9f590412782e92a73d46337f70a9309413955a1d9a1b',
  '0xb7F890197550BF6f87f4d1Ed92cC69A8BB32C04f',
  '0x30b12a0f27e70045dbc4890ca7d3bd37e2481a8b5c3fcdc72ee790dabd3b646579d441d02f03deeb36d197ccc25e49b26cb8593b5b341c7a37dd79d1dba3a8191c',
  '0xF55c99c9d79A08A41f1DCD508AaeaBD01BbeAb3A',
  '0xd656ed0abe89eae0da23f6b9055fa91ba78f24d4d19b73c508eff37cdb90528a1491d12d1679d3b4c52176914897638223307be21595af64fd6860109a1b825a1b',
  '0x1883d5d38Ad3E4B0Da8DE7A8E87cd0e393892c56',
  '0x400dcaa3ff5aa7fcbd3a4a4a7ef192951b3ea52058805dcf753f0c836230e18708114c0fab64f46d3f1adc62c7b4c8ca687e67e0d28469f987bea6c931f0dbfe1c',
  '0xBf0Df09e19b9dC175A3449494B9b198A948aC6A3',
  '0x736f82629885534316bc90b5f920c2a95da1cec2413ad374664666b647729a6c69eca56fef54765c808e28b786b846857528e00575928b0378ea5f91bd3deb0d1c',
  '0xFef65360f74e75337bAcfa184F60234fAac090b3',
  '0x10f8bec76b2efe052f4bbc92c7b34a50fa29b57b5bdbacc03c4462ccb2efb76e71d090b2157675abbd5b7ab61c8cc20d1720a23e2f054655b9d39414e1b391691b',
  '0x80a3f412B21786AA4A3F428692935aA846eD4135',
  '0xbca1a6c3b964bbec36af45f7f033319d58da3ceebb00d01524590aa4d3acc0ca0cd6ba7f65fd1d49ca6f8f3bc718c6e3a3f792ba6aacf4ab9ee3962a003b5a471b',
  '0x32F430bf55eF1823E918Db413E9DDe77521BdC99',
  '0xdea55436f8358be794b6f64c7c1a7f1f85139eafdbaf96b36319820827f6437657543d1890d0a9604bee6d43285d4b4dd3cfc317b4a8c3b512573fbde14523a41b',
  '0x77d6f5c54BBe2192281F7F49F673E786B0Fb88FC',
  '0xb6a27ec16f611c3fc6330b06b0a4dd689919746bad0466b80dcceb56cd69f81f4a4168587c598732534934047ea1b8c8c96d4b1656e58fa6f35a456b6acb76d71b',
  '0xcD28cd6A5b0cEb2ad7Caf3b2808293E90064b8A2',
  '0xeca60d8241b28bd48b1039331e349086506dd92cb3c12c4be534cc0f2489aef94b1d10f1a0a0e336fdc6875dc1fc5445633861cd78930db45ac62d484aa0b39f1c',
  '0x1eA771d816bB15EBdc2eE97D983e391Bc1103878',
  '0x99d29b36680af2ba3420f8ac6616cc2b1b6fe75d354971d0e72c92ce3742af357c5508d9d33602d38d90969fe3043b03462c25199574db3b2b093e077881499d1b',
  '0xb3924EcF19c2ef7fB7cE3ecDDD22ec96C77a3f64',
  '0xb7ec85a0e71d6b812b2dcede28fe4bec4ef46ee8488a1472675487ebba2a2ce00b5d36da3fdf87e8987d1e83e1d98bca14ea186a2d6336ec0bb70f8b802609321b',
  '0x02E4c2Bc24Ec89826B2915c129478C85E7aE9669',
  '0xf20ce2fd5553b7676289306c6aa5d7d998db730549c1601dcfdaafc2dba9db1f2f2418485435da7939817e3c5ea7fc21ab478f02e914bd4c337d720c6ddd4c9b1b',
  '0x4654D897C6732426C1b62846AE75616f2A594C9D',
  '0x0c9cc60bd7e595ddc1068cd372efa5354d2b094f7d30c6e216c2f519b92474175cc2f0e0e0c8de1a2d0bddb8705c65f0b9305a98af2c0c404799e14d462527d51c',
  '0x07D187d1b97c81AebFc4784E5E079B41a5a4cF35',
  '0x77cb749e4d8095b34e7083e843ba8fc5ff11c6b7c44b3fa04db4a3ad4745917b6fc4c0955728036311326d1d6c6067f8912e810c1575ee5a0bc9526a85baa3901b',
  '0x89A532887c59505819972d36f17d31B47a754D42',
  '0xcf24a9052c68b04ebfc1f4616c88d3d7a4df170d784cc4c5d056006c5c3d41b30a33d736fc6ad4f24bcefc9cfe28a0cdb029b739c6577ebf1825b85e5bbf6e841b',
  '0x4A93708804EC8778613BdbdDd722F030ef53E0FA',
  '0x6774f1ffbaf0997bd4f1d98d12d61cfed48317a442459fb3378a0ca7f16b82456760deb95aacb26eaba843d86b5a8c6ad0adf9eba9d75e997f2debee82c1ca7d1c',
  '0x5b6e4330ad93B8082d646f1684dcB32EC975289E',
  '0x3fb94e3b93eaf9629ac1c3c96dad5ee49f91d3348dec7ef8f5fe297d92b415c259d028aed09419f821e74f558c400dfccba8d16b2ca66155ed231555d1dfde901b',
  '0x2d39da38fE64d43F8e2A62683dEa0337EEa992a9',
  '0xceb1c78579bd7ba1418b75ae20b6effc8a1258034271c2e178384e0eaf1d433963868b22441265f9fe0f7d22acf914844c85162068958d7b5eccfe9c1b66cd7f1c',
  '0x411faCF6eb027c212f2176fd41d0C231693634e1',
  '0x8ad847c06c309573648da2faafa5e269a24dc5b17bd768b9910c5dd56fa7b1fa38a884077f40774f61f676b1fd7628e0e1788e5a5bd826c0e14de1b7ba6244ff1c',
  '0xdbf57E6780170019C61122259026C850218A6cF8',
  '0xf653c72d1ef11000d9f74c0341e94a094d0f3f7499a128a5b611fe851756e0a85526d7844e5f3df7f1b1c8954d8ddda1b501eaef0d3d8198442c162f0e7e38181c',
  '0xAb7Eb929f1a07507d4Df1F11F0c9513f86Fbd3A0',
  '0x7cf2292c81280462b2f3df502f7998d9a0f21e5c7f7c8ac91d6c41688bd2977a1a1f9285e0b84b147c39c5cd9168212adf03c6289e9c62246c87234664f689eb1c',
  '0x9635b85B7DAdbc57550944156d97d8196C188d4e',
  '0xaf401d48110ea62dcb3e1bf25d953f3bf0b7d94af7559a01ae43231f57c9d60e4af66ec6043dcbedfcd3b3323a8112c9a05bed8c8251f9e48ad8d284ed7d12b81c',
  '0x846Fc2E54474805BB8bf06A39830fBBb1811C17D',
  '0x001d2d56a6e2fa15927b06c02a27e96aaa0c2f0c6831b9e199b14e861dc5bc5334edc230a711d6175138e74d8a6542f6c5e4198f62dfce351fb68c59bc12edef1b',
  '0x86979cbfBae1aa9707b51768cD13a0A99681B60E',
  '0xe2b88cae793123f3185bfb8ee59958b0f1811a3b8db9432ed9f8d9ec3960370359eda1614c3ad4f5b34161f022b008875206a61e05a34eb46d3d09e7a1686af11c',
  '0x2ad4510F4FeBc4386E9732D79E08c4A15d5e1758',
  '0x0f22503837452196240469097a8d36524b8286bdd04d113a49ff2eab1080f91c58e86230f311ffd3279dd370e7201769362bfeb048afb6afe014d9acfe4e596d1c',
  '0xEf3dC9512c84B55978E8823987538F3F3DA79d88',
  '0x829c0512f34a34932573c8514e2724e35c477226187392f5aee3735d417a515960b5aaae420b02a65227f147b7b76f394654cbc25cfa07722172489744c47a551b',
  '0x18580aAf077a14CB71e46B6F5c129f875e5FE172',
  '0xd131a9d61d1e3db6c42b19479cf6bb62109fd8b3b4878909db19da2ac745d8bb7a4cbe640c8b98b06f06a11d7c01c87e146ec8a1449f44dadff00b20634e30381b',
  '0xBE0f21907d19714E60af99a4A28d027df3dE0abb',
  '0x1ff47d359a7bac4b6d76d397fd2fd8190ce9439cac2f12126da69c4e2c37efe32d991825d9493a856d6adc66bda2c489064deecc7cb0704c3d1ba15ecd3ab8121b',
  '0x99cb3e76E7B7Edb7818613AD617CE7AB77AE6C3d',
  '0x51cc0658399f0aba21b74ce317594dbf17805c3d22fa97983fc108e3c9b2b5265548b01e6cfa97f9f1da01a9df907abe56d33703bd9a46c68977f4f74bc0c52d1b',
  '0x004b6653D16A6defc070dd6fE9438a07145611bf',
  '0xd7542126ec52e694ba1a2f43d885a985a5e573c27b049901354de1c9bcf8457769c888221d22bb6923df6661c9a578f6ac113ff9c7c464b35d261c70dea353bc1b',
  '0x286B97fa07BAc09f22B95a91c7CD978E6334dec6',
  '0x1f4ecb4af5bf618194645a514d1e20955de58507164d9c24645e9590be3c4f0f684609556e8b54d5e3fc2f5048ce8939c42d622dec75ace48bc724d56d0b665f1c'
  ]
