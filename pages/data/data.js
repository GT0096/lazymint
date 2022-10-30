export function msgData(tokenId, account) {
    const msg = {
        "@type": "ERC721",
        "contract": "0xc9154424B823b10579895cCBE442d41b9Abd96Ed",
        "tokenId": tokenId,
        "uri": "/ipfs/QmQ1MhYYXDg5hpSfuiqPQpn72QjEUdBWa3fwUyfhQnjCA1",
        "creators": [
            { 
                account: `${account}`, 
                value: 10000 
            }
        ],
        "royalties": [
            { 
                account: `${account}`, 
                value: 2000 
            }
        ],
      };

      return msg;
}

