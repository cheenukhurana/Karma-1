// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./TokenWallet.sol";
import "hardhat/console.sol";

contract Charity is  TokenWallet, ERC20{

    using SafeMath for uint256;

    address public constant karmaOwner = 0x453b0255FB8aC91FA5D6606D1647DF201FA6c7d5; // This is an Alchemy Polygon Mumbai Address

    constructor() ERC20 ("KarmaCoin", "Karma"){
    }

    mapping(address => uint256) public KarmaBalance;


    function depositMATIC() public payable{
    balances[msg.sender][bytes32("MATIC")] = balances[msg.sender][bytes32("MATIC")].add(msg.value);
    }

    function withdrawMATIC(uint256 amount) public {
        require(balances[msg.sender]["MATIC"] >= amount, "Insufficient balance");
        balances[msg.sender][bytes32("MATIC")] = balances[msg.sender][bytes32("MATIC")].sub(amount);
      //  msg.sender.call{value:amount}("");
    }

    function sendCharity(address to, uint256 amount) public {
        require(to == karmaOwner, "You can only send charity to the charity address");
        require(balances[msg.sender]["MATIC"] >= 1, "The sender has to have at least 1 MATIC in his account");
        require(amount >= 1, "The minimum charity amount we accept is 1 MATIC!");
        
        balances[msg.sender]["MATIC"] = balances[msg.sender]["MATIC"].sub(amount);
        balances[to]["MATIC"] = balances[to]["MATIC"].add(amount);

        KarmaBalance[msg.sender] = KarmaBalance[msg.sender].add(amount);

        emit Transfer(msg.sender, to, amount);
    }



}