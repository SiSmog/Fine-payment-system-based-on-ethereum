const CONTRACT={
    "address":"0x5DEcF07771ad923eC461B4a736f39634FCE3F0b0",//put address after deployment
    "ABI":[
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "hash",
                    "type": "string"
                }
            ],
            "name": "paid",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                }
            ],
            "name": "pay",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "register",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "hash",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "registered",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                }
            ],
            "name": "getRegistrationValue",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "registrations",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
};
export default CONTRACT;