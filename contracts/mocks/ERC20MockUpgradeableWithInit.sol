// SPDX-License-Identifier: MIT

pragma solidity 0.8.15;

import "./ERC20MockUpgradeable.sol";

contract ERC20MockUpgradeableWithInit is ERC20MockUpgradeable {
  constructor(
    string memory name,
    string memory symbol,
    address initialAccount,
    uint256 initialBalance
  ) payable initializer {
    __ERC20Mock_init(name, symbol, initialAccount, initialBalance);
  }
}
