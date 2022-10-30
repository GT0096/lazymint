

export async function mintNft(data){
const  myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const raw = JSON.stringify(data)
  console.log(raw);

  let requestOptionsmint = await {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  // @ts-ignore
 await fetch("https://ethereum-api.rarible.org/v0.1/nft/mints", requestOptionsmint)
    .then(response => response.text())
    .then(result => console.log("result",result))
    .catch(error => console.log('error', error));
}