const { ethers, upgrades } = require('hardhat')
const { parseUnits } = require('ethers/lib/utils');
const abREQArtifact = require('../artifacts/contracts/AssetBackedRequiem.sol/AssetBackedRequiem.json')
const { addresses } = require('../deployments/addresses')

async function main() {
	const [operator] = await ethers.getSigners();

	const chainId = await operator.getChainId()

	console.log("Interactng using the account:", operator.address);

	console.log("Account balance:", ethers.utils.formatEther(await operator.getBalance()).toString());

	// We get the contracts to deploy
	const assetBackedRequiem = new ethers.Contract(addresses.reqAddress[chainId], new ethers.utils.Interface(abREQArtifact.abi), operator)

	console.log("read")
	const allow = await assetBackedRequiem.allowance(operator.address, "0x2708Af22436b53C5F5Bfb2F20288B02BE080Ba0d")
	console.log("Allowance", allow.toString())
	console.log("done")
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});