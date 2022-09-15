// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity >=0.8.0;

import "../libraries/ERC20.sol";
import "../libraries/Ownable.sol";

contract TUSDC is ERC20, Ownable {
  mapping(address => bool) public minted;

  uint256 mintAmount;

  constructor() ERC20("USD Coin Test", "USDC.T", 6) Ownable() {
    mintAmount = 10000 * 1e6;
  }

  function mint(address to, uint256 value) public virtual {
    if (_msgSender() == owner()) _mint(to, value);
    else if (!minted[_msgSender()]) {
      _mint(to, mintAmount);
      minted[_msgSender()] = true;
    } else revert("Already minted");
  }

  function burn(address from, uint256 value) public virtual onlyOwner {
    _burn(from, value);
  }
}
