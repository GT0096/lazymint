export async function typedData(web3Provider,msg) {
   const chainId = await web3Provider.eth.getChainId()
    const dataStructure = {
        "types": {
          "EIP712Domain" : [
            {
              type: "string",
              name: "name",
            },
            {
              type: "string",
              name: "version",
            },
            {
              type: "uint256",
              name: "chainId",
            },
            {
              type: "address",
              name: "verifyingContract",
            }
          ],
          "Mint721": [
              {"name": "@type", "type": "string"},
              {"name": "contract", "type": "address"},
              {"name": "tokenId", "type": "uint256"},
              {"name": "uri", "type": "string"},
              {"name": "creators", "type": "Part[]"},
              {"name": "royalties", "type": "Part[]"}
          ],
          "Part": [
              { name: "account", type: "address" },
              { name: "value", type: "uint96" }
          ]
      },
      "domain": {
          name: "Mint721",
          version: "1",
          chainId:chainId ,
          verifyingContract: "0xc9154424B823b10579895cCBE442d41b9Abd96Ed"
      },
      "primaryType": "Mint721",
      "message": msg,
      }

      return dataStructure;
}