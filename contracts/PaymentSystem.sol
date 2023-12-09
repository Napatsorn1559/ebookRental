// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PaymentSystem {
    function makePayment( address _recipient, uint _amount) public payable {
        require(msg.value == _amount, "Invalid payment");
        (bool success, ) = _recipient.call{ value : msg.value }("");
        require(success, "Payment failed");
    }
}