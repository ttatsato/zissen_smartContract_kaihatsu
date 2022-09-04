pragma solidity ^0.8.0;

contract Greeter {

    string _greeting = "Hello World";

    address _owner;

    constructor() {
        _owner = msg.sender;
    }

    modifier onlyOwner() {
        require (
            msg.sender == _owner,
            "Ownable :caller is not the owner"
        );
        _;
    }

    function greet() external view returns (string memory) {
        return _greeting;
    }

    function setGreeting(string calldata greeting) external onlyOwner{
        _greeting = greeting;
    }

    function owner () public view returns(address) {
        return _owner;
    }
}
