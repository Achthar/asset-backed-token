const { ethers, upgrades } = require('hardhat')
const { parseUnits } = require('ethers/lib/utils');
const { getInitializerData } = require('@openzeppelin/hardhat-upgrades/dist/utils');


async function main() {

	const [deployer] = await ethers.getSigners();

	console.log("Deploying contracts with the account:", deployer.address);

	console.log("Account balance:", ethers.utils.formatEther(await deployer.getBalance()).toString());

	// We get the contract to deploy
	const AssetBackedToken = await ethers.getContractFactory('AssetBackedRequiem')

	const proxy = await upgrades.deployProxy(AssetBackedToken,
		[
			"Asset-Backed Requiem", // string memory name_,
			"ABREQ", // string memory symbol_,
			parseUnits('1000000', 18) // uint256 _max_total_supply
		]
	);
	await proxy.deployed();

	console.log("Proxy", proxy.address)
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});