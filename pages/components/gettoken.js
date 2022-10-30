

export async function  getToken(web3, account) {
    let tokenId 
    let signature
    let requestOptions = {
      method: 'GET',
      // redirect: 'follow'
    };
    const endpoint = 'https://ethereum-api.rarible.org/v0.1/nft'
    const url = endpoint + `/collections/c9154424B823b10579895cCBE442d41b9Abd96Ed/generate_token_id?minter=${account}`
    console.log(url);
    console.log("web3",web3);
    try {
       await fetch(url, requestOptions).then(response => response.text())
      .then((result) => {
        console.log(result);
        const res = JSON.parse(result)
        console.log(res);
       tokenId = res.tokenId
        // (res.signature.v).tostring(16)
        console.log(res.signature.v);
        const num = res.signature.v
        console.log(num.toString(16));
       signature ="0x" + res.signature.r.substring(2) + res.signature.s.substring(2) + num.toString(16)
      })
      console.log(tokenId);

    } catch (error) {
      console.log(error);
    }

    return {tokenId,
      signature}
}