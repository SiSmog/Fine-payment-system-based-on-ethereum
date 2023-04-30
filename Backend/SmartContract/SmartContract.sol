pragma solidity ^0.8.0;

contract PFA {
    mapping(bytes => uint256) public tickets;
    address payable private owner;
    address payable private sender;

    event registered(bytes hash,uint _value);
    event paid(bytes hash);

    constructor() {
        owner = payable(msg.sender); 
    }

    function registerTicket(bytes memory key, uint256 value) public {
        require(msg.sender == owner, "Only owner can register");
        tickets[key] = value;
        emit registered(key,value);
    }

    function pay(bytes memory key) public payable {
        require(msg.value > 0, "No ether sent");
        require(tickets[key]>0, "No fine");
        require(msg.value >= tickets[key], "No enough ether "); 
        if(msg.value > tickets[key]){
            uint256 rest = 0;
            rest = msg.value - tickets[key];
            owner.transfer(tickets[key]);
            payable(msg.sender).transfer(rest);
        }
        tickets[key] = 0;
        emit paid(key);
    }

    function getTicketValue(bytes memory key) public view returns (uint256)
    {   
        return tickets[key];
    }
    function getTicketValues(bytes[] memory keys) public view returns (uint256[] memory) {
    uint256[] memory result = new uint256[](keys.length);
    for (uint256 i = 0; i < keys.length; i++) {
        result[i] = tickets[keys[i]];
    }
    return result;
}

}