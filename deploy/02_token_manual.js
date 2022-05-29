const { ethers, upgrades } = require('hardhat')
const { parseUnits } = require('ethers/lib/utils');
const { getInitializerData } = require('@openzeppelin/hardhat-upgrades/dist/utils');


async function main() {

	const [deployer] = await ethers.getSigners();

	console.log("Deploying contracts with the account:", deployer.address);

	console.log("Account balance:", ethers.utils.formatEther(await deployer.getBalance()).toString());

	// We get the contracts to deploy
	const AssetBackedRequiem = await ethers.getContractFactory('AssetBackedRequiem')
	const TransparentUpgradeableProxy = await ethers.getContractFactory('TransparentUpgradeableProxy')
	const ProxyAdmin = await ethers.getContractFactory('ProxyAdmin')

	console.log("deploy Admin")
	const admin = await ProxyAdmin.deploy()

	console.log("deploy ABREQ")
	const abREQ = await AssetBackedRequiem.deploy()

	console.log("init ABREQ")
	await abREQ.initialize(
		"Asset-Backed Requiem", // string memory name_,
		"ABREQ", // string memory symbol_,
		parseUnits('1000000', 18) // uint256 _max_total_supply

	);

	console.log("deploy Proxy")
	const proxy = await TransparentUpgradeableProxy.deploy(abREQ.address, admin.address, Buffer.from(""))

	console.log("abREQ", abREQ.address)
	console.log("Admin", admin.address)
	console.log("Proxy", proxy.address)

}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});