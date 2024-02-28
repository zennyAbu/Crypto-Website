const apiKey = "CG-aKAwwtERqwbdFi1xVjniVEkr";
const apiUrl =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd";

async function getData() {
  const response = await fetch(apiUrl + `&x_cg_demo_api_key=${apiKey}`);
  let data = await response.json();

  console.log(data);
}
