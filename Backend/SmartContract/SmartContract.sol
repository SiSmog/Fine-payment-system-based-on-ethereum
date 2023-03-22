import "hardhat/console.sol";
pragma solidity ^0.8.0;

contract PFA {
    mapping(string => uint256) public registrations;
    address payable private owner;
    address payable private sender;

    event registered(string hash,uint _value);
    event paid(string hash);

    constructor() {
        console.log("Owner contract deployed by:", msg.sender);
        owner = payable(msg.sender); // 'msg.sender' is sender of current call, contract deployer for a constructor
    }

    function register(string memory key, uint256 value) public {
        require(msg.sender == owner, "Only owner can register");
        registrations[key] = value;
        emit registered(key,value);
    }

    function pay(string memory key) public payable {
        require(msg.value > 0, "No ether sent");
        require(registrations[key]>0, "No fine");
        require(msg.value >= registrations[key], "No enough ether "); //7ata na3erfou kifeh transfer mich ikoun mil lien  donc 5tarna inou ikoun == mich >=
        if(msg.value > registrations[key]){
            uint256 rest = 0;
            rest = msg.value - registrations[key];
            owner.transfer(registrations[key]);
            payable(msg.sender).transfer(rest);
        }
        registrations[key] = 0;
        emit paid(key);
    }

    function getRegistrationValue(string memory key) public view returns (uint256)
    {
        return registrations[key];
    }
}