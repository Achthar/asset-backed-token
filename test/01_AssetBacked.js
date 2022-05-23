/* global describe it before ethers */

const { assert, expect } = require('chai')
const { ethers, upgrades } = require('hardhat')
const { parseUnits } = require('ethers/lib/utils')
const { parse } = require('path')

describe('AssetBackedToken Test', async function () {
  let assetBackedToken
  let proxy

  before(async function () {
    const accounts = await ethers.getSigners()
    contractOwner = accounts[0]
    otherAccount = accounts[1]
    const AssetBackedToken = await ethers.getContractFactory('AssetBackedRequiem')

    proxy = await upgrades.deployProxy(AssetBackedToken, ["Test Token", "TT", parseUnits('1000000', 18)]);
    await proxy.deployed();

    assetBackedToken = await ethers.getContractAt('AssetBackedRequiem', proxy.address)

  })

  it('should provide correct ERC20 data', async () => {
    const name = await assetBackedToken.name()
    const symbol = await assetBackedToken.symbol()
    const decimals = await assetBackedToken.decimals()
    assert.equal(name, "Test Token")
    assert.equal(symbol, "TT")
    assert.equal(decimals, 18)
  })

  it('minting is restricted user-wise', async () => {
    await expect(assetBackedToken.connect(otherAccount).mint(otherAccount.address, '1000')).to.be.revertedWith( "Only minter can interact")
  })


  it('minting is possible if permissioned and block if amount exceeds cap', async () => {
    await assetBackedToken.setMinter(contractOwner.address, '10000')

    await assetBackedToken.mint(contractOwner.address, '10000')
    const amnt = await assetBackedToken.balanceOf(contractOwner.address)

    assert.equal(amnt.toString(), '10000')
    await expect(assetBackedToken.mint(contractOwner.address, '1')).to.be.revertedWith( "Minting amount exceeds minter cap")
 
 
  })

  it('minting is restricted supply-wise', async () => {
    await assetBackedToken.setMinter(contractOwner.address, parseUnits('1000001',18))

    await expect(assetBackedToken.mint(otherAccount.address, parseUnits('1000001',18))).to.be.revertedWith( "Minting amount exceeds minter cap")
  })

})
