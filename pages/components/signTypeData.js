



 async function signTypedData(web3Provider, from, dataStructure) {
  const signature =  await web3Provider.currentProvider.request(
    {method: "eth_signTypedData_v4",
    params:[from, JSON.stringify(dataStructure)], 
    from: from
    })

  // const data =  await signTypedData(web3, account, dataStructure, msg)
 console.log("signature",signature);
const sign = signature.substring(2);
const r = "0x" + sign.substring(0, 64);
const s = "0x" + sign.substring(64, 128);
const t = sign.substring(128, 130)
const v = parseInt(sign.substring(128, 130), 16);
return {
  signature,
  sign,
r,
s,
t,
v
}
  }

  export default signTypedData;