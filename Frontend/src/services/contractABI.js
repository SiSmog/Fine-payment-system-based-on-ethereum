const CONTRACT={
    "address":"0x17FF8f500D881B2e0200f4F2D4748b89E6272e01",//put address after deployment
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
                    "internalType": "bytes",
                    "name": "hash",
                    "type": "bytes"
                }
            ],
            "name": "paid",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "key",
                    "type": "bytes"
                }
            ],
            "name": "pay",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "hash",
                    "type": "bytes"
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
                    "internalType": "bytes",
                    "name": "key",
                    "type": "bytes"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "registerTicket",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "key",
                    "type": "bytes"
                }
            ],
            "name": "getTicketValue",
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
                    "internalType": "bytes[]",
                    "name": "keys",
                    "type": "bytes[]"
                }
            ],
            "name": "getTicketValues",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "name": "tickets",
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